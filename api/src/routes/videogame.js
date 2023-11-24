
// api/src/routes/videogames.js
const { Router } = require('express');

const getVideogames =require("../controllers/getVideogames");
const getVideogamesById=require("../controllers/getVideogamesById");
const getVideogamesbyName=require("../controllers/getVideogamesByName");
const postVideogame=require("../controllers/postVideogame");

const router = Router();

router.get('/name', getVideogamesbyName);
router.get('/:idVideogame', getVideogamesById);
router.get('/', getVideogames);
router.post('/', postVideogame);

console.log(router);

module.exports = router;

