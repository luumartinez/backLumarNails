const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.post("/registro", usuariosController.registro);
router.post("/login", usuariosController.loginUsuario);

router.get("/traerusuarios", usuariosController.verTodosUsuarios);

router.put("/editUsuario/:id", usuariosController.editarUsuario)

router.delete("/eliminarUsuario/:id", usuariosController.eliminarUsuario)

module.exports = router;