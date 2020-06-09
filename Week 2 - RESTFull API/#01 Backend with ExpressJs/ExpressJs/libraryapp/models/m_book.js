/**
 * Config MySQL
 * .
 * load config mysql
 */
const conn = require('./src/helpers/mysql');
// import custom response
const myResponse = require("./src/helpers/myResponse");

// connect function
function connect() {
    conn.connect(function (error) {
        if (error) throw error;
        console.log("DB Connected!");
    });
}

function get_all() {
        
}