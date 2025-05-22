import  PokemonCard  from "./PokemonCard";

const PokemonList = ({ pokemons, addPokemon }) => {
    return (
        <>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} addPokemon={addPokemon} isInDashboard={false} />
            ))}
        </>
    )
} 

export default PokemonList;