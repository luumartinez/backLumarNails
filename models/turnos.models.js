const mongoose = require('mongoose');
const { Schema } = mongoose;

const turnosSchema = new Schema ({
    nombre:{
        type: String,
        require: true,
        trim: true,
        min:2,
        max:15
    },
    apellido:{
        type: String,
        require: true,
        trim: true,
        min:2,
        max:15
    },
    fecha:{
        type: String,
        require: true,
        trim: true
    },
    hora:{
        type: String,
        require: true,
        match: /^([01]\d|2[0-3]):([0-5]\d)$/,
        unique: true
    },
    servicio:{
        type: String, 
        require: true
    }
}, {versionKey: false})

const TurnosModel = mongoose.model("turnos", turnosSchema);

module.exports = TurnosModel;