const product = []
contador = 1;

const search = (data) => {
    const prd = product.find(product => product.nombre === data.nombre)
    return prd
}

const addPrd = (data) => {
    const existe = product.find(product => product.nombre === data.nombre)
    if(existe) return 0

    if (data.descripcion && data.precio && data.cantidad) {
        prod = {
            id: contador,
            nombre: data.nombre,
            descripcion: data.descripcion,
            precio: data.precio,
            cantidad: data.cantidad
        }
        contador++;

        product.push(prod)
        console.log(product);
        return prod
    }else{
        console.log("Se deben de llenar todos los parametros");
        return 1
    }
}

const listado = () => {
    return product
}

module.exports = {
    search,
    addPrd,
    listado
}