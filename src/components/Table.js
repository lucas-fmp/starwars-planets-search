import React from 'react';
import AppContext from '../context/AppContext';

function Table() {
  const { planets, filteredByNamePlanets } = React.useContext(AppContext);
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
        {
          filteredByNamePlanets.map((plan) => (
            <tr key={ plan.name }>
              {
                Object.values(plan).map((value) => <td key={ value }>{value}</td>)
              }
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
