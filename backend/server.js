require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Configurar el transporte de Nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/enviar-formulario", async (req, res) => {
  const formData = req.body;

  try {
    await transporter.sendMail({
      from: `"Formulario DS-160" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_DESTINO,
      subject: "Nuevo formulario enviado",
      text: `Datos del formulario:\n\n${JSON.stringify(formData, null, 2)}`,
      html: `<h3>Nuevo formulario</h3><pre>${JSON.stringify(
        formData,
        null,
        2
      )}</pre>`,
    });

    res.status(200).json({ message: "Correo enviado con éxito" });
  } catch (error) {
    res.status(500).json({ message: "Error al enviar el correo", error });
  }
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
