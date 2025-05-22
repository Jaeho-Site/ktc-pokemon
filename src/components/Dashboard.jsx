import { useNavigate } from "react-router-dom";
import  Pokeball  from "../assets/pokeball.png";
import PokemonCard from "./PokemonCard";

const Dashboard = ({selected, removePokemon}) => {
    const navigate = useNavigate();

    const list=[];
    for(let i=0;i<6;i++){
        if(selected[i]){
            list.push(selected[i]);
        }else{
            list.push(null);
        }
    }
    return (
        <div>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
            <h1>나만의 포켓몬</h1>
            {list.map((pokemon,index)=>(
                pokemon?(
                    <div key={index}> 
                        <PokemonCard key={pokemon.id} pokemon={pokemon} removePokemon={removePokemon} isInDashboard={true} />
                    </div>
                ):(      
                    <img src={Pokeball} alt="포켓몬 볼" key={index} />        
                )
                
            ))}
        </div>
    )
}

export default Dashboard;