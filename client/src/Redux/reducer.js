import {
  GET_ALL_POKEMONS,
  GET_POKEMONSID,
  GET_POKEMONNAME,
  POST_ALL_POKEMONS,
  DELETE_POKEMONS,
  GET_TYPES,
} from "./actions";

const inicialstate = {
  pokemon: [],
  types: [],
};

export function rootReducer(state = inicialstate, action) {
  if (action.type === GET_ALL_POKEMONS) {
    return {
      ...state,
      pokemon: action.payload,
    };
  }
  if (action.type === GET_POKEMONSID) {
    return {
      ...state,
      pokemon: action.payload,
    };
  }
  if (action.type === GET_POKEMONNAME) {
    return {
      ...state,
      pokemon: action.payload,
    };
  }
  if (action.type === POST_ALL_POKEMONS) {
    return {
      ...state,
      pokemon: action.payload,
    };
  }
  if (action.type === DELETE_POKEMONS) {
    return {
      ...state,
      pokemon: action.payload,
    };
  }
  if (action.type === GET_TYPES) {
    return {
      ...state,
      types: action.payload,
    };
  }
}
