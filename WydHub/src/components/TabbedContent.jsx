import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import servers from '../Data'; 
import './TabbedContent.css';

const TabbedContent = () => {
  const { id } = useParams(); // Obtém o id do servidor da URL
  const [activeTab, setActiveTab] = useState('comeceAqui');  

  // Encontra o servidor com o id correspondente
  const server = servers.find((server) => server.id === parseInt(id));


  const renderTabContent = () => {
    switch (activeTab) {
      case 'comeceAqui':
        return (
          <div className="tab-content">
            <h2>Conheça {server.name}!</h2>
            <h3 dangerouslySetInnerHTML={{ __html: server.description.replace(/\n/g, '<br>') }} />
          </div>
        );
      case 'noticias':
        return (
          <div className="tab-content">
            <h2>Notícias</h2>
            <p>{server.noticias}</p>
            <p dangerouslySetInnerHTML={{ __html: server.eventoDescription.replace(/\n/g, '<br>') }} />
          </div>
        );
      case 'imagensVideos':
        return (
          <div className="tab-content">
            <h2>Imagens/Vídeos</h2>
            <img src={server.image} alt={server.name} />
          </div>
        );
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
