const { Router } = require("express");
const { getPokemons, getIdPokemon } = require("../Controllers/pokemons.js");
const { Pokemon, Type } = require("../db");
const typeApi = require("../middleware/typeApi");

const router = Router();

router.get("/", async (req, res) => {
  const name = req.query.name;
  try {
    const namePoke = await getPokemons(name);
    res.status(200).json(namePoke);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const poke = await getIdPokemon(id);
    res.status(200).send(poke);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
});

router.post("/", typeApi, async (req, res) => {
  const { name, image, hp, attack, defense,speed, height, weight, types } = req.body;
  console.log(types);
  const typeDB = types.map((a) =>
    Type.findOne({
      where: {
        name: a,
      },
    })
  );
  const maptypeDB = await Promise.all(typeDB);

  try {
    const createPokemon = await Pokemon.create({
      name, 
      image,
      hp,
      attack,
      speed,
      defense,
      height,
      weight,
    });
    let resultPokemon = await Pokemon.findOne({
      where:{
        name:name,
      },
      include: {
        model: Type,
        attributes: ["name"],
        throug: {
          attributes: [],
        },
      },}) 
  
    maptypeDB.map(x => createPokemon.addType(x))

    res.status(201).send(resultPokemon);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

module.exports = router;


