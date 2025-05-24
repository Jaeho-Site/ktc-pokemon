import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ pokemons, addPokemon }) => {
    return (
        <List>
            {pokemons.map((pokemon) => (
                <PokemonCard
                    key={pokemon.id}
                    pokemon={pokemon}
                    addPokemon={addPokemon}
                    isInDashboard={false}
                />
            ))}
        </List>
    );
};

export default PokemonList;

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    border: 2px solid;
    border-radius: 12px;
    padding: 1rem;
    box-sizing: border-box;
    justify-content: flex-start;

    @media (max-width: 768px) {
        gap: 0.5rem;
        padding: 0.75rem;
        justify-content: center;
    }

    @media (max-width: 480px) {
        gap: 0.25rem;
        padding: 0.5rem;
    }
`;
