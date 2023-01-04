import SearchBar from "./SearchBar";
import { Link, useLocation, Navigate } from "react-router-dom";
import logo from "../Imagen/pokemonpika.png";
import s from "../Style/NavBar.module.css";
import cancion from "../Musica/cancionpokemon.mp3";

const NavBar = () => {
  const location = useLocation();

  return (
    location.pathname !== "/" &&
    location.pathname !== "/loading" && (
      <nav className={s.nav}>
        <div className={s.container}>
          {" "}

          <div>
            <Link to='/'>
              <img
                className={s.img}
                onClick={<Navigate to='/' />}
                src={logo}
                alt='loading'
              />
            </Link>
          </div>
          <div className={s.containermusic}>
            <audio className={s.music} src={cancion} controls></audio>
          </div>
          <div className={s.search}>
            <SearchBar />
          </div>
          <div className={s.divanbout}>
            <Link to='/about'>
              <h3 className={s.about}>About</h3>
            </Link>
          </div>
          <div className={s.divcreate}>
            <Link to='/CreatePokemon'>
              <h3 className={s.create}>Create Pokemon</h3>
            </Link>
          </div>
        </div>
      </nav>
    )
  );
};

export default NavBar;
