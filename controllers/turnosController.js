
const TurnosModel = require('../models/turnos.models');

//GET

const mostrarTurnos = async (req, res) =>{
    try {
        const turnos = await TurnosModel.find();
        res.json(turnos)
    } catch (error) {
        res.status(400).json("no encontrado")
        res.status(500).json("error del servidor")
    }
};

//POST

const agendarTurno = async (req, res) =>{
    try {
        const turno = new TurnosModel(req.body);
        await turno.save();
        res.status(201).json("turno agendado")

    } catch (error) {
        res.status(400).json(error)
    }
};

// PUT

const editarTurno = async (req, res)=>{
    try {
        const id = req.params.id;
        const turno = await TurnosModel.findById(id);
        if (turno){
            turno.nombre = req.body.nombre;
            turno.apellido = req.body.apellido;
            turno.fecha = req.body.fecha;
            turno.hora = req.body.hora;
            turno.servicio = req.body.servicio;
            const turnoEditado = await turno.save();
            res.status(200).json("Turno actualizado")
        } else {
            res.status(404).json("turno no encontrado")
        }
    } catch (error) {
        res.status(400).json("Error 400")
    }
};

// DELETE

const eliminarTurno = async (req,res) =>{
    try {
        const id = req.params.id;
        const turno = await TurnosModel.findById(id);
        if (turno){
            await TurnosModel.deleteOne({_id: id});
            res.status(200).json("turno eliminado")
        } else {
            res.status(404).json("turno no encontrado")
        }
    } catch (error) {
        res.status(400).json("error 400")
    }
}

module.exports = { mostrarTurnos, agendarTurno, editarTurno, eliminarTurno }