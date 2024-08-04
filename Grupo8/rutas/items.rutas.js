module.exports = app => {
    const itemsControlador = require("../controlador/items.controlador.js");
  
    const rutas = require("express").Router();
  

    // ver todos los items
    rutas.get("/", itemsControlador.todosLosItems);

    // buscar items por actor
    rutas.get("/actor/:nombre", itemsControlador.buscarPorActor);
   
    // buscar un item por su id
    rutas.get("/id/:id", itemsControlador.buscarPorId);

    // buscar por titulo
    rutas.get("/titulo/:titulo", itemsControlador.buscarPorTitutlo);
  
    // buscar por categoria
    rutas.get("/categoria/:cat", itemsControlador.buscarPorCategoria);

     // buscar
     rutas.get("/buscar", itemsControlador.buscar);


  
    app.use("/trailerflix", rutas);
  };