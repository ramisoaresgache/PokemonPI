import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMONS_DETAILS = "GET_POKEMONS_DETAILS";
export const GET_POKEMONNAME = "GET_POKEMONNAME";
export const CREATE_POKEMONS = "CREATE_POKEMONS";
export const CLEAN_DETAIL_POKEMONS = "CLEAN_DETAIL_POKEMONS";
export const GET_TYPES = "GET_TYPES";
export const SET_PAGES = "SET_PAGES";
export const ABC_POKEMONS = "ABC_POKEMONS";
export const ATK_POKEMONS = "ATK_POKEMONS";
export const TYPE_POKEMONS = "TYPE_POKEMONS";
export const CLEAN_POKEMONS = "CLEAN_POKEMONS";

export const getAllPokemons = () => {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/pokemon").then((data) => {
      dispatch({ type: GET_ALL_POKEMONS, payload: data.data });
    });
  };
};

export const getPokemonsDetails = (id) => {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/pokemon/${id}`)
      .then((data) => {
        dispatch({ type: GET_POKEMONS_DETAILS, payload: data.data });
      });
  };
};

export const getPokemonsNames = (names) => {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/pokemon/${names}`)
      .then((data) => {
        dispatch({ type: GET_POKEMONNAME, payload: data.data });
      });
  };
};

export const createPokemons = (payload) => {
  return async function (dispatch) {
    return await axios
      .post("http://localhost:3001/pokemon", payload)
      .then((response) => {console.log(response)
        .catch((err) => err.message)
      })
  };
};

export const CleanDetailPokemon = (payload) => {
  return function (dispatch){
   return dispatch ({ type: CLEAN_DETAIL_POKEMONS, payload }); 
  }
};
export const CleanPokemon = (payload) => {
  return function (dispatch){
    return dispatch({ type: CLEAN_POKEMONS, payload });
  }
}

export const getTypes = () => {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/type").then((data) => {
      dispatch({ type: GET_TYPES, payload: data.data });
    });
  };
};

export const setPages = (num)=>{
  return function (dispatch) {
    return dispatch ({type: SET_PAGES, payload: num});
      
    }
}

export const abcPokemons = (payload) => {
  return function (dispatch) {
    return dispatch({type:ABC_POKEMONS, payload: payload});
  }
}
export const atkPokemons = (payload) => {
  return function (dispatch) {
    return dispatch({type:ATK_POKEMONS, payload: payload})
  }
}
export const typePokemons = (payload) => {
  return function (dispatch) {
    return dispatch({type:TYPE_POKEMONS, payload: payload})
  }
}

