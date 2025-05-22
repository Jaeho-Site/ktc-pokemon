import { useNavigate } from "react-router-dom";
import  Pokeball  from "../assets/pokeball.png";

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
            <h1>나만의 포켓몬</h1>
            <img src={Pokeball} />
            <img src={Pokeball} />
            <img src={Pokeball} />
            <img src={Pokeball} />
            <img src={Pokeball} />
            <img src={Pokeball} />
        </div>
    )
}

export default Dashboard;