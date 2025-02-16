import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import servers from '../Data';
import './TabbedContent.css';

const TabbedContent = () => {
  const { id } = useParams(); // Obtém o id do servidor da URL
  const [activeTab, setActiveTab] = useState('comeceAqui');

  // Encontra o servidor com o id correspondente
  const server = servers.find((server) => server.id === parseInt(id));

  // Função para verificar se existe uma URL válida para o vídeo
  const renderVideo = () => {
    if (server.video) {
      return (
        <div className="video-container">
          <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${server.video.split('v=')[1]}`}
            title="Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      );
    }
    return null;
  };

  // Função para verificar se há imagens ou vídeos disponíveis
  const renderImagesVideos = () => {
    const hasImages = server.image2 || server.image3 || server.image4;
    const hasVideo = server.video;

    if (hasImages || hasVideo) {
      return (
        <div className="tab-content">
          <h2>Imagens/Vídeos</h2>
          {server.image2 && <img src={server.image2} alt={server.name} />}
          {server.image3 && <img src={server.image3} alt={server.name} />}
          {server.image4 && <img src={server.image4} alt={server.name} />}
          {renderVideo()}
        </div>
      );
    } else {
      return (
        <div className="tab-content">
          <h2>Imagens/Vídeos</h2>
          <p>O Servidor não possui imagem ou vídeo cadastrados.</p>
        </div>
      );
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'comeceAqui':
        return (
          <div className="tab-content">
            <h2>Conheça {server.name}!</h2>
            <h3 dangerouslySetInnerHTML={{ __html: server.description.replace(/\n/g, '<br>') }} />
            {server.date && <h3>Online desde: {server.date}</h3>} {/* Verifica se server.date existe */}
          </div>
        );
      case 'noticias':
        return (
          <div className="tab-content">
            <p className='noticie'>{server.noticias}</p>
            <p dangerouslySetInnerHTML={{ __html: server.eventoDescription.replace(/\n/g, '<br>') }} />
          </div>
        );
      case 'imagensVideos':
        return renderImagesVideos(); // Chama a função que gerencia imagens e vídeos
      default:
        return <div className="tab-content">Selecione uma aba.</div>;
    }
  };
  

  return (
    <div className="tabbed-content">
      <div className="tabs">
        <button className={`tab ${activeTab === 'comeceAqui' ? 'active' : ''}`} onClick={() => setActiveTab('comeceAqui')}>
          Comece aqui
        </button>
        <button className={`tab ${activeTab === 'noticias' ? 'active' : ''}`} onClick={() => setActiveTab('noticias')}>
          Notícias
        </button>
        <button className={`tab ${activeTab === 'imagensVideos' ? 'active' : ''}`} onClick={() => setActiveTab('imagensVideos')}>
          Imagens/Vídeos
        </button>
      </div>
      {renderTabContent()}
    </div>
  );
};

export default TabbedContent;
