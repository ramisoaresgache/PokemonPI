import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cards() {
  const pokemon = useSelector((state) => state.Pokemon); // uso siempre useSelector para pedir mis estados globales de reducer
  return (
    <div>
      {pokemon.length ? (
        <div className='container'>
          {pokemon.map((c) => (
            <Link to={`/pokemon/detail/${c.id}`}>
              <Card
                key={c.id}
                id={c.id}
                name={c.name}
                image={c.image}
                types={c.types}
              />
            </Link>
          ))}
        </div>
      ) : (
        <div>
          {/* <Card /> */}
        </div>
      )}
    </div>
  );
}
