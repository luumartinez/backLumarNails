const UsuariosModel = require("../models/usuarios.models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//POST

const registro = async (req, res) => {
  try {
    const { nombre, apellido, email, password, rol } = req.body;
    const hash = await bcrypt.hash(password, 10);

    const usuario = new UsuariosModel({
      nombre,
      apellido,
      email,
      password: hash,
      rol,
    });
    await usuario.save();
    res.status(201).json("usuario creado");
  } catch (error) {
    res.status(409).json("correo ya registrado");
  }
};

const loginUsuario = async (req, res) => {
  const usuario = await UsuariosModel.findOne({ email: req.body.email });

  try {
    if (!usuario) {
      return res.status(400).json("Usuario y/o contraseña incorrecto");
    }

    const match = await bcrypt.compare(req.body.password, usuario.password);

    if (!match) {
      return res.status(400).json("Usuario y/o contraseña incorrecto");
    }
  } catch (error) {
    res.status(400).json("Error al iniciar sesión");
  }
  const token = jwt.sign(
    {
      id: usuario._id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      rol: usuario.rol,
    },
    process.env.SECRET_KEY,
    { expiresIn: "1d" }
  );

  res.header("auth-token", token).json({
    error: null,
    data: { token },
  });
};

// GET

const verTodosUsuarios = async (req, res) => {
  try {
    const usuarios = await UsuariosModel.find();
    res.json(usuarios);
  } catch (error) {
    res.status(400).json("Usuarios no encontrados");
  }
};

// PUT

const editarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await UsuariosModel.findById(id);
    if (usuario) {
      usuario.nombre = req.body.nombre;
      usuario.apellido = req.body.apellido;
      usuario.rol = req.body.rol;
      const usuarioEditado = await usuario.save();
      res.status(200).json("usuario editado");
    } else {
      res.status(404).json("no se pudo editar el usuario");
    }
  } catch (error) {
    res.status(400).json("error 400");
  }
};

// DELETE

const eliminarUsuario = async (req, res) => {
  try {
    const id = req.params.id;
    const usuario = await UsuariosModel.findById(id);
    if (usuario) {
      await UsuariosModel.deleteOne({ _id: id });
      res.status(200).json("usuario eliminado");
    } else {
      res.status(404).json("Usuario no encontrado");
    }
  } catch (error) {
    res.status(400).json("error 400");
  }
};
module.exports = {
  registro,
  loginUsuario,
  verTodosUsuarios,
  editarUsuario,
  eliminarUsuario
};
