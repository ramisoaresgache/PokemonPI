import React from "react";
import { useSelector } from "react-redux";
import Cards from "./Cards";
import NotFound from "./Loading";
import Paginado from "./Paginado";
import OrderByName from "./OrderByName";
import OrderByAtk from "./OrderByAtk";
import OrderByType from "./OrderByType";
import s from "../Style/Home.module.css";
import { Navigate } from "react-router-dom";
import Loading from "./Loading";

export default function Home() {
  const allPokemons = useSelector((state) => state.Pokemon);
  const pokemonBytype = useSelector((state) => state.Types);
  const notFound = useSelector((state) => state.Notfound);

  return (
    <div className={s.container}>
      {/* <div className={s.paginadoContainer}> */}
      <Paginado />
      {/* </div> */}
      <div className={s.containerfiltros}>
        {allPokemons.length ? (
          <div className={s.ordenamientoName}>
            <OrderByName />
          </div>
        ) : (
          <div>
            <Navigate to='/loadig' replace={<Loading />} />
          </div>
        )}
        {allPokemons.length ? (
          <div className={s.ordenamientoAtk}>
            <OrderByAtk />
          </div>
        ) : (
          <div>
            <Navigate to='/loadig' replace={<Loading />} />
          </div>
        )}
        {pokemonBytype.length ? (
          <div className={s.ordenamientoType}>
            <OrderByType />
          </div>
        ) : (
          <div>
            <Navigate to='/loadig' replace={<Loading />} />
          </div>
        )}
      </div>
      {allPokemons.length ? (
        <div className={s.cardsContainer}>
          <Cards />
        </div>
      ) : (
        <div>
          <Navigate to='/loadig' replace={<Loading />} />
        </div>
      )}
      {notFound === true ? (
        <div>
          <Navigate to='/notfound' replace={<NotFound />} />
        </div>
      ) : null}
    </div>
  );
}
