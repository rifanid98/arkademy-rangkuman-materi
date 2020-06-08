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
// imnport custom global config
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
        if (err) throw err;

        res.status(201).json(result);
    });
})
// Update a Product
app.patch('/products/:id', function(req, res){
    const data = req.body;
    const id   = req.params.id;
    conn.query("UPDATE products SET ? WHERE product_id=? ", [data, id], function (err, result) {
        if (err) throw err;
        
        res.status(200).json(result);
    });
})
// Delete a Product
app.delete('/products/:id', function(req, res){
    const id   = req.params.id;
    conn.query("DELETE FROM products WHERE product_id=? ", id, function (err, result) {
        if (err) throw err;

        res.status(200).json(result);
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