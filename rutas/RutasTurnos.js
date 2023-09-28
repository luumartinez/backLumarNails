const express = require ('express');
const router = express.Router();

const turnosController = require('../controllers/turnosController')

router.get("/turnosAgendados", turnosController.mostrarTurnos);

router.post("/agendarTurno", turnosController.agendarTurno);

router.put("/:id", turnosController.editarTurno);

router.delete("/:id", turnosController.eliminarTurno);

module.exports = router