import  Dashboard  from "../components/Dashboard";
import  PokemonList  from "../components/PokemonList";
import  MOCK_DATA  from "../db/mock";
import { useState } from "react";

const Dex = () => {
    const [selected,setSelected] = useState([]);

    const addPokemon = (pokemon) => {
        if (selected.find(p => p.id === pokemon.id)) {
            alert("이미 선택된 포켓몬입니다.");
            return;
        }     
        if (selected.length >= 6) {
            alert("더 이상 선택할 수 없습니다.");
            return;
        }
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


