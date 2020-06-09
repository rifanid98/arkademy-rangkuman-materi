/**
 * Model
 * .
 * Load Model
 */
const productModel = require("../models/m_products");

/**
 * custom response helper
 * .
 * merapihkan output
 * response: function(res, statusExecution, data, statusCode, message)
 */
const myResponse = require("../helpers/myResponse");



module.exports = {

    getAllProducts: async function (req, res) {
       try {
           const result = await productModel.getAllDatas();
           return myResponse.response(res, 'success', result, 200, "Ok!");
       } catch (error) {
           console.log(error);
           return myResponse.response(res, "failed", result, 500, "Internal Server Error");
       }
    },

    postProduct: async function (req, res) {
        try {
            const data = req.body;
            const result = await productModel.addData(data);
            const newData = {
                product_id: result.insertId,
                ...data
            }
            return myResponse.response(res, 'success', newData, 201, "Created!");
        } catch (error) {
            console.log(error);
            return myResponse.response(res, "failed", result, 500, "Internal Server Error");
        }
    },

    patchProduct: async function (req, res) {
        const data = req.body;
        const id = req.params.id;
        const result = await productModel.updateData(data, id);
        try {
            if (result.affectedRows > 0) {
                const newData = {
                    product_id: id,
                    ...data
                }
                return myResponse.response(res, 'success', newData, 200, "Updated!");
            } else {
                const newData = {
                    product_id: req.params.id,
                }
                return myResponse.response(res, 'failed', newData, 404, "Not Found that id, data not updated.");
            }
        } catch (error) {
            console.log(error);
            return myResponse.response(res, "failed", result, 500, "Internal Server Error. " + err.sqlMessage);   
        }
    },

    deleteProduct: async function (req, res) {
        const id = req.params.id;
        const result = await productModel.deleteData(id);
        try {
            if (result.affectedRows > 0) {
                const newData = {
                    product_id: id,
                }
                return myResponse.response(res, 'success', newData, 200, "Deleted!");
            } else {
                const newData = {
                    product_id: req.params.id,
                }
                return myResponse.response(res, 'failed', newData, 404, "Not Found that id, data not deleted.");
            }
        } catch (error) {
            console.log(error);
            return myResponse.response(res, "failed", result, 500, "Internal Server Error. " + err.sqlMessage);
        }
    }
}