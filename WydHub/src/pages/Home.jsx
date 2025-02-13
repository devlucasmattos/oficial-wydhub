import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ServerCard from "../components/ServerCard";
import servers from "../Data";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import "../pages/Home.css";

const Home = () => {
  const navigate = useNavigate();

  // Estados para pesquisa
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredServers, setFilteredServers] = useState(servers);

  return (
    <div className="container">
      <h5>Página em desenvolvimento</h5>
      <h1>WydHub</h1>
      <h2>Encontre o servidor ideal para você!</h2>

      {/* Barra de Pesquisa */}
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        servers={servers}
        setFilteredServers={setFilteredServers}
      />

      <button className="plans-button" onClick={() => navigate("/plans")}>
        📢 Divulgue seu Servidor
      </button>

      {/* Lista de Servidores Filtrados */}
      <div className="server-list">
        {filteredServers.map((server) => (
          <ServerCard key={server.id} server={server} />
        ))}
      </div>

      <Footer />
    </div>
  );
};

export default Home;
