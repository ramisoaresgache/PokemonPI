import React from "react";
import { Link, Navigate } from "react-router-dom";
import s from "../Style/NotFound.module.css";

export default function NotFound() {

  return (
    <div className={s.img}>
      <Link to={"/loading"}>
        <div className={s.container}>
          <button onClick={<Navigate to='/loading' />} className={s.btn}>Go Home</button>
        </div>
      </Link>
    </div>
  );
}
