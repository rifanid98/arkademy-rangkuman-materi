/**
 * ExpressJs FW
 */
// import express framework
const express = require('express');
// instance of express framework
const app = express();

/**
 * custom config
 * .
 * load semua konfigurasi yang kita buat
 * di file .env
 */
// env config
require('dotenv').config();
// import custom global config
const config = require('./src/configs/global');

/**
 * body-parser
 * .
 * digunakan sebagai perantara penerimaan data
 * dari client ke backend (umumnya form data).
 * tapi bisa juga menerima data berupa json
 */
// import body-parser library
const bodyParser = require('body-parser');

/**
 * Morgan
 * .
 * untuk menampilkan log dari aktivitas api
 */
// import morgan library
const morgan = require('morgan');

/**
 * Config MySQL
 * .
 * load config mysql
 */
const conn = require('./src/helpers/mysql');
// connect function
function connect(){
    conn.connect(function (error) {
    if (error) throw error;
    console.log("DB Connected!");
    });
}


/**
 * response helper
 * .
 * merapihkan output
 * response: function(res, statusExecution, data, statusCode, message)
 */
const myResponse = require("./src/helpers/myResponse");

/**
 * config middleware
 * .
 * body-parser
 * morgan
 */
// get data from form data
app.use(bodyParser.urlencoded({extended: true,}));
// get data from json
app.use(bodyParser.json());
// morgan middleware
app.use(morgan('dev'));

/**
 * Routes
 */
// Get All Products
app.get('/products', function(req, res) {
    // res.send('Hello World');
    conn.query("SELECT * FROM products", function (err, result) {
      if (err) {
          console.log(err);
          return myResponse.response(res, "fail", result, 500, "Internal Server Error");
      }
      
      return myResponse.response(res, 'success', result, 200, "Ok");
    //   res.status(200).json(result);
    });
})
// Post a Product
app.post('/products', function(req, res){
    const data = req.body;
    conn.query("INSERT INTO products SET ? ", data, function (err, result) {
        if (err) {
            console.log(err);
            return myResponse.response(res, "fail", result, 500, "Internal Server Error");
        }

        const newData = {
            product_id : result.insertId,
            ...data
        }
        return myResponse.response(res, 'success', newData, 201, "Created!");
    });
})
// Update a Product
app.patch('/products/:id', function(req, res){
    const data = req.body;
    const id   = req.params.id;
    conn.query("UPDATE products SET ? WHERE product_id=? ", [data, id], function (err, result) {
        if (err) {
            console.log(err);
            return myResponse.response(res, "fail", result, 500, "Internal Server Error. " + err.sqlMessage);
        }
        
       
        if (result.affectedRows > 0) {
            let newData = {
                product_id: req.params.id,
                ...data
            }
            return myResponse.response(res, 'success', newData, 201, "Updated!");
        } else {
            let newData = {
                product_id: req.params.id,
            }
            return myResponse.response(res, 'failed', newData, 404, "Not Found that id, data not updated.");
        }
    });
})
// Delete a Product
app.delete('/products/:id', function(req, res){
    const id   = req.params.id;
    conn.query("DELETE FROM products WHERE product_id=(SELECT product_id FROM products WHERE product_id=?) ", id, function (err, result) {
        if (err) {
            console.log(err);
            return myResponse.response(res, "fail", result, 500, "Internal Server Error. " + err.sqlMessage);
        }

        const newData = {
            product_id: req.params.id
        }
        
        if (result.affectedRows > 0){
            return myResponse.response(res, 'success', newData, 200, "Deleted!");
        } else {
            return myResponse.response(res, 'failed', newData, 404, "Not Found!");
        }
    });
})

/**
 * Starting the server
 */
app.listen(3000, function() {
    console.log('It\'s Working!');
    // connect mysql db if server is established
    connect();
})