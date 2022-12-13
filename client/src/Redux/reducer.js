import {
  GET_ALL_POKEMONS,
  GET_POKEMONSID,
  GET_POKEMONNAME,
  CREATE_POKEMONS,
  DELETE_POKEMONS,
  GET_TYPES,
} from "./actions";

const inicialstate = {
  Pokemon: [],
  Types: [],
};

export default function rootReducer(state = inicialstate, action) {
  if (action.type === GET_ALL_POKEMONS) {
    return {
      ...state,
      Pokemon: action.payload,
    };
  }
  if (action.type === GET_POKEMONSID) {
    return {
      ...state,
      Pokemon: action.payload,
    };
  }
  if (action.type === GET_POKEMONNAME) {
    return {
      ...state,
      Pokemon: action.payload,
    };
  }
  if (action.type === CREATE_POKEMONS) {
    return {
      ...state,
      Pokemon: action.payload,
    };
  }
  if (action.type === DELETE_POKEMONS) {
    return {
      ...state,
      Pokemon: action.payload,
    };
  }
  if (action.type === GET_TYPES) {
    return {
      ...state,
      Types: action.payload,
    };
  }
  return state
}
