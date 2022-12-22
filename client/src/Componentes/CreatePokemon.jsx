import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPokemons, getTypes, getAllPokemons } from "../Redux/actions";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemontypes = useSelector((state) => state.Types);

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
      [e.target.types]: e.taget.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemons(input));
  }

  const home = () => {
    navigate("/home");
  };

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div>
      <Link to='/home'>
        <button>volver</button>
      </Link>
      <h3>Create Pokemon</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type='text'
            name='name'
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
        <div>
          <label>Types:</label>
          <select onChange={(e) => handleSelect(e)}>
            {pokemontypes.map((a) => (
              <option value={a.name}>{a.name}</option>
            ))}
          </select>
          <ul>
            <li>{input.types.map((e) => e + ",")}</li>
          </ul>
        </div>
        <div>
          <label>Hp:</label>
          <input
            type='number'
            name='hp'
            value={input.hp}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Attack:</label>
          <input
            type='number'
            name='attack'
            value={input.attack}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Defense:</label>
          <input
            type='number'
            name='defense'
            value={input.defense}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Speed:</label>
          <input
            type='number'
            name='speed'
            value={input.speed}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type='number'
            name='height'
            value={input.height}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div>
          <label>Weight</label>
          <input
            type='number'
            name='weight'
            value={input.weight}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <button type='submit' onClick={home}>
          Create Pokemon
        </button>
      </form>
    </div>
  );
}
