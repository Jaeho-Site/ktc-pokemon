import { useNavigate } from "react-router-dom";
import  Dashboard  from "../components/Dashboard";
import  PokemonList  from "../components/PokemonList";

const Dex = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button> <br />
            <Dashboard />
            <PokemonList />
        </>

    )
};

export default Dex;


