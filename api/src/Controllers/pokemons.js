const axios = require("axios");
require("dotenv").config();
const { API_URL } = process.env;
const { Pokemon } = require("../db");
const formatter = require("./formatter");

const getPokemons = async (name) => {
  if (name) {
    const data = await axios.get(`${API_URL}/pokemon/${name.toLowerCase()}`, {
      headers: {
        "accept-encoding": "*",
      },
    });
    const poke = formatter(data);
    return poke;
  } else {
    const getPokemonsBD = await Pokemon.findAll();
    return getPokemonsBD;
  }
};

const getIdPokemon = async (id) => {
  const pokemonId = await axios.get(`${API_URL}/pokemon/${id}`, {
    headers: {
      "accept-encoding": "*",
    },
  });
  const poke = formatter(pokemonId);
  return poke;
};
module.exports = {
  getPokemons,
  getIdPokemon,
};
