import PropTypes from "prop-types";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import "./ServerDetail.css";
import TabbedContent from "../components/TabbedContent";
import { FaWhatsapp, FaGlobe, FaDiscord, FaYoutube, FaInstagram } from "react-icons/fa";

const ServerDetail = ({ servers }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const server = servers.find((s) => s.id === parseInt(id));

  useEffect(() => {
    if (!server) {
      navigate("*"); // Redireciona para a página NotFound
    }
  }, [server, navigate]);

  if (!server) {
    return null; // Evita renderizar algo antes do redirecionamento
  }

  const renderIconButton = (url, IconComponent, label, className) => {
    if (url) {
      return (
        <a 
          href={url} 
          target="_blank" 
          rel="noopener noreferrer" 
          className={`icon-button ${className}`} 
          aria-label={label}
        >
          <IconComponent size={28} />
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

      <TabbedContent />
      <div className="social-content">
      <h2 className="social-h2">Redes sociais:</h2>
      <div className="server-links">
        {renderIconButton(server.whatsapp, FaWhatsapp, "WhatsApp", "whatsapp")}
        {renderIconButton(server.site, FaGlobe, "Site", "website")}
        {renderIconButton(server.discord, FaDiscord, "Discord", "discord")}
        {renderIconButton(server.youtube, FaYoutube, "YouTube", "youtube")}
        {renderIconButton(server.instagram, FaInstagram, "Instagram", "instagram")}
      </div>
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
      instagram: PropTypes.string,
    })
  ).isRequired,
};

export default ServerDetail;
