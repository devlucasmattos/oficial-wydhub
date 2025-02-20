import PropTypes from "prop-types";
import { useEffect } from "react";
import "./FilterBar.css";

const FilterBar = ({ selectedRates, setSelectedRates, selectedDates, setSelectedDates, servers, setFilteredServers }) => {
  useEffect(() => {
    let filtered = [...servers];

    // Filtra por rate
    if (Array.isArray(selectedRates) && selectedRates.length > 0) {
      filtered = filtered.filter((server) => {
        // Verifica se a rate do servidor existe e se está incluída nos rates selecionados
        return selectedRates.includes(server.rate);
      });
    }

    // Filtra por date
    if (Array.isArray(selectedDates) && selectedDates.length > 0) {
      filtered = filtered.filter((server) => {
        // Verifica se a data do servidor existe e se está incluída nas datas selecionadas
        return selectedDates.includes(server.date);
      });
    }

    setFilteredServers(filtered); // Atualiza a lista de servidores filtrados
  }, [selectedRates, selectedDates, servers, setFilteredServers]);

  const handleRateChange = (e) => {
    const { value, checked } = e.target;
    setSelectedRates((prev) =>
      checked ? [...prev, value] : prev.filter((rate) => rate !== value)
    );
  };

  const handleDateChange = (e) => {
    const { value, checked } = e.target;
    setSelectedDates((prev) =>
      checked ? [...prev, value] : prev.filter((date) => date !== value)
    );
  };

  return (
    <div className="filter-bar">
      {/* Filtro de Rate */}
      <div className="filter-group">
        <h3>Taxa</h3>
        <label>
          <input
            type="checkbox"
            value="Easy/Easy"
            onChange={handleRateChange}
            checked={selectedRates.includes("Easy/Easy")}
          />
          Easy/Easy
        </label>
        <label>
          <input
            type="checkbox"
            value="Médio/Médio"
            onChange={handleRateChange}
            checked={selectedRates.includes("Médio/Médio")}
          />
          Médio/Médio
        </label>
        <label>
          <input
            type="checkbox"
            value="Hard/Hard"
            onChange={handleRateChange}
            checked={selectedRates.includes("Hard/Hard")}
          />
          Hard/Hard
        </label>
      </div>

      {/* Filtro de Date */}
      <div className="filter-group">
        <h3>Data</h3>
        <label>
          <input
            type="checkbox"
            value="01/01/2023"
            onChange={handleDateChange}
            checked={selectedDates.includes("01/01/2023")}
          />
          01/01/2023
        </label>
        <label>
          <input
            type="checkbox"
            value="15/03/2022"
            onChange={handleDateChange}
            checked={selectedDates.includes("15/03/2022")}
          />
          15/03/2022
        </label>
        <label>
          <input
            type="checkbox"
            value="10/08/2021"
            onChange={handleDateChange}
            checked={selectedDates.includes("10/08/2021")}
          />
          10/08/2021
        </label>
      </div>
    </div>
  );
};

FilterBar.propTypes = {
  selectedRates: PropTypes.array.isRequired,
  setSelectedRates: PropTypes.func.isRequired,
  selectedDates: PropTypes.array.isRequired,
  setSelectedDates: PropTypes.func.isRequired,
  servers: PropTypes.array.isRequired,
  setFilteredServers: PropTypes.func.isRequired,
};

export default FilterBar;
