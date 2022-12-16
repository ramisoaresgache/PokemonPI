import React, { useEffect } from "react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../Redux/actions";
import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllPokemons());
  }, [dispatch]);

  const location = useLocation();

  return (
    location.pathname !== "/" && (
      <nav>
        <div>
          <div>
            <Link to='/home'>
              <h3>Home</h3>
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
