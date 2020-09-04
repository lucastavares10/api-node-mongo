const express = require('express');
const yup = require('yup');
const Usuario = require('../model/Usuario');
const sequelize = require('../database/db');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(6).max(32),
});

router.post('/cadastrar', asyncHandler(async(req, res) => {
        schema.isValid(req.body)
        .then(function (valid) {
            if(valid){
                const usuario = Usuario.create(req.body);
                res.status(200).send();         
            } else {
                res.status(400).send('Dados incorretos!');
            }   
        });
}));

router.get('/listar', asyncHandler(async(req, res) => {

        const usuarios = await Usuario.find();
        console.log(usuarios);
        res.status(200).send(usuarios);

}));

router.get('/deletar/:id', asyncHandler(async(req, res) => {

            const usuario = await Usuario.deleteOne({ _id: req.params.id }, function (err) {});
            res.status(200).send();
    
}));

router.post('/editar', asyncHandler(async(req, res) => {
    
    schema.isValid(req.body).then(function (valid) {
        if(valid){
                Usuario.findByIdAndUpdate(req.body.id, { 
                    nome: req.body.nome, 
                    email: req.body.email,
                    senha: req.body.senha }, 
                    function(err, result) {
                        if (err) {
                          res.send(err);
                        } else {
                          res.send(result);
                        }
                });

        } else {
            res.status(400).send('Dados incorretos!');
        }
    });      

}));

module.exports = app => app.use('/auth', router)