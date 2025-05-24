import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../db/mock";
import { PokemonProvider } from "../contexts/PokemonContext";

const Dex = () => {
    return (
        <PokemonProvider>
            <Dashboard />
            <PokemonList pokemons={MOCK_DATA} />
        </PokemonProvider>
    );
};

export default Dex;


