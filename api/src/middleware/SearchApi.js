const axios = require("axios"); // para poder buscar en la URL
require("dotenv").config; //configuracion del archivo .env que cree
const { Pokemon } = require("../db"); //me traigo la tabla de la base de datos y no de la de models ya que no se usa esa
const { API_URL,AMOUNTH_POKEMON } = process.env; //me traigo las cosas del archivo .env

let gate = true; //seteo la puerta en true para que me entre al condicional
let pokemon = {};
const pokemons = [];
let pokemonsUrl = [];
let dataPokemon = {};

module.exports = async (req, res, next) => {
  if (gate) {
    let api = await (await fetch(`${API_URL}/pokemon?${AMOUNTH_POKEMON}`)).json();
     //llamamos a la api    
    
    const pokemonsUrl2 = api.map((c) => {
      return c.url;
    });
    for (let i = 1; i < pokemonsUrl2.length; i++) {
      dataPokemon = await (await fetch (pokemonsUrl2[i])).jason();
      pokemon = {
        id: dataPokemon.data.id,
        name: dataPokemon.data.name,
        image: dataPokemon.data.sprites.other.dream_world.front_default, // url imagen
        hp: dataPokemon.data.stats[0].base_stat,
        attack: dataPokemon.data.stats[1].base_stat,
        defense: dataPokemon.data.stats[2].base_stat,
        speed: dataPokemon.data.stats[3].base_stat,
        height: dataPokemon.data.height,
        weight: dataPokemon.data.weight,
        types: dataPokemon.data.types.map((t) => {
          return {
            name: t.type.name,
          };
        }),
      };
      pokemons.push(pokemon);
    }
    await Pokemon.bulkCreate(pokemons);
    gate = false;
  }
  next();
};
