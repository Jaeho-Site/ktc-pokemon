import { useNavigate } from "react-router-dom";
import pokemon from "../assets/pokemon.png";
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <img src={pokemon} alt="pokemon" /> <br />
            <button onClick={() => navigate("/dex")}>포켓몬 도감 시작하기</button>
        </>
    )
};

export default Home;


