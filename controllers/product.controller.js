const { listado, addPrd, search } = require('../modules/product.module')

function listaProductos(req, response) {
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

function searchProduct(req, response) {
    const params = search(req.body)

    if (params) {
        response.status(302).json({
            mensaje: "Ok",
            data: params
        })
    }else{
        response.status(400).json({
            mensaje: "No se encontro el producto"
        })
    }
}

function addVarios() {
    prod1 = {
        "nombre": "Paracetamol | Blister",
        "descripcion": "Analgésico y antipirético eficaz para el control del dolor leve o moderado causado por afecciones articulares, otalgias, cefaleas, dolor odontogénico, neuralgias, procedimientos quirúrgicos menores etc.",
        "precio": 34,
        "cantidad": 6
    }

    prod2 = {
        "nombre": "Ibuprofeno | Blister",
        "descripcion": "Se utiliza para aliviar el dolor, la inflamación y la fiebre. Es efectivo en el tratamiento de dolores musculares, dolores de cabeza, artritis, y otras condiciones que causan inflamación.",
        "precio": 50,
        "cantidad": 5
    }

    prod3 = {
        "nombre": "Omeprazol | Caja",
        "descripcion": "Se utiliza para tratar afecciones relacionadas con el exceso de ácido estomacal, como la acidez estomacal, la úlcera péptica y el reflujo ácido. También puede ayudar a sanar el esófago dañado por el ácido.",
        "precio": 140,
        "cantidad": 10
    }

    prod4 = {
        "nombre": "Amoxicilina | Caja",
        "descripcion": "antibiótico de amplio espectro que se utiliza para tratar una variedad de infecciones bacterianas, como infecciones del oído, infecciones del tracto respiratorio, infecciones de la piel y las vías urinarias.",
        "precio": 200,
        "cantidad": 15
    }

    prod5 = {
        "nombre": "Loratadina | Blister",
        "descripcion": "Ayuda a reducir la producción de histamina en el cuerpo, lo que disminuye los síntomas de alergia.",
        "precio": 44,
        "cantidad": 6
    }

    prod6 = {
        "nombre": "Simvastatina | Blister",
        "descripcion": "Ayuda a reducir los niveles altos de colesterol y triglicéridos en la sangre.",
        "precio": 50,
        "cantidad": 10
    }

    addPrd(prod1)
    addPrd(prod2)
    addPrd(prod3)
    addPrd(prod4)
    addPrd(prod5)
    addPrd(prod6)
}

module.exports = {
    addVarios,
    searchProduct,
    listaProductos
}