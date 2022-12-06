const {Router} = require('express')
const SearchApi = require('../middleware/SearchApi.js')
const {Pokemon} = require('../db')


const router = Router()

router.get("/",SearchApi,  async (req, res) => {
  try {
    const dataPokemon = await Pokemon.findAll()
    res.status(200).send(dataPokemon);
  } catch (error) {
    res.status(404).send({ error: error.message });
  }
})

module.exports = router;
