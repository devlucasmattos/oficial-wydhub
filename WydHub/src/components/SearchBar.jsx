import PropTypes from "prop-types";
import { useEffect } from "react";
import "./SearchBar.css";

const SearchBar = ({ searchTerm, setSearchTerm, servers, setFilteredServers }) => {
  useEffect(() => {
    const filtered = servers.filter((server) =>
      server.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredServers(filtered);
  }, [searchTerm, servers, setFilteredServers]);

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Pesquisar servidor..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

// Definição das PropTypes
SearchBar.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  setSearchTerm: PropTypes.func.isRequired,
  servers: PropTypes.array.isRequired,
  setFilteredServers: PropTypes.func.isRequired,
};

export default SearchBar;
