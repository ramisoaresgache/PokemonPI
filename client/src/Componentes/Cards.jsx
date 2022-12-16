import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Cards() {
  const pokemon = useSelector((state) => state.Pokemon); // uso siempre useSelector para pedir mis estados globales de reducer
  const pages = useSelector((state) => state.Pages); 
  const filter = useSelector((state)=> state.Filtrados)

  function selected(){
    return filter.length ? filter: pokemon
  }

  return ( 
    <div>
      {pokemon.length ? (
        <div className='container'>
          {selected().slice(pages*12,pages*12+12).map((c) => (
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



