const axios = require("axios"); // para poder buscar en la URL
require("dotenv").config; //configuracion del archivo .env que cree
const { Pokemon } = require("../db"); //me traigo la tabla de la base de datos y no de la de models ya que no se usa esa
const { API_URL, AMOUNTH_POKEMON } = process.env; //me traigo las cosas del archivo .env

let gate = true; //seteo la puerta en true para que me entre al condicional

let arrayPokemonsApi = [];

module.exports = async (req, res, next) => {
  if (gate) {
    // let api = await (await fetch(`${API_URL}/pokemon?${AMOUNTH_POKEMON}`)).json();
    //llamamos a la api
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
    console.log(pokemonsUrl2.length);
    await Promise.all(pokemonsUrl2).then((pokemon) => {
      arrayPokemonsApi = pokemon.map((p) => {
        return {
          id: p.data.id,
          name: p.data.name,
          image: p.data.sprites.other.dream_world.front_default, // url imagen
          hp: p.data.stats[0].base_stat,
          attack: p.data.stats[1].base_stat,
          defense: p.data.stats[2].base_stat,
          speed: p.data.stats[3].base_stat,
          height: p.data.height,
          weight: p.data.weight,
          types: p.data.types.map((t) => {
            return {
              name: t.type.name,
            };
          }),
        };
      });
    });
    await Pokemon.bulkCreate(arrayPokemonsApi);
    gate = false;
  }
  next();
};
