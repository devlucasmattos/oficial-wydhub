import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";
import "./Plans.css";

const plans = [
  { name: "Básico", price: "R$ 19,90/mês", features: ["1- Seu servidor na listagem,", "2- Perfil com suas informações,", "3- Até 2 alterações de conteúdo no mês"] },
  { name: "Padrão", price: "R$ 39,90/mês", features: ["1- Todos benefícios do Básico", "2- Adicional de vídeos no perfil", "3- Apareça em nossas redes sociais!", "4- Até 5 alterações de conteúdo no mês"] },
  { name: "Elite", price: "R$ 89,90/mês", features: ["1- Todos benefícios do Padrão", "2- Destaque nas primeiras posições", "3- Destaque em nossas redes sociais!", "4- Até 8 alterações de conteúdo no mês"] },
];

const Plans = () => {
  const navigate = useNavigate();

  return (
    <div className="plans-container" >
      <h1>Planos de Divulgação</h1>
      <p>Escolha o plano ideal para impulsionar o seu servidor no WydHub!</p>

      <div className="plans-list">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>
        ← Voltar para Home
      </button>

      
    </div>
  );
};

export default Plans;
