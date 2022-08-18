import React, { useEffect } from 'react';
import AppContext from '../context/AppContext';

function Filters() {
  const {
    planets, setFilteredByNamePlanets, name,
    setName, columnFilter, setColumnFilter, comparisonFilter,
    valueFilter, setComparisonFilter, setValueFilter, setFilteredByColumn,
    filteredByColumn, columnFilterOptions, setColumnFilterOptions,
  } = React.useContext(AppContext);

  useEffect(() => {
    const filterByName = () => {
      const filteredPlanets = planets
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
      setFilteredByNamePlanets(filteredPlanets);
    };
    filterByName();
  }, [name]);

  const applyFilter = () => {
    const newColumnFilterOptions = columnFilterOptions
      .filter((option) => option !== columnFilter);
    setColumnFilterOptions(newColumnFilterOptions);
    if (!filteredByColumn) {
      if (comparisonFilter === 'maior que') {
        const filteredArray = planets
          .filter((planet) => planet[columnFilter] > parseInt(valueFilter, 10));
        setFilteredByColumn(filteredArray);
      }
      if (comparisonFilter === 'menor que') {
        const filteredArray = planets
          .filter((planet) => planet[columnFilter] < parseInt(valueFilter, 10));
        setFilteredByColumn(filteredArray);
      }
      if (comparisonFilter === 'igual a') {
        const filteredArray = planets
          .filter((planet) => planet[columnFilter] === valueFilter);
        setFilteredByColumn(filteredArray);
      }
      setColumnFilter(newColumnFilterOptions[0]);
    } else {
      if (comparisonFilter === 'maior que') {
        const filteredArray = filteredByColumn
          .filter((planet) => planet[columnFilter] > parseInt(valueFilter, 10));
        setFilteredByColumn(filteredArray);
      }
      if (comparisonFilter === 'menor que') {
        const filteredArray = filteredByColumn
          .filter((planet) => planet[columnFilter] < parseInt(valueFilter, 10));
        setFilteredByColumn(filteredArray);
      }
      if (comparisonFilter === 'igual a') {
        const filteredArray = filteredByColumn
          .filter((planet) => planet[columnFilter] === valueFilter);
        setFilteredByColumn(filteredArray);
      }
      setColumnFilter(newColumnFilterOptions[0]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
      />
      <select
        data-testid="column-filter"
        value={ columnFilter }
        onChange={ ({ target }) => setColumnFilter(target.value) }
      >
        {
          columnFilterOptions.map((column) => (
            <option value={ column } key={ column }>{column}</option>
          ))
        }
      </select>
      <select
        data-testid="comparison-filter"
        value={ comparisonFilter }
        onChange={ ({ target }) => setComparisonFilter(target.value) }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ valueFilter }
        onChange={ ({ target }) => setValueFilter(target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ applyFilter }
      >
        Filtrar
      </button>
    </div>
  );
}

export default Filters;
