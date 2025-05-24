import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../db/mock";

const Dex = () => {
    return (
        <>
            <Dashboard />
            <PokemonList pokemons={MOCK_DATA} />
        </>
    );
};

export default Dex;


