const { idUser } = require ('../modules/user.module');
const cita = []
let contador = 1;

const search = (data) => {
    const ct = cita.find(cita => cita.id === data.id)
    return ct
}

const listado = () => {
    return cita
}

const addCita = (data) => {
    const idUs = idUser(data.paciente)
    //const idDoc = idUser(data.doctor)

    if (idUs) {
        if (data.fecha && data.hora && data.motivo) {
            date = {
                id: contador,
                fecha: data.fecha,
                hora: data.hora,
                motivo: data.motivo,
                estado: 0,
                idPaciente: data.paciente,
                idDoctor: 0
            }
            contador++
            
            cita.push(date)
            console.log(cita);
            return date
        } else {
            console.log("Se deben de llenar todos los parametros");
            return 0
        }
    }else{
        console.log("No se encontro el usuario enviado");
        return 1
    }    
}

const citaPendiente = () => {
    const pend = cita.filter(cita => cita.estado === 0)
    return pend
}

const citaAceptada = () => {
    const pend = cita.filter(cita => cita.estado === 1)
    return pend
}

const citaRechazada = () => {
    const pend = cita.filter(cita => cita.estado === 2)
    return pend
}

const citaCompletada = () => {
    const pend = cita.filter(cita => cita.estado === 3)
    return pend
}

module.exports = {
    search,
    listado,
    addCita,
    citaPendiente,
    citaAceptada,
    citaRechazada,
    citaCompletada
}