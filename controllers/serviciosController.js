
const ServicioModel = require('../models/servicios.models')

// GET

const obtenerServicios = async (req, res) =>{
    try {
        const servicios = await ServicioModel.find();
        res.json(servicios)
    } catch (error) {
        res.status(400).json("no encontrada");
        res.status(500).json("error del servidor")
    }
}

const obtenerServicioPorId = async (req, res) =>{

    try {
        
        const id = req.params.id;
        const servicio = await ServicioModel.findById(id);
        if (servicio){
            res.json(servicio)
        } else{
            res.status(404).json("servicio no encontrado")
        }
    } catch (error) {
        res.status(400).json("error 404")
        res.status(500).json("error del servidor")
    }

}

//CREAR


const crearServicio = async (req, res) =>{
  try {
    const servicio = new ServicioModel(req.body);
    await servicio.save();
    res.status(201).json(servicio)
    
  } catch (error) {
    res.status(409).json("Producto ya agregado")
  }
}

//ACTUALIZAR

const actualizarServicio = async (req, res) =>{
    try {
        const id = req.params.id;
        const servicio = await ServicioModel.findById(id);
        if (servicio) {
            servicio.nombre = req.body.nombre;
            servicio.precio = req.body.precio
            const servicioActualizado = await servicio.save();
            res.status(200).json(servicioActualizado)
        } else {
            res.status(404).json("servicio no encontrado")
        }
    } catch (error) {
        res.status(400).json("error 404")
    }
}

// ELIMINAR

const eliminarServicio = async (req, res) =>{
    try {
        const id = req.params.id;
        const servicio = await ServicioModel.findById(id);
        if (servicio){
            await ServicioModel.deleteOne({ _id: id });
            res.status(200).json("servicio eliminado")
        } else {
            res.status(404).json("servicio no encontrado")
        }
    } catch (error) {
        res.status(400).json("error 404")
        
    }
}

module.exports = {obtenerServicios, obtenerServicioPorId, crearServicio, actualizarServicio, eliminarServicio}