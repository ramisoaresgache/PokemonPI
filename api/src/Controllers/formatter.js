

function formatter(response) {
  return {
    id: response.data.id,
    name: response.data.name,
    image: response.data.sprites.other.dream_world.front_default, // url imagen
    hp: response.data.stats[0].base_stat,
    attack: response.data.stats[1].base_stat,
    defense: response.data.stats[2].base_stat,
    speed: response.data.stats[3].base_stat,
    height: response.data.height,
    weight: response.data.weight,
    types: response.data.types.map((t) => {
      return {
        name: t.type.name,
      };
    }),
  };
}

module.exports = formatter;
