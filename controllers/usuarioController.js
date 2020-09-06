const express = require('express');
const yup = require('yup');
const Usuario = require('../model/Usuario');
const db = require('../database/db');
const asyncHandler = require('express-async-handler');
const Perfil = require('../model/Perfil');

const router = express.Router();

const schema = yup.object().shape({
    nome: yup.string().required(),
    email: yup.string().required().email(),
    senha: yup.string().required().min(6).max(32),
    perfil: yup.string().required()
});

router.post('/cadastrar', asyncHandler(async(req, res) => {
        schema.isValid(req.body)
        .then(function (valid) {
            if(valid){
                (async () => {
                    const usuario = await Usuario.create({
                        "nome": req.body.nome,
                        "email": req.body.email,
                        "senha": req.body.senha,
                        "perfil": await Perfil.findOne({ tipo: String(req.body.perfil) }),
                    });
                    res.send();  
                })();
  
            } else {
                res.status(400).send('Dados incorretos!');
            }   
        });
}));

router.get('/listar', asyncHandler(async(req, res) => {

        const usuarios = await Usuario.find().populate("perfil");
        console.log(usuarios);
        res.send(usuarios);

}));

router.get('/deletar/:email', asyncHandler(async(req, res) => {

            const usuario = await Usuario.deleteOne({ email: req.params.email }, function (err) {});
            res.send();
    
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

module.exports = app => app.use('/usuario', router)