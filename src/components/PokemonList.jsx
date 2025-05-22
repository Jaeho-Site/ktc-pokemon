import  MOCK_DATA  from "../db/mock";
import  PokemonCard  from "./PokemonCard";

const PokemonList = () => {
    return (
        <>
            {MOCK_DATA.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon} />
            ))}
        </>
    )
} 

export default PokemonList;