import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./ServerCard.css";

const ServerCard = ({ server }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    window.location.hash = `#/server/${server.id}`;
    window.location.reload(); // Recarrega a página
  };

  return (
    <div
      className="server-card"
      onClick={handleClick} // Agora chama o handleClick
    >
      <img
        src={`${import.meta.env.BASE_URL}${server.image}`}
        alt={server.name}
        className="server-image"
      />
      <div className="server-info">
        <h3 className="server-name">{server.name}</h3>
        <p className="server-description">{server.description}</p>
      </div>
    </div>
  );
};

ServerCard.propTypes = {
  server: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default ServerCard;
