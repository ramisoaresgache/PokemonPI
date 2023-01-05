import React from "react";
import { Link } from "react-router-dom";
import image from "../Imagen/about.png";
import s from "../Style/About.module.css";

export default function About() {
  return (
    <div className={s.container}>
      <div className={s.containerbtn}>
        <Link to={"/loading"}>
          <button className={s.btn}>Back</button>
        </Link>
      </div>
      <div className={s.containerimg}>
        <img className={s.img} src={image} alt='not found' />
      </div>
      <div className={s.containerdesc}>
        <h3 className={s.title}>Pokemon App</h3>
        <p className={s.parrafo}>
          Este proyecto es fruto del bootcamp de Henry, donde tuvo 15 días de
          duración del trabajo, donde se trabajó con tecnologías modernas como
          React, Redux, Express, Sequelize y Postgres. El objetivo de este
          proyecto fue construir una página donde se muestren Pokemons esta
          página contiene un landing page, una home con 12 Pokemons con un
          navbar para buscar por nombre y/o ID, una sección de creación de
          Pokemons un paginado para navegar entre las distintas páginas, un
          filtrado por ataque, orden alfabético y por tipo, un detalle de cada
          Pokemon y una sección de About.
          <br />
          <br />
          Contacto:
          <br />
          <br />
          <a href="https://www.linkedin.com/in/ramiro-soaresgache/">
          Linkedin:Ramiro Soares Gache
          </a>
          <br />
          <a href="https://github.com/ramisoaresgache">
          GuitHub:Ramiro Soares Gache
          </a>
        </p>
      </div>
    </div>
  );
}
