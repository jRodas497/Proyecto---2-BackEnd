const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors())

const userController = require('./controllers/user.controller');
const userRoutes = require('./routes/user.route');

const productController = require('./controllers/product.controller')
const productRoutes = require('./routes/product.route')

const citaRoutes = require('./routes/cita.route')
const billRoutes = require('./routes/bill.route')

app.use('/user', userRoutes)
app.use('/product', productRoutes)
app.use('/cita', citaRoutes)
app.use('/bill', billRoutes)

app.listen(process.env.PORT || 3000, function () {

    userController.addDoctores()
    userController.addEnfermeras()
    productController.addVarios()
    console.log('Ejecución en el puerto ' + port);
    console.log('Todu bem');
    
})