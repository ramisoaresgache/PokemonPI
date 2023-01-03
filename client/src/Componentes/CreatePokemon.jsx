import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPokemons, getTypes, getAllPokemons } from "../Redux/actions";
import s from "../Style/CreatePokemon.module.css";
import validate from "./Validacion.jsx";

export default function PokemonCreate() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const pokemontypes = useSelector((state) => state.Types);
  const [error, setError] = useState({ name: " " });
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
    setError(validate({ ...input, [e.target.name]: e.target.value }));
  }
  function handleSelect(e) {
    setInput({ ...input, types: [...input.types, e.target.value] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemons(input));
    navigate("/home");
  }
  function filterType(t) {
    const filtrado = [...input.types].filter((type) => type !== t);
    setInput({ ...input, types: filtrado });
  }
  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className={s.container}>
    <div className={s.containertitle}>
      <Link to='/home'>
        <button className={s.btnback}>volver</button>
      </Link>
      <h3 className={s.create}>Create Pokemon</h3>
      </div>
      <div className={s.containerform}>
      <form onSubmit={handleSubmit}>
        <div className={s.contname}>
          <label className={s.name}>Name:</label>
          <input
            className={s.inputname}
            type='text'
            name='name'
            value={input.name}
            onChange={handleChange}
          />
          <p>{error.name}</p>
        </div>
        <div className={s.contimg}>
          <label className={s.img}>Image:</label>
          <input
            className={s.inputimg}
            type='text'
            name='image'
            value={input.image}
            onChange={handleChange}
          />
          <p>{error.image}</p>
        </div>
        <div className={s.conttype}>
          <label className={s.type}>Types:</label>
          <select onChange={handleSelect}>
            {pokemontypes?.map((a) => (
              <option className={s.optiontype} value={a.name}>
                {a.name}
              </option>
            ))}
          </select>
          {input.types?.map((t) => (
            <input type='button' value={t} onClick={() => filterType(t)} />
          ))}
          <p>{error.type}</p>
        </div>
        <div className={s.conthp}>
          <label className={s.hp}>Hp:</label>
          <input
            className={s.inputhp}
            type='number'
            name='hp'
            value={input.hp}
            onChange={handleChange}
          />
          <p>{error.hp}</p>
        </div>
        <div className={s.contattak}>
          <label className={s.attak}>Attack:</label>
          <input
            className={s.inputattak}
            type='number'
            name='attack'
            value={input.attack}
            onChange={handleChange}
          />
          <p>{error.attack}</p>
        </div>
        <div className={s.contdef}>
          <label className={s.def}>Defense:</label>
          <input
            className={s.inputdef}
            type='number'
            name='defense'
            value={input.defense}
            onChange={handleChange}
          />
          <p>{error.defense}</p>
        </div>
        <div className={s.contspeed}>
          <label className={s.speed}>Speed:</label>
          <input
            className={s.inputspeed}
            type='number'
            name='speed'
            value={input.speed}
            onChange={handleChange}
          />
          <p>{error.speed}</p>
        </div>
        <div className={s.contheig}>
          <label className={s.heig}>Height:</label>
          <input
            className={s.inputheig}
            type='number'
            name='height'
            value={input.height}
            onChange={handleChange}
          />
          <p>{error.height}</p>
        </div>
        <div className={s.contwei}>
          <label className={s.wei}>Weight</label>
          <input
            className={s.inputwei}
            type='number'
            name='weight'
            value={input.weight}
            onChange={handleChange}
          />
          <p>{error.weight}</p>
        </div>
        <input className={s.btncreate} type='submit' value='Crear Pokemon' />
      </form>
      </div>
      </div>
  );
}
