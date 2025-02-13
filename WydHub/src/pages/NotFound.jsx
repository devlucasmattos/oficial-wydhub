import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404 - Página não encontrada</h1>
      <p className="not-found-text">O caminho digitado não existe.</p>
      <a href="/" className="not-found-link">
        Voltar para Home
      </a>
    </div>
  );
};

export default NotFound;
