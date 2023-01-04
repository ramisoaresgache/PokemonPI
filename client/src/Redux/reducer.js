import {
  GET_ALL_POKEMONS,
  GET_POKEMONS_DETAILS,
  GET_POKEMONNAME,
  CREATE_POKEMONS,
  CLEAN_DETAIL_POKEMONS,
  GET_TYPES,
  SET_PAGES,
  ABC_POKEMONS,
  ATK_POKEMONS,
  TYPE_POKEMONS,
} from "./actions";

const inicialstate = {
  Pokemon: [],
  Types: [],
  PokemonDetail: {},
  Pages: 0,
  Filtrados: [],
  TypesFiltered:[],
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
      Pokemon: action.payload,
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
  if (action.type === ABC_POKEMONS) {
    const orderPoke = [...state.Pokemon];
    action.payload === "ascendente"
      ? orderPoke.sort((a, b) => {
          if (a.name < b.name) return -1;
          if (a.name > b.name) return 1;
          return 0;
        })
      : orderPoke.sort((a, b) => {
          if (b.name > a.name) return 1;
          if (b.name < a.name) return -1;
          return 0;
        });
    return {
      ...state,
      Pokemon: orderPoke,
    };
  }
  if (action.type === ATK_POKEMONS) {
    const atkPoke = [...state.Pokemon];
    action.payload === "mayor"
      ? atkPoke.sort((a, b) => {
          if (a.attack < b.attack) return 1;
          if (a.attack > b.attack) return -1;
          return 0;
        })
      : atkPoke.sort((a, b) => {
          if (a.attack < b.attack) return -1;
          if (a.attack > b.attack) return 1;
          return 0;
        });
    return {
      ...state,
      Pokemon: atkPoke,
    };
  }
  if (action.type === TYPE_POKEMONS) {
    const typePoke = state.Pokemon.filter((type) => {
      return type.types.map((e) => e.name).includes(action.payload);
    });

    return {
      ...state,
      Pokemon: typePoke,
      TypesFiltered:[...state.TypesFiltered, action.payload]
    };
  }

  return state;
}
