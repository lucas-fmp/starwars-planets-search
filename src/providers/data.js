import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filteredByNamePlanets, setFilteredByNamePlanets] = useState([]);

  const values = {
    planets, setPlanets, name, setName, filteredByNamePlanets, setFilteredByNamePlanets,
  };

  return (
    <DataContext.Provider value={ values }>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
