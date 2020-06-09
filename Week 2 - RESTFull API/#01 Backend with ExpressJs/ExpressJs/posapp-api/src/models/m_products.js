/**
 * Config MySQL
 * .
 * load config mysql
 */
const conn = require('../helpers/mysql');

module.exports = {

    getAllDatas: function() {
        return new Promise((resolve, reject) => {
            conn.query("SELECT * FROM products", function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        })
    },

    addData: function(data) {
        return new Promise((resolve, reject) => {
            conn.query("INSERT INTO products SET ? ", data, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        })
    },

    updateData: function(data, id) {
        return new Promise((resolve, reject) => {

            conn.query("UPDATE products SET ? WHERE product_id=? ", [data, id], function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        })
    },

    deleteData: function(id) {
        return new Promise((resolve, reject) => {

            conn.query("DELETE FROM products WHERE product_id=(SELECT product_id FROM products WHERE product_id=?) ", id, function (error, result) {
                if (error) {
                    reject(error);
                }
                resolve(result);
            })
        })
    }
}