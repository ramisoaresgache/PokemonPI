import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../Redux/actions";
import { Link, useLocation, Navigate } from "react-router-dom";
import pokeball from "../Imagen/Home.png";

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const location = useLocation();

  return (
    location.pathname !== "/" &&
    location.pathname !== "/loading" && (
      <nav>
        <div>
          {" "}
          <div>
            <Link to='/loading'>
              <img
                onClick={<Navigate to='/loading' />}
                // src={pokeball}
                alt='loading'
              />
            </Link>
          </div>
          <div>
            <SearchBar />
          </div>
          <Link to='/CreatePokemon'>
            <h3>Create Pokemon</h3>
          </Link>
        </div>
      </nav>
    )
  );
};

export default NavBar;
