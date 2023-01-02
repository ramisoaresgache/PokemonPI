import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsNames } from "../Redux/actions";
import s from "../Style/SearchBar.module.css"

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const handleImputChange = (e) => {
    e.preventDefault();
    console.log(name);
    setName(e.target.value);
  };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(getPokemonsNames(name));
  // };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getPokemonsNames(name));
      }}
    >
      <input
      className={s.search}
        type='text'
        placeholder='Search Pokemon...'
        onChange={handleImputChange}
      />
      <button className={s.btn} type='submit'>Buscar</button>
    </form>
  );
}
