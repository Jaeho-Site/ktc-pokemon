import  PokemonCard  from "./PokemonCard";

const PokemonList = ({ pokemons }) => {
    return (
        <>
            {pokemons.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </>
    )
} 

export default PokemonList;