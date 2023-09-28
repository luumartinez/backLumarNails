const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/lumar", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("conectado a la base de datos");
    // const serviciosTodos = await ServicioModel.find();
    // crearServicio();
    // console.log(serviciosTodos)
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
