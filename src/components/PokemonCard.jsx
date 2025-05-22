const PokemonCard = ({ pokemon }) => {
    return (
        <div>
            <img src={pokemon.img_url}/>
            <h3>{pokemon.korean_name}</h3>
            <p>{pokemon.types.join(", ")}</p>
            <button>추가</button>
        </div>
    )
}

export default PokemonCard;