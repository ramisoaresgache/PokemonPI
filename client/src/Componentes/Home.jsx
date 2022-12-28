import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPokemons, getTypes } from "../Redux/actions";
import Cards from "./Cards";
import Loading from "./Loading";
import Paginado from "./Paginado";
import OrderByName from "./OrderByName";
import OrderByAtk from "./OrderByAtk";
import OrderByType from "./OrderByType";
import s from "../Style/Home.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    //esto es para poder mostrar el ciclo de vida de los componentes
    dispatch(getAllPokemons()); //disparo la accion de buscar a todos los pokemons
    dispatch(getTypes());
  }, [dispatch]); //esto es para mostrar lo que ni bien empieze por eso pongo el dispatch en este caso

  const allPokemons = useSelector((state) => state.Pokemon);
  const pokemonBytype = useSelector((state) => state.Types);

  return (
    <div className={s.container}>
      
      <div className={s.paginadoContainer}>
        <Paginado />
      </div>
      <div className={s.ordenamientoContainer}>
        {allPokemons.length ? (
          <div className={s.ordenamientoName}>
            <OrderByName />
          </div>
        ) : null}
        {allPokemons.length ? (
          <div className={s.ordenamientoAtk}>
            <OrderByAtk />
          </div>
        ) : null}
        {pokemonBytype.length ? (
          <div className={s.ordenamientoType}>
            <OrderByType />
          </div>
        ) : null}
      </div>
      {allPokemons.length === 386 ? (
         <Link to = "/home">
         <img onClick={() => dispatch(getAllPokemons())}
           src='https://i.pinimg.com/originals/5c/a4/67/5ca46751512f5ab01e35bd76627ff591.jpg'
           alt='home'
         />
       </Link>
      ): null}
      {allPokemons.length ? (
        <div className={s.cardsContainer}>
          <Cards />
        </div>
      ) : (
        <div className={s.loadingContainer}>
          <Loading />
        </div>
      )}
    </div>
  );
}
