import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsNames } from "../Redux/actions";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleImputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(getPokemonsNames(name));
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Buscar...'
        onChange={(e) => handleImputChange(e)}
      />
      <button type='submit' onClick={(e) => handleSubmit(e)}>
        Buscar
      </button>
    </div>
  );
}
