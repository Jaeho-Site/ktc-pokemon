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
    margin: 0 auto 2.5rem auto;
    padding: 1.5rem;
    border: 2px solid;
    border-radius: 12px;
    box-sizing: border-box;
    transition: all 0.4s ease;
    min-height: ${props => props.hasCards ? '280px' : '200px'};

    @media (max-width: 768px) {
        padding: 1rem;
        margin-bottom: 1.5rem;
    }

    @media (max-width: 480px) {
        padding: 0.75rem;
        margin-bottom: 1rem;
    }
`;

const PokemonGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 1rem;
    margin-top: 1.25rem;
    justify-items: center;
    max-width: 100%;

    @media (max-width: 768px) {
        gap: 0.75rem;
    }

    @media (max-width: 480px) {
        gap: 0.5rem;
    }
`;

const SlotContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 11.25rem;

    img {
        width: 60%;
        height: auto;
        max-width: 80px;
    }

    @media (max-width: 768px) {
        min-height: 10rem;
        
        img {
            max-width: 70px;
        }
    }

    @media (max-width: 480px) {
        min-height: 8rem;
        
        img {
            max-width: 50px;
        }
    }
`;