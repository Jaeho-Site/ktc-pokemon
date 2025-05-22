import  Dashboard  from "../components/Dashboard";
import  PokemonList  from "../components/PokemonList";
import  MOCK_DATA  from "../db/mock";
import { useState } from "react";

const Dex = () => {
    const [selected,setSelected] = useState([]);

    const addPokemon = (pokemon) => {
        setSelected([...selected, pokemon]);
      };
    const removePokemon = (pokemon) => {
        setSelected(selected.filter((p) => p !== pokemon));
    };
    return (
        <>
            <Dashboard selected={selected} removePokemon={removePokemon} />
            <PokemonList pokemons={MOCK_DATA} addPokemon={addPokemon} />
        </>

    )
};

export default Dex;


