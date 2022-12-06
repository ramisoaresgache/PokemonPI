const {Router} = require('express')
const SearchApi = require('../middleware/SearchApi.js')
const {Pokemon} = require('../db')
const {getPokemons, getIdPokemon} = require('../Controllers/pokemons.js')


const router = Router()

// router.get("/",SearchApi, async (req, res) => {
//   try {
//     const dataPokemon = await Pokemon.findAll()
//     res.status(200).send(dataPokemon);
//   } catch (error) {
//     res.status(404).send({ error: error.message });
//   }
// })

router.get('/', SearchApi, async (req,res) =>{
  const name = req.query.name
  try {
    const namePoke = await getPokemons(name)
    res.status(200).json(namePoke)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
})

router.get('/:id',SearchApi, async(req,res)=>{
  const id = req.params.id
  try {
    const poke = await getIdPokemon(id)
    res.status(200).send(poke)
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
})


module.exports = router;
