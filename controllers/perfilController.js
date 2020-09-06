const express = require('express');
const yup = require('yup');
const Perfil = require('../model/Perfil');
const db = require('../database/db');
const asyncHandler = require('express-async-handler');

const router = express.Router();

const schema = yup.object().shape({
    tipo: yup.string().required()
});

router.post('/cadastrar', asyncHandler(async(req, res) => {
    schema.isValid(req.body)
    .then(function (valid) {
        if(valid){
            const perfil = Perfil.create(req.body);
            res.send();         
        } else {
            res.status(400).send('Dados incorretos!');
        }   
    });
}));

router.get('/listar', asyncHandler(async(req, res) => {

    const perfis = await Perfil.find();
    console.log(perfis);
    res.send(perfis);

}));

router.get('/deletar/:tipo', asyncHandler(async(req, res) => {

        const perfil = await Perfil.deleteOne({ tipo: req.params.tipo }, function (err) {});
        res.send();

}));

module.exports = app => app.use('/perfil', router)
