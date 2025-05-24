import { useSearchParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';
import MOCK_DATA from "../db/mock";

const PokemonDetail = () => {
    const [params] = useSearchParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selected = useSelector(state => state.pokemon.selected);
    
    const id = parseInt(params.get("id"));
    const pokemon = MOCK_DATA.find((p) => p.id === id);

    if (!pokemon) return <p>해당 포켓몬 없음.</p>;
    const isInDashboard = selected.find(p => p.id === pokemon.id);
    const handleAddPokemon = () => {
        dispatch(addPokemon(pokemon));
    };
    const handleRemovePokemon = () => {
        dispatch(removePokemon(pokemon));
    };

    return (
        <div>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h2>{pokemon.korean_name}</h2>
            <p><strong>타입:</strong> {pokemon.types.join(", ")}</p>
            <p>{pokemon.description}</p>
            
            <div>
                {isInDashboard ? (
                    <button onClick={handleRemovePokemon}>
                        제거
                    </button>
                ) : (
                    <button 
                        onClick={handleAddPokemon}
                        disabled={selected.length >= 6}
                    >
                        {selected.length >= 6 ? '꽉참' : '추가'}
                    </button>
                )}
                
                <button onClick={() => navigate(-1)}>
                    뒤로 가기
                </button>
            </div>
        </div>
    );
};

export default PokemonDetail;
