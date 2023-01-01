import React from "react";
import { useDispatch } from "react-redux";
import { atkPokemons } from "../Redux/actions";

export default function AtkPokemons({setOrder, paginado}) {
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault(e);
    dispatch(atkPokemons(e.target.value));
    paginado(1);
    setOrder(`Order${e.target.value}`);
  };
  return (
    <div>
      <h3>Order by Attack</h3>
      <select onChange={(e) => handleChange(e)}>
        <option value="order">Order</option>
        <option value='mayor'>Higher</option>
        <option value='menor'>Lower</option>
      </select>
    </div>
  );
}
