import React, { useEffect } from 'react';
import './App.css';
import Table from './components/Table';
import { DataContext } from './providers/data';

function App() {
  const { setPlanets } = React.useContext(DataContext);

  useEffect(() => {
    const getPlanets = async () => {
      const { results } = await fetch('https://swapi-trybe.herokuapp.com/api/planets/').then((response) => response.json());
      results.forEach((result) => {
        delete result.residents;
      });
      setPlanets(results);
    };
    getPlanets();
  }, []);

  return (
    <Table />
  );
}

export default App;
