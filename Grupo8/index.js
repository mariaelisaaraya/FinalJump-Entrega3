const express = require('express');
const app = express();

const sequelize = require('./database/db.js');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header ("Content-Type", "application/json; charset = utf-8")
    next();
})

const dotenv = require('dotenv');
dotenv.config();
const PORT = process.env.PORT || 3008;


app.get("/", (req, res) => {
    res.json({ message: "Bienvenid@ a Trailerflix!." });
  });
  
  // rutas
  require("./rutas/items.rutas.js")(app);
  

// Inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en el puerto http://localhost:${PORT}`);
});