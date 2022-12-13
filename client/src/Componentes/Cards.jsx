import React from "react";
import Card from "./Card";
import css from "../Style/Cards.module.css"
import {useSelector} from"react-redux";


export default function Cards() {


const pokemon = useSelector((state) => state.Pokemon) // uso siempre useSelector para pedir mis estados globales de reducer 

  if (pokemon) {
    return (
      <div className={css.container}>
        {pokemon.map((c) => (
          <Card key= {c.id} id = {c.id} name={c.name} image={c.image} types={c.types} />
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <Card />
      </div>
    );
  }
}
