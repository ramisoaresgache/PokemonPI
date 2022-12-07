const { Router } = require('express')
const typeApi = require('../middleware/typeApi')
const typePokemons = require('../Controllers/types')


const router = Router()

router.get('/', typeApi, async (req, res) => {
 
  try {
    const typePoke = await typePokemons()
    res.status(200).send(typePoke)
  } catch (error) {
    res.status(404).send({error: error.message})
  }
})

module.exports = router;
