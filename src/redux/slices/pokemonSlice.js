import { createSlice } from '@reduxjs/toolkit';

const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        selected: []
    },
    reducers: {
        addPokemon: (state, action) => {
            const pokemon = action.payload;
            if (state.selected.length >= 6) {
                return; 
            }
            if (state.selected.find(p => p.id === pokemon.id)) {
                return; 
            }     
            state.selected.push(pokemon);
        },
        removePokemon: (state, action) => {
            const pokemon = action.payload;
            state.selected = state.selected.filter(p => p.id !== pokemon.id);
        }
    }
});
export const { addPokemon, removePokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
