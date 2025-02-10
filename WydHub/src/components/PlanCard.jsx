import PropTypes from "prop-types";
import "./PlanCard.css"; 

const PlanCard = ({ plan }) => {
  return (
    <div className="plan-card">
      <h2>{plan.name}</h2>
      <p className="plan-price">{plan.price}</p>
      <ul>
        {plan.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <button className="subscribe-button">Assinar</button>
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
