import { useNavigate } from "react-router-dom";

const Dex = () => {
    const navigate = useNavigate();
    return (
        <>
            <button onClick={() => navigate("/")}>홈으로 돌아가기기</button>
        </>
    )
};

export default Dex;


