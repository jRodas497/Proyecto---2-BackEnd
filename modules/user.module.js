const user = []
let contador = 1;

const search = (data) => {
    const us = user.find(user => user.usuario === data.usuario)
    return us
}

const idUser = (data) => {
    const us = user.find(user => user.id === data.id)
    return us
}

const listado = () => {
    return user
}

const listDoc = () => {
    const doc = user.filter(user => user.rol === 0)
    return doc
}

const listEnf = () => {
    const enf = user.filter(user => user.rol === 1)
    return enf
}

const listCln = () => {
    const cln = user.filter(user => user.rol === 2)
    return cln 
}

const addUser = (data) => {
    //console.log(data);
    const existe = user.find(user => user.usuario === data.usuario)
    if(existe) return 0

    if (data.password.length < 8) {
        console.log("El largo de la contraseña debe de ser mayor o igual a 8");
        return  1       
    }

    if (data.nombre && data.password && data.nacimiento) {
        usuario = {
            id: contador,
            nombre: data.nombre,
            usuario: data.usuario,
            password: data.password,
            telefono: data.telefono,
            nacimiento: data.nacimiento,
            rol: data.rol
        }        
        contador++
    
        user.push(usuario)
        console.log(user)
        return usuario   
    }else{
        console.log("Se deben de llenar todos los parametros");
        return 2
    }        
}

const update = (data) => {
    if (user.usuario === data.usuario) {
        console.log('asasdasd');
    }else{
        console.log('wwwewewe');
    }
    console.log(user);
}

const login = (data) => {
    const existe = user.find(user => user.usuario === data.usuario)
    if(existe) {
        if(existe.password === data.password){
            return { 
                data: existe 
            }
            
        }else{
            return {
                estado: 'Error',
                mensaje: 'No existen coincidencias con la contraseña'
            }
        }
    }else{
        return {
            estado: 'Error',
            mensaje: 'No existe el usuario'
        }
    }
}

module.exports = {
    user,
    search,
    addUser,
    update,
    contador,
    login,
    listado,
    listDoc,
    listEnf,
    listCln,
    idUser
}