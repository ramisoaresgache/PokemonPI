import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPokemons,getTypes } from "../Redux/actions";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemontypes = useSelector((state) => state.pokemontypes);

  const [input, setInput] = useState({
    name: "",
    image: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    types: [],
  });

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  }
  function handleSelect(e) {
    setInput({
      ...input,
      type: [...input.types, e.taget.value],
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemons(input));
    alert("pokemon created");
    setInput({
      name: "",
      image: "",
      hp: "",
      attack: "",
      defense: "",
      speed: "",
      height: "",
      weight: "",
      types: [],
    });
    navigate.push("/home");
  }

  function handleDelete(e) {
    setInput({
      ...input,
      type: input.types.filter((t) => t !== e),
    });
  }

  useEffect(() => {
    dispatch(getTypes());
  }, []);

  return (
    <div>
      <Link to='/home'>
        <button>volver</button>
      </Link>
      <h1>Create Pokemon</h1>
      <from onSubmit={(e) => handleSubmit(e)}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='image'
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Image:</label>
          <input
            type='text'
            name='image'
            value={input.image}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <select onChange={(e) => handleSelect(e)}>
          {pokemontypes.map((a) => (
            <option value={a.name}>{a.name}</option>
          ))}
        </select>
        <ul>
          <li>{input.types.map((e) => e + ",")}</li>
        </ul>
        <button type='submit'>Create Pokemon</button>
      </from>
      {input.types.map((e) => (
        <div>
          <p>{e}</p>
          <button className='botonX' onClick={() => handleDelete(e)}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}
