import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PlanCard from "../components/PlanCard";
import "./Plans.css";

const planOptions = {
  mensal: [
    { name: "Básico", price: "R$ 25,90/mês", features: ["Seu servidor na listagem", "Perfil com suas informações", "Até 2 alterações de conteúdo no mês"] },
    { name: "Padrão", price: "R$ 49,90/mês", features: ["Todos benefícios do Básico", "Adicional de vídeos no perfil", "Apareça em nossas redes sociais!", "Até 5 alterações de conteúdo no mês"] },
    { name: "Elite", price: "R$ 99,90/mês", features: ["Todos benefícios do Padrão", "Destaque nas primeiras posições", "Destaque em nossas redes sociais!", "Até 8 alterações de conteúdo no mês"] },
  ],
  trimestral: [
    { name: "Básico", price: "R$ 72,90/trimestre", features: ["Seu servidor na listagem", "Perfil com suas informações", "Até 2 alterações de conteúdo no mês"] },
    { name: "Padrão", price: "R$ 139,90/trimestre", features: ["Todos benefícios do Básico", "Adicional de vídeos no perfil", "Apareça em nossas redes sociais!", "Até 5 alterações de conteúdo no mês"] },
    { name: "Elite", price: "R$ 279,90/trimestre", features: ["Todos benefícios do Padrão", "Destaque nas primeiras posições", "Destaque em nossas redes sociais!", "Até 8 alterações de conteúdo no mês"] },
  ],
  semestral: [
    { name: "Básico", price: "R$ 139,90/semestre", features: ["Seu servidor na listagem", "Perfil com suas informações", "Até 2 alterações de conteúdo no mês"] },
    { name: "Padrão", price: "R$ 265,90/semestre", features: ["Todos benefícios do Básico", "Adicional de vídeos no perfil", "Apareça em nossas redes sociais!", "Até 5 alterações de conteúdo no mês"] },
    { name: "Elite", price: "R$ 529,90/semestre", features: ["Todos benefícios do Padrão", "Destaque nas primeiras posições", "Destaque em nossas redes sociais!", "Até 8 alterações de conteúdo no mês"] },
  ],
  anual: [
    { name: "Básico", price: "R$ 259,90/ano", features: ["Seu servidor na listagem", "Perfil com suas informações", "Até 2 alterações de conteúdo no mês"] },
    { name: "Padrão", price: "R$ 499,90/ano", features: ["Todos benefícios do Básico", "Adicional de vídeos no perfil", "Apareça em nossas redes sociais!", "Até 5 alterações de conteúdo no mês"] },
    { name: "Elite", price: "R$ 999,90/ano", features: ["Todos benefícios do Padrão", "Destaque nas primeiras posições", "Destaque em nossas redes sociais!", "Até 8 alterações de conteúdo no mês"] },
  ],
};

const Plans = () => {
  const navigate = useNavigate();
  const [selectedPlan, setSelectedPlan] = useState("mensal");

  return (
    <div className="plans-container">
      <h1 className="plans-title">Planos WydHub</h1>
      <p className="plans-p">Escolha o plano ideal para impulsionar o seu servidor no WydHub!</p>

      <div className="plan-options">
        {Object.keys(planOptions).map((option) => (
          <button
            key={option}
            className={`plan-button ${selectedPlan === option ? "active" : ""}`}
            onClick={() => setSelectedPlan(option)}
            aria-pressed={selectedPlan === option}
          >
            {option.charAt(0).toUpperCase() + option.slice(1)}
          </button>
        ))}
      </div>

      <div className="plans-list">
        {planOptions[selectedPlan].map((plan, index) => (
          <PlanCard key={index} plan={plan} duration={selectedPlan} />
        ))}
      </div>

      <button className="back-button" onClick={() => navigate("/")}>← Voltar para Home</button>
    </div>
  );
};

export default Plans;
