const express = require('express')
var api = express.Router();

const userController = require('../controllers/user.controller')
var api = express.Router();

api.get('/buscar', userController.searchUser)
api.get('/listado', userController.obtenerLista)
api.get('/doctores', userController.listaDoctores)
api.get('/enfermeros', userController.listaEnferm)
api.get('/pacientes', userController.listaPacientes)
api.post('/registrar', userController.registerUser)
api.post('/login', userController.loginUser)
api.put('/modificar', userController.updateUser)

module.exports = api;