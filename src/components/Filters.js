import React, { useEffect } from 'react';
import { DataContext } from '../providers/data';

function Filters() {
  const {
    planets, setFilteredByNamePlanets, name, setName,
  } = React.useContext(DataContext);

  useEffect(() => {
    const filterByName = () => {
      const filteredPlanets = planets
        .filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase()));
      setFilteredByNamePlanets(filteredPlanets);
    };
    filterByName();
  }, [name]);

  return (
    <div>
      <input
        type="text"
        value={ name }
        onChange={ ({ target }) => setName(target.value) }
        data-testid="name-filter"
      />
    </div>
  );
}

export default Filters;
