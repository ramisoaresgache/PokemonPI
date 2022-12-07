const axios = require("axios");
require("dotenv").config();
const { API_URL, AMOUNTH_POKEMON } = process.env;
const { Pokemon, Type, Op } = require("../db");
const formatter = require("./formatter");

const getPokemons = async (name) => {
  if (name) {
    try {
      const data = await axios.get(`${API_URL}/pokemon/${name.toLowerCase()}`, {
        headers: {
          "accept-encoding": "*",
        },
      });
      var poke = formatter(data);
    } catch (error) {
      const e = error;
    }
    try {
      var PokemonsBD = await Pokemon.findAll({
        where: {
          name: { [Op.iLike]: `%${name}%` },
        },
        include: [
          {
            model: Type,
            require: true,
            attributes: ["name"],
            through: { attributes: [] },
          },
        ],
      });
    } catch (error) {
      const e = error;
    }
    if (poke) {
      return poke;
    } else if (PokemonsBD) {
      return PokemonsBD;
    } else {
      throw new Error("Pokemon not found");
    }
  } else {
    let api = await axios.get(`${API_URL}/pokemon/?limit=${AMOUNTH_POKEMON}`, {
      headers: {
        "accept-encoding": "*",
      },
    });
    const pokemonsUrl2 = api.data.results.map((c) => {
      return axios.get(c.url, {
        headers: {
          "accept-encoding": "*",
        },
      });
    });
    await Promise.all(pokemonsUrl2).then((pokemon) => {
      arrayPokemonsApi = pokemon.map((p) => formatter(p));
    });
    const getPokemonsBD = await Pokemon.findAll({
      include: [
        { model: Type,
           attributes: ["name"],
           through: { attributes: [] } },
      ],
    });
    return getPokemonsBD.concat(arrayPokemonsApi);
  }
};
//----------------------------------------------------------------------------------------------
const getIdPokemon = async (id) => {
  try {
    const pokemonId = await axios.get(`${API_URL}/pokemon/${id}`, {
      headers: {
        "accept-encoding": "*",
      },
    });
    var idPokeApi = formatter(pokemonId);
  } catch (error) {
    const ee = error;
  }
  try {
    var idPokeBd = await Pokemon.findByPk(id,{
      include: [
        {
          model: Type,
          attributes: ["name"],
          through: { attributes: [] },
        },
      ],
    });
  } catch (error) {
    const ee = error;
  }
  if (idPokeApi) {
    return idPokeApi;
  } else if (idPokeBd) { 
    return idPokeBd;
  } else {
    throw new Error("Pokemon not found");
  }
};

module.exports = {
  getPokemons,
  getIdPokemon,
};
