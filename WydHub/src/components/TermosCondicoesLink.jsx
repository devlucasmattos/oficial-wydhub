import { useNavigate } from "react-router-dom";

const TermosCondicoesLink = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/TermosCondicoes");
  };

  return (
    <span className="text-blue-500 underline cursor-pointer" onClick={handleNavigate}>
      termos e condições
    </span>
  );
};

export default TermosCondicoesLink;
