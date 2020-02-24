//Requires : aca se importa las librerias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// inicializar variables: aca uso las librerias
var app = express();

//body Parser
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


// importar rutas
var appRoutes = require('./routes/app_route');
var UsuarioRoutes = require('./routes/usuario_route');                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   


//conexion a la bd
mongoose.connection.openUri('mongodb://localhost:27017/hospitalDB', (err, res) => {

    if (err) throw err;

    console.log('Base de datos: \x1b[32m%s\x1b[0m', 'online');

});

//Midelware-rutas
app.use('/',UsuarioRoutes);
app.use('/',appRoutes);


//escuchar peticiones 
app.listen(3000, () => {
    console.log('Express server puerto 3000: \x1b[32m%s\x1b[0m', 'online');
})


