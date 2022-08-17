import PropTypes from 'prop-types';
import React, { useState } from 'react';

export const DataContext = React.createContext();

export const DataProvider = ({ children }) => {
  const [planets, setPlanets] = useState([]);

  return (
    <DataContext.Provider value={ { planets, setPlanets } }>
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
