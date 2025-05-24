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
    gap: 12px;
    max-width: 1040px;
    width: 100%;
    margin: 0 auto;
    border: 2px solid;
    border-radius: 12px;
    padding: 16px;
    box-sizing: border-box;
    justify-content: flex-start;
`;
