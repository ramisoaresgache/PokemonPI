import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonsNames } from "../Redux/actions";
import s from "../Style/SearchBar.module.css";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleImputChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(getPokemonsNames(name));
        setName("");
      }}
    >
      <input
        className={s.search}
        type='text'
        value={name}
        placeholder='Search Pokemon...'
        onChange={(e) => handleImputChange(e)}
      />
      <button className={s.btn} type='submit'>
        Search
      </button>
    </form>
  );
}
