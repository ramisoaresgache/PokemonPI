import {
  GET_ALL_POKEMONS,
  GET_POKEMONS_DETAILS,
  GET_POKEMONNAME,
  CREATE_POKEMONS,
  CLEAN_DETAIL_POKEMONS,
  GET_TYPES,
  SET_PAGES,
} from "./actions";

const inicialstate = {
  Pokemon: [],
  Types: [],
  PokemonDetail: {},
  Pages: 0,
  Filtrados: [],
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
      Filtrados: [action.payload],
    };
  }
  if (action.type === CREATE_POKEMONS) {
    return {
      ...state,
      PokemonDetail: action.payload,
    };
  }
  if (action.type === CLEAN_DETAIL_POKEMONS) {
    return {
      ...state,
      PokemonDetail: {},
    };
  }
  if (action.type === GET_TYPES) {
    return {
      ...state,
      Types: action.payload,
    };
  }
  if (action.type === SET_PAGES) {
    return {
      ...state,
      Pages: action.payload,
    };
  }

  return state;
}
