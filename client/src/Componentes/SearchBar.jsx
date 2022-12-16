import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsNames } from "../Redux/actions";

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
        type='text'
        placeholder='Buscar...'
        onChange={handleImputChange}
      />
      <button type='submit'>Buscar</button>
    </form>
  );
}
