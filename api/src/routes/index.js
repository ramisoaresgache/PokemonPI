const { Router } = require('express');
const SearchApi = require('../Middleware/SearchApi');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router()

//router.use('/pokemon', SearchApi)
// router.use('/type', SearchApi)

module.export = router;







// const pokeApi = async () => {
//   let pokemonObj = [];


//  let pokemons = await axios (`${API_URL}/pokemon?${AMOUNTH_POKEMON}`);

//  let urls = pokemons.data.results.map(p => {
//   return p.url;
//  });
// let pokemon;

//  for (let i = 0; i < urls.length; i++){
//   let url = await axios(urls[i])

//   let dataPokemon = url.data;
//   pokemon = {
//            id: dataPokemon.data.id,
//            name: dataPokemon.data.name,
//            image: dataPokemon.data.sprites.other.dream_world.front_default, // url imagen
//            hp: dataPokemon.data.stats[0].base_stat,
//            attack: dataPokemon.data.stats[1].base_stat,
//            defense: dataPokemon.data.stats[2].base_stat,
//            speed: dataPokemon.data.stats[3].base_stat,
//            height: dataPokemon.data.height,
//            weight: dataPokemon.data.weight,
//            types: dataPokemon.data.types.map((t) => {
//              return {
//                name: t.type.name,
//              };
//            })
//          }
//          pokemonObj.push(pokemon)
// }
// return pokemonObj
// };

// const router = Router();
// router.get('/pokemon', async (req, res) => {
//   try {
//     res.status(200).send(pokemonObj)
//   } catch (error) {
//     res.status(404).send(error.message)
//   }
// })

//  module.exports = router;
