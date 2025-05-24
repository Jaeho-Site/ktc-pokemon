import styled from "styled-components";
import PokemonCard from "./PokemonCard";

const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    max-width: 1040px;
    margin: 0 auto;
`;

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
