import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { typePokemons,  } from "../Redux/actions";
import s from "../Style/Filtrados.module.css"

export default function FilterType() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.Types);
  const typeFilter = useSelector((state) => state.TypesFiltered)

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(typePokemons(e.target.value));
  };
  
  return (
    <div>
      <h3 className={s.title}>Order By Types</h3>
      <select className={s.select} name='types' onChange={handleSubmit}>
        <option value="types"> Order Types</option>
        {types.map((t, i) => (
          <option key={i} value={`${t.name}`}>
            {t.name}
          </option>
      ))}
      </select>
      {typeFilter.map((tf) => (<p>{tf}</p>))}
    </div>
  );
}
