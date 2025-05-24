import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux';
import { addPokemon, removePokemon } from '../redux/slices/pokemonSlice';

const PokemonCard = ({ pokemon, isInDashboard }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const selected = useSelector(state => state.pokemon.selected);
    
    const handleCardClick = () => {
        navigate(`/detail?id=${pokemon.id}`);
    };
    
    const handleAddPokemon = (e) => {
        e.stopPropagation();
        if (selected.length >= 6) {
            alert("더 이상 선택할 수 없습니다.");
            return;
        }
        if (selected.find(p => p.id === pokemon.id)) {
            alert("이미 선택된 포켓몬입니다.");
            return;
        }
        
        dispatch(addPokemon(pokemon));
    };
    
    const handleRemovePokemon = (e) => {
        e.stopPropagation();
        dispatch(removePokemon(pokemon));
    };
    
    return (
        <Card onClick={handleCardClick} style={{ cursor: 'pointer' }}>
            <img src={pokemon.img_url} alt={pokemon.korean_name} />
            <h4>{pokemon.korean_name}</h4>
            <p>{pokemon.types.join(", ")}</p>
            {isInDashboard ? (
                <button onClick={handleRemovePokemon}>제거</button>
            ) : (
                <button onClick={handleAddPokemon}>추가</button>
            )}
        </Card>
    );
};

export default PokemonCard;

const Card = styled.div`
    width: 7.5rem;
    margin: 0.5rem;
    text-align: center;
    border: 1.5px solid;
    border-radius: 8px;
    padding: 0.5rem;

    h4 {
        font-size: 0.75rem;
        font-weight: 600;
        margin: 0.25rem 0;
    }

    p {
        font-size: 0.625rem;
        color: #666;
        margin: 0.125rem 0;
    }

    button {
        font-size: 0.8rem;
        padding: 0.125rem 0.375rem;
        margin-top: 0.25rem;
        border: 1px solid #ddd;
        border-radius: 4px;
        cursor: pointer;
        background-color: red;
    }

    @media (max-width: 768px) {
        width: 6rem;
        margin: 0.25rem;
        padding: 0.375rem;

        img {
            max-width: 60px;
        }

        h4 {
            font-size: 0.625rem;
        }

        p {
            font-size: 0.5rem;
        }

        button {
            font-size: 0.5rem;
            padding: 0.1rem 0.25rem;
        }
    }

    @media (max-width: 480px) {
        width: 5rem;
        margin: 0.125rem;
        padding: 0.25rem;

        img {
            max-width: 50px;
        }

        h4 {
            font-size: 0.5rem;
        }

        p {
            font-size: 0.425rem;
        }

        button {
            font-size: 0.425rem;
            padding: 0.05rem 0.2rem;
        }
    }
`;

