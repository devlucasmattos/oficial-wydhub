import { useNavigate } from "react-router-dom";
import './TermosCondicoesLink.css';  

const TermosCondicoesLink = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/TermosCondicoes");
  };

  return (
    <span
      className="term-link"
      onClick={handleNavigate}
    >
      termos e condições
    </span>
  );
};

export default TermosCondicoesLink;
