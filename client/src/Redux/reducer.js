import {
  GET_ALL_POKEMONS,
  GET_POKEMONS_DETAILS,
  GET_POKEMONNAME,
  CREATE_POKEMONS,
  CLEAN_DETAIL_POKEMONS,
  GET_TYPES,
} from "./actions";

const inicialstate = {
  Pokemon: [],
  Types: [],
  PokemonDetail: {},
};

export default function rootReducer(state = inicialstate, action) {
  if (action.type === GET_ALL_POKEMONS) {
    return {
      ...state,
      Pokemon: action.payload,
    };
  }
  if (action.type === GET_POKEMONS_DETAILS) {
    return {
      ...state,
      PokemonDetail: action.payload,
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
  if (action.type === CLEAN_DETAIL_POKEMONS) {
    return {
      ...state,
      PokemonDetail:{},
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
