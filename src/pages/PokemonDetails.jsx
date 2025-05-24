import { useSearchParams, useNavigate } from "react-router-dom";
import MOCK_DATA from "../db/mock";

const PokemonDetail = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const id = parseInt(params.get("id"));

    const pokemon = MOCK_DATA.find((p) => p.id === id);

    if (!pokemon) return <p>해당 포켓몬 없음 .</p>;

    return (
        <div>
            <img src={pokemon.img_url}/>
            <h2>{pokemon.korean_name}</h2>
            <p>타입: {pokemon.types.join(", ")}</p>
            <p>{pokemon.description}</p>
            <button onClick={() => navigate(-1)}>뒤로 가기</button>
        </div>
    );
};

export default PokemonDetail;
