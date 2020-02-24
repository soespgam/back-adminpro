'use strict'
var express = require('express');


var app = express();
var Usuario = require('../models/usuario');

//importacion de esquema de usuario
app.get = require('../models/usuario');

 // =====obtener usuarios (get)=====

 app.get('/', (req, res, next) => {

    Usuario.find({}, 'nombre email img role')
        .exec(
            (err, usuarios) => {

                if (err) {
                    return res.status(500).json({
                        ok: false,
                        mensaje: 'Error cargando usuario',
                        errors: err
                    });
                }

                res.status(200).json({
                    ok: true,
                    usuarios: usuarios
                });



            });
});

//=====crear usuarios (post)=====
app.post('/',(req,res)=>{
    var body = req.body;

    //creo el usuario
    var usuario  = new Usuario({
        nombre: body.nombre,
        apellido: body.apellido,
        email: body.email,
        password: body.password,
        img: body.img,
        role:body.role
    });

    //guardo el usuario
    usuario.save((err,usuarioGuardado)=>{
        if (err) {
            return res.status(500).json({
                ok: false,
                mensaje: 'error al crear usuario',
                errors: err
            })
        }
        res.status(201).json({
            ok: true,
            usuario: usuarioGuardado
        });
    
    });

});

module.exports = app;