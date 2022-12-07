const {Router} = require('express')
const {getPokemons, getIdPokemon} = require('../Controllers/pokemons.js')
const {Pokemon} = require('../db')
const typeApi = require('../middleware/typeApi')


const router = Router()


router.get('/',  async (req,res) =>{
  const name = req.query.name
  try {
    const namePoke = await getPokemons(name)
    res.status(200).json(namePoke)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
})

router.get('/:id', async(req,res)=>{
  const id = req.params.id
  try {
    const poke = await getIdPokemon(id)
    res.status(200).send(poke)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
})


router.post("/",typeApi, async (req, res) => {
  const { name,image,hp,attack,defense,height,weight,types} = req.body
  try {
    const createPokemon = await Pokemon.create(req.body) 
    createPokemon.setTypes(types)
    res.status(201).send(createPokemon);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
})

module.exports = router;

