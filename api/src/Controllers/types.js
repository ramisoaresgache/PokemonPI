const { Type } = require("../db");


const typePokemons = async () => {
  const getTypesBd = await Type.findAll();
  return getTypesBd;
};

module.exports = typePokemons;
