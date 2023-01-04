import { Link, Navigate } from "react-router-dom";
import s from "../Style/Filtrados.module.css"
import j from "../Style/Clear.module.css"

export default function Clear() {
  return (
    <div>
      <h3 className={s.title}>Clear Filter</h3>
      <Link to='/loading'>
        <button className={j.btn} onClick={<Navigate to='/' />}>Clear</button>
      </Link>
    </div>
  );
}
