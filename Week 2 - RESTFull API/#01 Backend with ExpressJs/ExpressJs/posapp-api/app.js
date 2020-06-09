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
// load the controller
const routes = require('./src/routes/r_index');
// fire the routes
app.use('/', routes);

/**
 * Starting the server
 */
app.listen(3000, function() {
    console.log('It\'s Working!');
    // connect mysql db if server is established
    connect();
})