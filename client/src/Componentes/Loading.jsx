import React from "react";
import gif from "../Imagen/pikachu.gif";
import fondoLoading from "../Imagen/fondo.png";
import s from "../Style/Loading.module.css";
import "../Style/Load.css";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home.jsx";
import { useEffect } from "react";
import { getAllPokemons, getTypes } from "../Redux/actions";
import { Navigate } from "react-router-dom";

const Loading = () => {
  const pokemons = useSelector((state) => state.Pokemon);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);
  console.log(pokemons);
  return !pokemons.length ? (
    <div className={s.container}>
      <div className={s.imagenfondo}>
        <img className={s.fondoLoading} src={fondoLoading} alt='jpg' />
      </div>
      <div className={s.gifload}>
        <div className={s.loader}>
          <div class='progress'>
            <div class='progress-loader'></div>
          </div>
        </div>
        <div className={s.pikachu}>
          <img className={s.gif} src={gif} alt='gif' />
        </div>
      </div>
    </div>
  ) : (
    <Navigate to='/home' replace={<Home />} />
  );
};
export default Loading;
