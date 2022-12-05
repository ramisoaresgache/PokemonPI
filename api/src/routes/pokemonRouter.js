const {Router} = require('express')
const SearchApi = require('../middleware/SearchApi.js')
const {Pokemon} = require('../db')
const { API_URL } = process.env;
const axios = require('axios')




const router = Router()


router.get("/",SearchApi,  async (req, res) => {
  try {
    res.json('hola');
  } catch (error) {
    res.json({ error: error.message });
  }
})


module.exports = router;
