import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { typePokemons,  } from "../Redux/actions";

export default function FilterType() {
  const dispatch = useDispatch();
  const types = useSelector((state) => state.Types);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(typePokemons(e.target.value));
  };
  return (
    <div>
      <h3>Order By Types</h3>
      <select name='types' className='filtro' onChange={handleSubmit}>
        <option value="types">Types</option>
        {types.map((t, i) => (
          <option key={i} value={`${t.name}`}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
