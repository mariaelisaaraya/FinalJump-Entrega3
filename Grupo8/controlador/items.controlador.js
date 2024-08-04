const db = require("../database/modelos/index.modelo");
const Items = db.Items;
const Actores = db.Actores
const Items_Reparto = db.Items_Reparto
const Genero = db.Genero
const Tags = db.Tags
const sequelize = require('../database/db.js');
const { Op } = require('sequelize');

const itemsCompletos = [
   {
   model: Genero,
    attributes: ['genero'] 
 } 
 ,{ 
   model: Actores, 
   attributes: ['nombre'],
   through: { attributes: [] } 
 },{ 
   model: Tags,
   attributes: ['tag'], 
   through: { attributes: [] } 
 } ]


// Ver todos los items
exports.todosLosItems= (req, res) => {
  Items.findAll({include:itemsCompletos})
    .then(data => {
      res.send(darFormato(data));
    })
    .catch(err => {
      res.send(500).send({
        message: err.message || "Ocurrió un error al realizar la consulta."
      });
    });
};


// Buscar un item por su Id
exports.buscarPorId = (req, res) => {
  const id = req.params.id;
  Items.findByPk(id,{include: itemsCompletos})
    .then(data => {
      res.send(darFormato([data]));
    })
    .catch(err => {
      res.status(500).send({
        message: `Error al buscar el item con id = ${id}`
      });
    });
};



// buscar por titulo

exports.buscarPorTitutlo = async (req,res) =>{
  const titulos = await Items.findAll({
    where: {
      titulo: {
        [Op.like]: `%${req.params.titulo}%` 
      }
    },
    include: itemsCompletos  
})

res.send(darFormato(titulos))
}


// buscar items por actor

exports.buscarPorActor = async (req, res) => {
  const actores = await Actores.findAll({
    where: {
      nombre: {
        [Op.like]: `%${req.params.nombre}%` 
      }
    },
    include:{
      model: Items, 
      through: { attributes: [] },
      include: itemsCompletos
    } 
  });

  const respuesta = actores.map(actor => ({
    actor:actor.nombre,
    Items: darFormato(actor.Items)
    }))




    res.status(200).json(respuesta); 
};



//Buscar por categoria

exports.buscarPorCategoria =async (req,res)=>{
  const titulos = await Items.findAll({
    where: {
      categoria: `${req.params.cat}`
    },
    include: itemsCompletos
})

res.send(darFormato(titulos))
}

//Buscar por cualquier criterio

exports.buscar = async (req,res)=>{
const id = parseInt(req.query.id)
const titulo = req.query.titulo || ""
const categoria = req.query.categoria || ""
const genero = req.query.genero || ""
const resumen = req.query.resumen || ""
const temporadas = parseInt(req.query.temporadas)
const actor = req.query.actor || ""
const tag = req.query.tag || ""

const whereItems = {}
whereItems.titulo = {[Op.like]:`%${titulo}%`}
whereItems.categoria= {[Op.like]:`%${categoria}%`}
whereItems.resumen= {[Op.like]:`%${resumen}%`}

if (id){
  whereItems.id = id
}

if (temporadas){
  whereItems.temporadas = temporadas
}

const titulos = await Items.findAll({
  where: whereItems,
  include: 
   [
    {
    model: Genero,
     attributes: ['genero'], 
     where:{genero: {[Op.like]:`%${genero}%`}}
  } 
  ,{ 
    model: Actores, 
    attributes: ['nombre'],
    through: { attributes: [] } ,
    where:{nombre:{[Op.like]:`%${actor}%`}}
  },{ 
    model: Tags,
    attributes: ['tag'], 
    through: { attributes: [] }, 
    where:{tag:{[Op.like]:`%${tag}%`}}
  } ]
})

res.send(darFormato(titulos))
}


// Dar formato a la lista de items
function darFormato(lista){
 
  const respuesta = lista.map(item => ({
    id: item.id,
    poster: item.poster ||"",
    titulo: item.titulo ||"",
    categoria: item.categoria ||"",
    genero: item.Genero.genero ||"",
    resumen: item.resumen ||"",
    trailer: item.trailer ||"",
    temporadas: item.temporadas ||"",
    duracion: item.duracion ||"",
    tags: item.Tags.map(tag => tag.tag) ||"", // Convertir tags a array de strings
    actores: item.Actores.map(actor => actor.nombre) ||"" // Convertir actores a array de strings
    }))
    return (respuesta)
};

  
