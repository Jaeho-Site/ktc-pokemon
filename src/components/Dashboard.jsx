import { useNavigate } from "react-router-dom";
import Pokeball from "../assets/pokeball.png";
import PokemonCard from "./PokemonCard";
import styled from "styled-components";

const Dashboard = ({ selected, removePokemon }) => {
    const navigate = useNavigate();
    const slots = Array.from({ length: 6 }, (_, index) => selected[index] || null);

    return (
        <DashboardWrapper hasCards={selected.length > 0}>
            <button onClick={() => navigate("/")}>홈으로 돌아가기</button>
            <h3>나만의 포켓몬</h3>
            <PokemonGrid>
                {slots.map((pokemon, index) => (
                    <SlotContainer key={index}>
                        {pokemon ? (
                            <PokemonCard
                                key={pokemon.id}
                                pokemon={pokemon}
                                removePokemon={removePokemon}
                                isInDashboard={true}
                            />
                        ) : (
                            <img src={Pokeball} alt="포켓몬 볼" />
                        )}
                    </SlotContainer>
                ))}
            </PokemonGrid>
        </DashboardWrapper>
    )
}

export default Dashboard;

const DashboardWrapper = styled.div`
    max-width: 1040px;
    width: 100%;
    margin: 0 auto 40px auto;
    padding: 24px;
    border: 2px solid;
    border-radius: 12px;
    box-sizing: border-box;
    transition: all 0.4s ease;
    min-height: ${props => props.hasCards ? '280px' : '200px'};
`;

const PokemonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 16px;
    margin-top: 20px;
    justify-items: center;
    max-width: 100%;
`;

const SlotContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 180px;
`;