const mongoose = require('mongoose');
const { Schema } = mongoose;

const servicioSchema = new Schema({
    nombre: {
        type: String,
        require: true,
        trim: true,
        unique:true
    },
    precio: {
       type: Number,
       require: true
    }
}, {versionKey: false});

const ServicioModel = mongoose.model("servicios", servicioSchema);

module.exports = ServicioModel;