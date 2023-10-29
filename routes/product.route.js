const express = require('express')
var api = express.Router();

const productController = require('../controllers/product.controller')
var api = express.Router();

api.get('/listado', productController.listaProductos)
api.get('/buscar', productController.searchProduct)
api.post('/registrar', productController.addVarios)

module.exports = api;