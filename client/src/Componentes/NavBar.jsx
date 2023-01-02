import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../Redux/actions";
import { Link, useLocation, Navigate } from "react-router-dom";
import logo from "../Imagen/pokemonpika.png";
import s from "../Style/NavBar.module.css";

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const location = useLocation();

  return (
    location.pathname !== "/" &&
    location.pathname !== "/loading" && (
      <nav className={s.nav}>
        <div className={s.container}>
          {" "}
          <div>
            <Link to='/loading'>
              <img
                className={s.img}
                onClick={<Navigate to='/loading' />}
                src={logo}
                alt='loading'
              />
            </Link>
          </div>
          <div className={s.search}>
            <SearchBar/>
          </div>
          <div className={s.divcreate}>
            <Link to='/CreatePokemon'>
              <h3 className={s.create}>Create Pokemon</h3>
            </Link>
          </div>
        </div>
      </nav>
    )
  );
};

export default NavBar;
