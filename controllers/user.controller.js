const { response } = require("express")
const { addUser, search, update, contador, user, login, listado, listDoc, listEnf, listCln } = require("../modules/user.module")

/*
Nombre              [0]
Apellido            [1]
Nombre de Usuario   [2]
Contraseña          [3]
Télefono            [4]
Nacimiento          [5]
Género              [6]
*/

function fecha() {
    var dia
    var mes
    var año

    do {
        var decimalDia = Math.random()*27
        dia = Math.floor(decimalDia)
        
        var decimalMes = Math.random()*11
        mes = Math.floor(decimalMes)

        var decimalAño = Math.random()*5
        año = Math.floor(decimalAño)

        dia++
        mes++
        
    } while (dia > 1 && mes > 1 && año <= 1);

    año = 2000 + año

    return {
        dia,
        mes,
        año
    }
}

function mainStart(request, response) {
    
    var f = fecha()
    var nacimiento = f.dia + '/' + f.mes + '/' + f.año
    console.log(nacimiento); 
}

function registerUser(req, response){
    const params = addUser(req.body)

    if (params === 0) {
        response.status(409).json({
            estado: "Error",
            mensaje: "No se puede repetir el usuario",
        })
    
    }else if(params === 1){
        response.status(409).json({
            estado: "Error",
            mensaje: "Algo malo ocurrio con el registro del usuario"
        })
    }else if(params === 2){
        response.status(409).json({
            estado: "Error",
            mensaje: "Algo malo ocurrio con el registro del usuario"
        })
    }else{
        response.status(201).json({
            mensaje: "Usuario añadido con exito!",
            data: usuario
        })
    }
}

function addDoctores() {
    doc1 = {
        "nombre": "Doctor 1",
        "usuario": "dococo",
        "password": "1234abcd",
        "telefono": "12345678",
        "nacimiento": "02/08/1984",
        "rol": 0
    }

    doc2 = {
        "nombre": "Doctor Perez",
        "usuario": "perezPdc",
        "password": "abcd1234",
        "telefono": "87654321",
        "nacimiento": "10/10/1968",
        "rol": 0
    }

    doc3 = {
        "nombre": "Doctor Hernandez",
        "usuario": "hernanDoctor",
        "password": "doctor.12",
        "telefono": "14785236",
        "nacimiento": "01/10/1990",
        "rol": 0
    }

    addUser(doc1)
    addUser(doc2)
    addUser(doc3)
}

function addEnfermeras() {
    enf1 = {
        "nombre": "Maria Jose",
        "usuario": "majo123",
        "password": "8521maria",
        "telefono": "12345786",
        "nacimiento": "08/12/1995",
        "rol": 1
    }

    enf2 = {
        "nombre": "Carlos Marroquin",
        "usuario": "marrlos",
        "password": "carlosKing",
        "telefono": "75315982",
        "nacimiento": "02/18/1996",
        "rol": 1
    }
    enf3 = {
        "nombre": "Alejandra Escobedo",
        "usuario": "escoAndrA",
        "password": "alejitaBDO",
        "telefono": "75135946",
        "nacimiento": "09/01/1999",
        "rol": 1
    }

    addUser(enf1)
    addUser(enf2)
    addUser(enf3)
}

function obtenerLista(req, response) {
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

function listaDoctores(req, response) {
    const lista = listDoc()

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

function listaEnferm(req, response) {
    const lista = listEnf()

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

function listaPacientes(req, response) {
    const lista = listCln()

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

function searchUser(req, response) {
    const params = search(req.body)

    if (params) {
        response.status(302).json({
            mensaje: "Ok",
            data: params
        })
    } else {
        response.status(400).json({
            mensaje: "No se encontro al usuario"
        })
    }
}

function updateUser(req, response) {
    const params = update(req.body)

    console.log(params);

    if (params) {
        response.status(200).json({
            mensaje: "Ok",
            data: params
        })
    } else {
        response.status(400).json({
            smensaje: "No se encontro al usuario con el id "
        })
    }
}

function loginUser(req, response) {
    const params = login(req.body)

    console.log(params);
    response.status(200).json(params)
}


module.exports = {
    mainStart,
    fecha,
    registerUser,
    searchUser,
    updateUser,
    addDoctores,
    obtenerLista,
    addEnfermeras,
    listaDoctores,
    listaEnferm,
    listaPacientes,
    loginUser
}