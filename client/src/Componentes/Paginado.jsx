import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "../Redux/actions";

export default function Paginado() {
  //le paso estas constantes que vienen de mi home son todos los pokemones los pokemones por pagina y el paginado
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.Pokemon);

  const handleClick = (i) => {
    dispatch(setPages(i));
  };

  const pageNumber = []; //esto es para guardar el numero de mis paginas

  for (let i = 1; i <= Math.ceil(allPokemons.length / 12); i++) {
    //con el math lo que hago es redondear todos los pokemones sobre la cantidad que quiero por pagina
    pageNumber.push(i);
  }

  let inicial = 0;
  let final = 10;

  return (
    <nav>
      <ul>
        <li>
          <button
            onClick={() => {
              inicial = inicial - 10;
              final = final - 10;
            }}
          >
            prev
          </button>
        </li>
        {allPokemons.length && //si tengo este arreglo mapealo  y devolveme por ese arreglo cada unoi de los numeros que te devuelva el paginado
          pageNumber.slice(inicial, final).map((number, i) => (
            <li className='number' key={number}>
              <button onClick={() => handleClick(i)}>{number}</button>
            </li>
          ))}
        <li>
          <button
            onClick={() => {
              inicial = inicial + 10;
              final = final + 10;
            }}
          >
            next
          </button>
        </li>
      </ul>
    </nav>
  );
}

// hacer slice antes del map en la linea 26
