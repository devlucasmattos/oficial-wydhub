import PropTypes from "prop-types";
import { useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, servers, setFilteredServers }) => {
  useEffect(() => {
    // Filtra os servidores com base no termo de pesquisa
    if (searchTerm === "") {
      setFilteredServers(servers); // Se o termo estiver vazio, mostra todos os servidores
    } else {
      const filtered = servers.filter((server) =>
        server.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredServers(filtered); // Atualiza os servidores filtrados
    }
  }, [searchTerm, servers, setFilteredServers]); // A dependência é apenas searchTerm e servers

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar servidor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} // Atualiza o termo de pesquisa
      />
    </div>
  );
};

SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  servers: PropTypes.array.isRequired,
  setFilteredServers: PropTypes.func.isRequired,
};

export default SearchBar;
