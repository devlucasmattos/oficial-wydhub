import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./PlanCard.css";

const PlanCard = ({ plan, duration }) => {
  const navigate = useNavigate();

  if (!plan) {
    return <p>Erro: plano não encontrado.</p>;
  }

  const priceString = String(plan.price);
  const priceTotal = parseFloat(priceString.replace(/[^\d,]/g, "").replace(",", ".")) || 0;

  const months = { mensal: 1, trimestral: 3, semestral: 6, anual: 12 }[duration] || 1;
  const priceMonthly = (priceTotal / months).toFixed(2).replace(".", ",");

  // Definir número de parcelas conforme o tipo de plano
  const installmentOptions = {
    trimestral: 3,
    semestral: 6,
    anual: 12,
  };

  const installmentMonths = installmentOptions[duration] || 0;
  const installmentText = installmentMonths > 0
    ? `em até ${installmentMonths}x sem juros`
    : "";

  const handleSubscribe = () => {
    navigate("/Formulario");
  };

  return (
    <div className="plan-card">
      <div className="plan-header">
        <h2>{plan.name}</h2>
      </div>

      <div className="plan-pricing">
        <p className="plan-monthly">{`R$ ${priceMonthly} / mês`}</p>
        {duration !== "mensal" && (
          <p className="plan-total">Total: R$ {priceTotal.toFixed(2).replace(".", ",")} {installmentText}</p>
        )}
      </div>

      <div className="plan-features">
        {Array.isArray(plan.features) && plan.features.length > 0 ? (
          <ul>
            {plan.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        ) : (
          <p>Esse plano não possui benefícios listados.</p>
        )}
      </div>

      <div className="plan-footer">
        <button className="subscribe-button" onClick={handleSubscribe}>
          Assinar Agora 🚀
        </button>
      </div>
    </div>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    features: PropTypes.arrayOf(PropTypes.string),
  }),
  duration: PropTypes.string.isRequired,
};

export default PlanCard;
