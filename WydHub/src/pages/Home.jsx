import { useNavigate } from "react-router-dom";
import ServerCard from "../components/ServerCard";
import servers from "../Data";
import Footer from "../components/Footer";
import "../pages/Home.css"; 

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h5>Página em desenvolvimento</h5>
      <h1>WydHub</h1>
      <h2>Encontre o servidor ideal para você!</h2>

      
      <button className="plans-button" onClick={() => navigate("/plans")}>
        📢 Divulgue seu Servidor
      </button>

      <div className="server-list">
         {servers
        .filter((server) => server.id)
       .map((server) => (
       <ServerCard key={server.id} server={server} />
        ))}

      </div>

      <Footer />
    </div>
  );
};

export default Home;
