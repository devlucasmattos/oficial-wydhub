import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import servers from '../Data'; 
import './TabbedContent.css';

const TabbedContent = () => {
  const { id } = useParams(); // Obtém o id do servidor da URL
  const [activeTab, setActiveTab] = useState('comeceAqui');  

  // Encontra o servidor com o id correspondente
  const server = servers.find((server) => server.id === parseInt(id));

  if (!server) {
    return <h2>Servidor não encontrado!</h2>;
  }

  const renderTabContent = () => {
    switch (activeTab) {
      case 'comeceAqui':
        return (
          <div className="tab-content">
            <h2>Comece aqui</h2>
            <p>Bem-vindo ao servidor {server.name}! Escolha uma das opções acima para começar sua jornada.</p>
          </div>
        );
      case 'noticias':
        return (
          <div className="tab-content">
            <h2>Notícias</h2>
            <p>{server.noticias}</p>
            <p>{server.eventoDescription}</p>
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
