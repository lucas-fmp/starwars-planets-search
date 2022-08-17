import React from 'react';
import { DataContext } from '../providers/data';

function Table() {
  const { planets, name, filteredByNamePlanets } = React.useContext(DataContext);
  return (
    <table>
      <thead>
        <tr>
          {
            planets[0] && Object.keys(planets[0])
              .map((key) => <th key={ key }>{key}</th>)
          }
        </tr>
      </thead>
      <tbody>
        { name === '' ? (
          planets.map((planet) => (
            <tr key={ planet.name }>
              {
                Object.values(planet).map((value) => <td key={ value }>{value}</td>)
              }
            </tr>
          ))
        ) : (
          filteredByNamePlanets.map((plan) => (
            <tr key={ plan.name }>
              {
                Object.values(plan).map((value) => <td key={ value }>{value}</td>)
              }
            </tr>
          ))
        )}
      </tbody>
    </table>
  );
}

export default Table;
