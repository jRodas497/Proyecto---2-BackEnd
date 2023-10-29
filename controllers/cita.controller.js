const { addCita, search, listado } = require('../modules/cita.module')

function registrarCita(req, response) {
    const params = addCita(req.body)

    if (params === 0) {
        response.status(409).json({
            estado: "Error",
            mensaje: "Se deben de llenar todos los parametros"
        })
    } else if(params === 1) {
        response.status(409).json({
            estado: "Error",
            mensaje: "Usuarios enviados no validos"
        })
    } else {
        response.status(201).json({
            mensaje: "Cita añadida con exito!",
            data: date
        })
    }
}

function buscarCita(req, response) {
    const params = search(req.body)

    if (params) {
        response.status(302).json({
            mensaje: "Ok",
            data: params
        })
    } else {
        response.status(400).json({
            mensaje: "No se encontro la cita"
        })
    }
}

function listaCitas(req, params) {
    const lista = listado()
    
    if (lista) {
        response.status(200).json({
            mensaje: "Ok",
            data: lista
        })
    } else {
        response.status(400).json({
            mensaje: "No se obtuvo el listado"
        })
    }
}

module.exports = {
    registrarCita,
    buscarCita,
    listaCitas
}