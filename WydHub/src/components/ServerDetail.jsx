import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import "./ServerDetail.css";

const ServerDetail = ({ servers }) => {
  const { id } = useParams();
  const server = servers.find(s => s.id === parseInt(id));

  if (!server) {
    return <h2>Servidor não encontrado!</h2>;
  }

  // Função para substituir as quebras de linha por <br />
  const formatEventDescription = (description) => {
    return description.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  // Função para substituir as quebras de linha por <br /> nas notícias
  const formatNotices = (notices) => {
    return notices.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        <br />
      </span>
    ));
  };

  // Renderiza botões se o campo não for vazio
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
      {/* Exibe a imagem corretamente */}
      <img src={`${import.meta.env.BASE_URL}${server.image}`} alt={server.name} className="server-detail-image" />
      <h2 className="server-name">{server.name}</h2>
      
      {/* Renderiza as notícias com quebras de linha */}
      <p className="notices">{formatNotices(server.noticias)}</p>
      
      <p className="server-description">{server.description}</p>

      {/* Renderiza o conteúdo do evento com quebras de linha */}
      <div className="evento-description">
        {formatEventDescription(server.eventoDescription)}
      </div>

      {/* Renderiza os botões conforme os links disponíveis */}
      <div className="server-links">
        {renderButton(server.whatsapp, "WhatsApp")}
        {renderButton(server.site, "Site")}
        {renderButton(server.discord, "Discord")}
        {renderButton(server.youtube, "YouTube")}
      </div>
    </div>
  );
};

// Validação de `PropTypes`
ServerDetail.propTypes = {
  servers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      noticias: PropTypes.string.isRequired,
      eventoDescription: PropTypes.string.isRequired,
      whatsapp: PropTypes.string,
      site: PropTypes.string,
      discord: PropTypes.string,
      youtube: PropTypes.string,
    })
  ).isRequired,
};

export default ServerDetail;
