import React from "react";
import { Link } from "react-router-dom";
import enter from "../Imagen/pokemon.png";
import gengar from "../Imagen/gengar.gif";
import s from "../Style/LandingPage.module.css";

export default function Landing() {
  return (
    <div className={s.container}>
      <div className={s.contimage}>
        <Link to={"/loading"}>
          <div>
            <img className={s.enter}type='image' src={enter} alt='enter' />
          </div>
          <div >
            <div>
              <img className={s.gen} src={gengar} alt='gengar' />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
