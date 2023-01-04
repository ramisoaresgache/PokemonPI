import React from "react";
import { NavLink } from "react-router-dom";
import Not from "../Imagen/notfound.png";
import s from "../Style/NotFound.module.css";
import Loading from "./Loading";

export default function NotFound() {
  return (
    <div>
      <NavLink to ="/loading" replace ={Loading}/>
      <img className={s.img} src={Not} alt='NotFound' />
    </div>
  );
}
