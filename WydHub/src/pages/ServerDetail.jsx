import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import "./ServerDetail.css";

const ServerDetail = ({ servers }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const server = servers.find((s) => s.id === parseInt(id));

  if (!server) {
    return <h2>Servidor não encontrado!</h2>;
  }

  const formatEventDescription = (description = "") => {
    return description.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const formatNotices = (notices = "") => {
    return notices.split("\n").map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  const renderButton = (url, label) => {
    if (url) {
      return (
        <a href={url} target="_blank" rel="noopener noreferrer" className="button">
          {label}
        </a>
      );
    }
    return null;
  };

  return (
    <div className="server-detail">
      <button className="back-button" onClick={() => navigate("/")}>
        ← Voltar para Home
      </button>

      <img
        src={server.image}
        alt={server.name}
        className="server-detail-image"
      />
      <h2 className="server-name">{server.name}</h2>

      <p className="notices">{formatNotices(server.noticias)}</p>

      <div className="evento-description">
        {formatEventDescription(server.eventoDescription)}
      </div>

      <div className="server-links">
        {renderButton(server.whatsapp, "WhatsApp")}
        {renderButton(server.site, "Site")}
        {renderButton(server.discord, "Discord")}
        {renderButton(server.youtube, "YouTube")}
        {renderButton(server.instagram, "Instagram")}
      </div>
    </div>
  );
};

ServerDetail.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      noticias: PropTypes.string,
      eventoDescription: PropTypes.string,
      whatsapp: PropTypes.string,
      site: PropTypes.string,
      discord: PropTypes.string,
      youtube: PropTypes.string,
    })
  ).isRequired,
};

export default ServerDetail;
