import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./PlanCard.css"; 

const PlanCard = ({ plan }) => {
  const navigate = useNavigate(); 

  const handleSubscribe = () => {
    navigate("/Formulario"); 
  };

  return (
    <div className="plan-card">
      <h2>{plan.name}</h2>
      <p className="plan-price">{plan.price}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="subscribe-button" onClick={handleSubscribe}>
        Assinar
      </button>
    </div>
  );
};

PlanCard.propTypes = {
  plan: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    features: PropTypes.arrayOf(PropTypes.string).isRequired,
  }).isRequired,
};

export default PlanCard;
