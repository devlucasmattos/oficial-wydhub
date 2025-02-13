import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <img src="./images/imagem404.png" alt="Página não encontrada" className="not-found-image" />
      <h1 className="not-found-title">404 - Página não encontrada</h1>
      <p className="not-found-text">Procurando um drop específico? Não é por aqui.</p>
      <a href="/" className="not-found-link">
        Voltar para Home
      </a>
    </div>
  );
};

export default NotFound;
