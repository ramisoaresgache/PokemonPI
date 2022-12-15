import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../Redux/actions";
import Cards from "./Cards";
import NavBar from "./SearchBar";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    //esto es para poder mostrar el ciclo de vida de los componentes
    dispatch(getAllPokemons()); //disparo la accion de buscar a todos los pokemons
  }, [dispatch]); //esto es para mostrar lo que ni bien empieze por eso pongo el dispatch en este caso

  return (
    <div>
      <NavBar />
      <Cards />
    </div>
  );
}
