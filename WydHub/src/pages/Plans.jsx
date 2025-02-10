import PlanCard from "../components/PlanCard";
import "./Plans.css"; 
const plans = [
  { name: "Básico", price: "R$ 19,90/mês", features: ["1 Destaque na Home", "Link para site/Discord", "Suporte básico"] },
  { name: "Padrão", price: "R$ 49,90/mês", features: ["3 Destaques na Home", "Link para site/Discord/YouTube", "Banner promocional", "Suporte Prioritário"] },
  { name: "Elite", price: "R$ 99,90/mês", features: ["Destaque Fixo", "Postagens semanais", "Banner personalizado", "Consultoria estratégica", "Suporte VIP"] },
];

const Plans = () => {
  return (
    <div className="plans-container">
      <h1>Planos de Divulgação</h1>
      <p>Escolha o plano ideal para impulsionar o seu servidor no WydHub!</p>
      
      <div className="plans-list">
        {plans.map((plan, index) => (
          <PlanCard key={index} plan={plan} />
        ))}
      </div>
    </div>
  );
};

export default Plans;
