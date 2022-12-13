import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS";
export const GET_POKEMONSID = "GET_POKEMONSID";
export const GET_POKEMONNAME = "GET_POKEMONNAME";
export const CREATE_POKEMONS = "CREATE_POKEMONS";
export const DELETE_POKEMONS = "DELETE_POKEMONS";
export const GET_TYPES = "GET_TYPES";

export const getAllPokemons = () => {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/pokemon").then((data) => {
      dispatch({ type: GET_ALL_POKEMONS, payload: data.data });
    });
  };
};

export const getPokemonsId = (id) => {
  return async function (dispatch) {
    return await axios
      .get(`http://localhost:3001/pokemon/${id}`)
      .then((data) => {
        dispatch({ type: GET_POKEMONSID, payload: data.data });
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

export const deletePokemons = (payload) => {
  return { type: DELETE_POKEMONS, payload };
};

export const getTypes = () => {
  return async function (dispatch) {
    return await axios.get("http://localhost:3001/type").then((data) => {
      dispatch({ type: GET_TYPES, payload: data.data });
    });
  };
};
