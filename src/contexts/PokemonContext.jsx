import { createContext, useContext, useState } from 'react';

const PokemonContext = createContext();

export const PokemonProvider = ({ children }) => {
    const [selected, setSelected] = useState([]);

    const addPokemon = (pokemon) => {
        if (selected.length >= 6) {
            alert("더 이상 선택할 수 없습니다.");
            return;
        }
        if (selected.find(p => p.id === pokemon.id)) {
            alert("이미 선택된 포켓몬입니다.");
            return;
        }     
        setSelected([...selected, pokemon]);
    };
    
    const removePokemon = (pokemon) => {
        setSelected(selected.filter((p) => p !== pokemon));
    };

    const value = {
        selected,
        addPokemon,
        removePokemon
    };

    return (
        <PokemonContext.Provider value={value}>
            {children}
        </PokemonContext.Provider>
    );
};

export const usePokemon = () => {
    const context = useContext(PokemonContext);
    if (!context) {
        throw new Error('usePokemon must be used within a PokemonProvider');
    }
    return context;
}; 