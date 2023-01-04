import React from "react";
import { useDispatch } from "react-redux";
import { abcPokemons } from "../Redux/actions";
import s from "../Style/Filtrados.module.css"


export default function PokemonOrderByName() {
  const dispatch = useDispatch();

  const handleOrderChange = (e) => {
    e.preventDefault();
    dispatch(abcPokemons(e.target.value));
  };

  return (
    <div>
      <h3 className={s.title}>Order By Name</h3>
      <select className={s.select} onChange={(e) => handleOrderChange(e)}>
        <option value="name">Order Name</option>
        <option value='ascendente'>A-Z</option>
        <option value='descendente'>Z-A</option>
      </select>
    </div>
  );
}
