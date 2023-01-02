import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { createPokemons, getTypes, getAllPokemons } from "../Redux/actions";
import s from "../Style/CreatePokemon.module.css";
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
    setInput({ ...input, types: [...input.types, e.target.value] });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(createPokemons(input));
    navigate("/home");
  }

  useEffect(() => {
    dispatch(getTypes());
    dispatch(getAllPokemons());
  }, [dispatch]);

  return (
    <div className={s.container}>
      <Link to='/home'>
        <button className={s.btnback}>volver</button>
      </Link>
      <h3 className={s.create}>Create Pokemon</h3>
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
        </div>
        <input className={s.btncreate} type='submit' value='Crear Pokemon' />
      </form>
    </div>
  );
}
