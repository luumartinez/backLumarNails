const express = require("express");
const router = express.Router();
// const { servicios } = require("../servicios");

const serviciosController = require('../controllers/serviciosController')

router.get("/servicios", serviciosController.obtenerServicios )
router.get("/servicios/:id", serviciosController.obtenerServicioPorId )

router.post("/servicios", serviciosController.crearServicio)

router.put("/servicios/:id", serviciosController.actualizarServicio)

router.delete("/servicios/:id", serviciosController.eliminarServicio)

// router.get("/servicios", (req, res) => {
//   res.send(JSON.stringify(servicios));
// });

// //GET

// router.get("/servicios/:id", (req, res) => {
//   let id = req.params.id;
//   let servicio = servicios.find((servicio) => servicio.id == id);
//   if (servicio) {
//     res.send(servicio);
//   } else {
//     res.status(404).send("error");
//   }
// });

// // POST

// router.post("/servicios", (req, res) => {
//   let nuevoServ = req.body;
//   servicios.push(nuevoServ);
//   res.status(201).json("servicio agregado");
// });

// //PUT

// router.put("/servicios/:id", (req, res)=>{
//     let id = parseInt(req.params.id);
//     let servicio = servicios.find((servicio)=> servicio.id === id);
//     if(servicio){
//         servicio.nombre = req.body.nombre;
//         servicio.precio = req.body.precio;
//         res.status(200).json("servicio actualizado")
//         res.json(servicio)
//     } else {
//         res.status(404).json("servicio no encontrado")
//     }
// })


// // DELETE

// router.delete("/servicios/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   const index = servicios.findIndex((servicio) => servicio.id == id);

//   if (index !== -1) {
//     servicios.splice(index, 1);
//     res.status(200).json("cancha elimina");
//   } else {
//     res.status(404).json("cancha no encontrada");
//   }
// });

module.exports = router;
