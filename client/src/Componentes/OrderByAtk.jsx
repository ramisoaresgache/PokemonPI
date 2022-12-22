import React from "react";
import { useDispatch } from "react-redux";
import { atkPokemons } from "../Redux/actions";

export default function AtkPokemons() {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault(e);
    dispatch(atkPokemons(e.target.value));
  };
  return (
    <div>
      <h3>Order by ATK</h3>
      <select onChange={(e) => handleChange(e)}>
        <option value='mayor'>+</option>
        <option value='menor'>-</option>
      </select>
    </div>
  );
}
