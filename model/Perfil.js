const moongoose = require('mongoose');

const PerfilSchema = new moongoose.Schema({
    tipo: {
        type: String,
        required: true
    }    
});

const Perfil = moongoose.model('Perfil', PerfilSchema);
module.exports = Perfil;