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
  const [filteredServers, setFilteredServers] = useState(
    [...servers].sort((a, b) => b.highlight - a.highlight) // Ordenando os destaques primeiro
  );
  const handleClick = () => {
    window.location.hash = `#/plans`;
    window.location.reload(); 
  };
  return (
    <div className="container">
      <h5>Página em desenvolvimento</h5>
      <h1>WydHub</h1>
      <h2>Encontre o servidor ideal para você!</h2>

     
      <SearchBar
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        servers={servers}
        setFilteredServers={(filtered) =>
          setFilteredServers([...filtered].sort((a, b) => b.highlight - a.highlight))
        }
      />

<button className="plans-button" onClick={handleClick}>
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
