import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function AppProvider({ children }) {
  const [planets, setPlanets] = useState([]);
  const [name, setName] = useState('');
  const [filteredByNamePlanets, setFilteredByNamePlanets] = useState([]);

  const values = {
    planets, setPlanets, name, setName, filteredByNamePlanets, setFilteredByNamePlanets,
  };

  return (
    <AppContext.Provider value={ values }>
      {children}
    </AppContext.Provider>
  );
}

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProvider;
