import React from "react";
import SearchBar from "./SearchBar";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../Redux/actions";
import { Link } from "react-router-dom";

const NavBar = () => {
  const dispatch = useDispatch();
  const goHome = () => {
    dispatch(getAllPokemons());
  };
  return (
    <nav>
      <div>
        <div>
          <Link to='/home'>
            <h1 onClick={goHome} >Home</h1>
          </Link>
        </div>
        <div>
          <SearchBar />
        </div>
        <Link to='/CreatePokemon'>
          <h2>Create Pokemon</h2>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
