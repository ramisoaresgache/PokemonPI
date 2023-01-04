import React from "react";
import { Link } from "react-router-dom";
import s from "../Style/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={s.img}>
      <Link to={"/home"}>
        <div>
          <button className={s.btn}>Go Home</button>
        </div>
      </Link>
    </div>
  );
}
