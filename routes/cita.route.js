const express = require('express')
var api = express.Router();

const citaController = require('../controllers/cita.controller')
var api = express.Router();

api.get('/buscar', citaController.buscarCita)
api.get('/listado', citaController.listaCitas)
api.post('/registrar', citaController.registrarCita)

module.exports = api;