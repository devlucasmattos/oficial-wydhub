import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import servers from "../Data"; // Importando os servidores diretamente
import "./ServerCard.css";

const ServerCard = () => {
  const navigate = useNavigate();

  // Garante que 'servers' seja sempre um array, mesmo que seja undefined
  const validServers = Array.isArray(servers) ? servers : [];

  return (
    <div className="server-card-container">
      {validServers.map((server) => (
        <div key={server.id} className="server-card" onClick={() => navigate(`/server/${server.id}`)}>
          <img src={`${import.meta.env.BASE_URL}${server.image}`} alt={server.name} className="server-image" />
          <div className="server-info">
            <h3 className="server-name">{server.name}</h3>
            <p className="server-description">{server.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

ServerCard.propTypes = {
  servers: PropTypes.array,
};

export default ServerCard;
