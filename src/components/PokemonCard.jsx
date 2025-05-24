import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
    width: 120px;
    margin: 8px;
    text-align: center;
`;

const PokemonCard = ({ pokemon, addPokemon, removePokemon, isInDashboard }) => {
    return (
        <Card>
            <Link to={`/detail?id=${pokemon.id}`}>
                <img src={pokemon.img_url} alt={pokemon.korean_name} />
                <h3>{pokemon.korean_name}</h3>
                <p>{pokemon.types.join(", ")}</p>
            </Link>
            {isInDashboard ? (
                <button onClick={() => removePokemon(pokemon)}>제거</button>
            ) : (
                <button onClick={() => addPokemon(pokemon)}>추가</button>
            )}
        </Card>
    );
};

export default PokemonCard;
