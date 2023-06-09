import React, { useEffect } from 'react';
import './App.css';
import Filters from './components/Filters';
import Table from './components/Table';
import AppContext from './context/AppContext';

function App() {
  const { setPlanets, setFilteredByNamePlanets } = React.useContext(AppContext);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      results.forEach((result) => {
        delete result.residents;
      });
      setPlanets(results);
      setFilteredByNamePlanets(results);
    };
    getPlanets();
  }, []);

  return (
    <>
      <Filters />
      <Table />
    </>
  );
}

export default App;
