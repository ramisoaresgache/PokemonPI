import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "./Loading";
import { getPokemonsDetails, CleanDetailPokemon } from "../Redux/actions";

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
    navigate("/home");
  };
  console.log(detail);
  return (
    <div>
      {!detail.name ? (
        <div>
          <Loading />
        </div>
      ) : (
        <div className='container'>
          <div className='name'>
            <h3>{detail.name}</h3>
          </div>
          <div className='image'>
            <img src={detail.image} alt='not found' />
          </div>
          <div className='detail'>
            <h3>Detalle Pokemon</h3>
          </div>
          <div>
            <h3>id:</h3> <div>{detail.id}</div>
          </div>
          <div className='speed'>
            <h3>Speed:</h3> <div>{detail.speed}</div>
          </div>
          <div className='attack'>
            <h3>Attack:</h3> <div>{detail.attack}</div>
          </div>
          <div className='hp'>
            <h3>Hp:</h3> <div>{detail.hp}</div>
          </div>
          <div className='defense'>
            <h3>Defense: </h3>
            <div>{detail.defense}</div>
          </div>
          <div className='height'>
            <h3>Height: </h3>
            <div>{detail.height}</div>
          </div>
          <div className='weight'>
            <h3>Weight: </h3>
            <div>{detail.weight}</div>
          </div>
          <div className='types'>
            <h3>Types: </h3>
            <div>{detail.types.map((x) => x.name).join("/")}</div>
          </div>
          <div className='boton'>
            <button onClick={handleBack}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
