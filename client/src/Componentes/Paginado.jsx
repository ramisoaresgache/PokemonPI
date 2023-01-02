import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPages } from "../Redux/actions";
import s from "../Style/Paginado.module.css";

export default function Paginado() {
  //le paso estas constantes que vienen de mi home son todos los pokemones los pokemones por pagina y el paginado
  const dispatch = useDispatch();

  const allPokemons = useSelector((state) => state.Pokemon);
  const actualPages = useSelector((state) => state.Pages);

  const handleClick = (i) => {
    dispatch(setPages(i));
  };

  const handlePrev = () => {
    if (actualPages !== inicial) {
      dispatch(setPages(actualPages - 1));
    }
  };
  const handleNext = () => {
    if (actualPages !== final) {
      dispatch(setPages(actualPages + 1));
    }
  };

  const pageNumber = []; //esto es para guardar el numero de mis paginas

  for (let i = 1; i <= Math.ceil(allPokemons.length / 12); i++) {
    //con el math lo que hago es redondear todos los pokemones sobre la cantidad que quiero por pagina
    pageNumber.push(i);
  }

  let inicial = 0;
  let final = pageNumber.length - 1;

  return (
    <div>
      <ul className={s.container}>
        <li>
          <button className={s.btnpre} onClick={() => handlePrev()}>
            prev
          </button>
        </li>
        {allPokemons.length && //si tengo este arreglo mapealo  y devolveme por ese arreglo cada uno de los numeros que te devuelva el paginado
          pageNumber.map((number, i) => (
            <li className={s.number} key={number}>
              <button className={s.btnnum} onClick={() => handleClick(i)}>
                {number}
              </button>
            </li>
          ))}
        <li>
          <button className={s.btnnext} onClick={() => handleNext()}>
            next
          </button>
        </li>
      </ul>
    </div>
  );
}
