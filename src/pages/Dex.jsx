import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../db/mock";
import { Provider } from 'react-redux';
import store from '../redux/config/configStore';

const Dex = () => {
    return (
        <Provider store={store}>
            <Dashboard />
            <PokemonList pokemons={MOCK_DATA} />
        </Provider>
    );
};

export default Dex;


