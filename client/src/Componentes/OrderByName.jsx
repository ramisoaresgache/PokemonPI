import React from "react";
import { useDispatch } from "react-redux";
import { abcPokemons } from "../Redux/actions";

export default function PokemonOrderByName() {
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    e.preventDefault();
    dispatch(abcPokemons(e.target.value));
  };

  return (
    <div>
      <h3>Order By Name</h3>
      <select onChange={(e) => handleOrderChange(e)}>
        <option value='ascendente'>A-Z</option>
        <option value='descendente'>Z-A</option>
      </select>
    </div>
  );
}
