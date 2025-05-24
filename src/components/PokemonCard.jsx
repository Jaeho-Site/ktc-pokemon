import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const PokemonCard = ({ pokemon, addPokemon, removePokemon, isInDashboard }) => {
    const navigate = useNavigate();
    const handleCardClick = () => {
        navigate(`/detail?id=${pokemon.id}`);
    };
    return (
        <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h4>{pokemon.korean_name}</h4>
            <p>{pokemon.types.join(", ")}</p>
            {isInDashboard ? (
                <button onClick={e => { e.stopPropagation(); removePokemon(pokemon); }}>제거</button>
            ) : (
                <button onClick={e => { e.stopPropagation(); addPokemon(pokemon); }}>추가</button>
            )}
        </Card>
    );
};

export default PokemonCard;

const Card = styled.div`
    width: 120px;
    margin: 8px;
    text-align: center;
    border: 1.5px solid;
    border-radius: 8px;
    padding: 8px;
    h4 {
        font-size: 12px;
        font-weight: 600;
    }
    p {
        font-size: 10px;
        color: #666;
    }
    button {
        font-size: 12px;
        padding: 2px 6px;
        margin-top: 4px;
        border-radius: 4px;
        cursor: pointer;
    }
`;

