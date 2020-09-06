const mongoose = require('mongoose');

const UsuarioSchema = new mongoose.Schema({
    nome: {
      type: String,
      required:true,
    },
    email: {
      type: String,
      required:true,
      unique: true,
      lowercase: true,
    },
    senha: {
        type: String,
        required:true,
        select: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    perfil: {
      type: mongoose.Types.ObjectId, ref: "Perfil"
    }
});

const Usuario = mongoose.model('Usuario', UsuarioSchema);
module.exports = Usuario;