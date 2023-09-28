const mongoose = require('mongoose');
const { Schema } = mongoose;

const usuariosSchema = new Schema({
    nombre:{
        type: String,
        require: true,
        max: 15,
        min: 2,
        trim: true
    },
    apellido:{
        type: String,
        require: true,
        max: 15,
        min: 2,
        trim: true
    },
    email: {
        type: String,
        require: true,
        unique: true,
        max: 30,
        min: 7,
        trim: true
    },
    password: {
        type: String,
        require: true,
        max: 15,
        min: 4,
        trim: true
    },
    rol: {
        type: String,
        require: true,
        max: 15,
        min: 2,
        trim: true
     }
}, {versionKey: false});

const UsuariosModel = mongoose.model("usuarios", usuariosSchema);

module.exports = UsuariosModel;