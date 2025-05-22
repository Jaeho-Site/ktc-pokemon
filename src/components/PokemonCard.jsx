const PokemonCard = ({ pokemon, addPokemon, removePokemon, isInDashboard }) => {
    return (
        <div>
            <img src={pokemon.img_url}/>
            <h3>{pokemon.korean_name}</h3>
            <p>{pokemon.types.join(", ")}</p>
            {isInDashboard ? (
                <button onClick={() => removePokemon(pokemon)}>제거</button>
            ) : (
                <button onClick={() => addPokemon(pokemon)}>추가</button>
            )}
        </div>
    )
}

export default PokemonCard;