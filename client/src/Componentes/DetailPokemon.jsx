import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getPokemonsDetails, CleanDetailPokemon } from "../Redux/actions";
import s from "../Style/DetailPokemon.module.css";

export default function Detail() {
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.PokemonDetail);
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    dispatch(getPokemonsDetails(id));
  }, [dispatch, id]);

  const handleBack = () => {
    dispatch(CleanDetailPokemon());
    navigate("/loading");
  };

  return (
    <div>
      {!detail.name ? (
        <div>{/* <Navigate to='/loading' replace={<Loading />} /> */}</div>
      ) : (
        <div className={s.container}>
          {/* */}
          <div className={s.name}>
            <h3>{detail.name}</h3>
          </div>
          <div className={s.image}>
            <img src={detail.image} alt='not found' />
          </div>
          <div className={s.detail}>
            <h3>Detalle Pokemon</h3>
          </div>
          <div className={s.id}>
            <h3>id:</h3> <h3 className={s.numid}>{detail.id}</h3>
          </div>
          <div className={s.speed}>
            <h3>Speed:</h3>
            <h3 className={s.numspeed}>{detail.speed}</h3>
          </div>
          <div className={s.attack}>
            <h3>Attack:</h3> <h3 className={s.numattack}>{detail.attack}</h3>
          </div>
          <div className={s.hp}>
            <h3>Hp:</h3> <h3 className={s.numdetail}>{detail.hp}</h3>
          </div>
          <div className={s.defense}>
            <h3>Defense: </h3>
            <h3 className={s.numdefense}>{detail.defense}</h3>
          </div>
          <div className={s.height}>
            <h3>Height: </h3>
            <h3 className={s.numheight}>{detail.height}</h3>
          </div>
          <div className={s.weight}>
            <h3>Weight: </h3>
            <h3 className={s.numweight}>{detail.weight}</h3>
          </div>
          <div className={s.types}>
            <h3>Types: </h3>
            <h3 className={s.nametype}>
              {detail.types.map((x) => x.name).join("/")}
            </h3>
          </div>
          <div className={s.back}>
            <button className={s.boton} onClick={handleBack}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
