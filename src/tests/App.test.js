import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import AppProvider from '../context/AppProvider';
import userEvent from '@testing-library/user-event';

describe('The App component', () => {
  it('should contain all the filter fields', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const inputTextFilter = screen.getByTestId('name-filter');
    expect(inputTextFilter).toBeInTheDocument();
  });

  it('should contain a table', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const nameField = await screen.findByRole('columnheader', {
      name: /name/i
    });
    expect(nameField).toBeInTheDocument();
  });

  it('should filter correctly', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    const columnFilter = screen.getByTestId('column-filter');
    userEvent.selectOptions(columnFilter, screen.getByText('diameter'));

    const comparisonFilter = screen.getByTestId('comparison-filter');
    userEvent.selectOptions(comparisonFilter, screen.getByText('igual a'));

    const numberFilter = screen.getByTestId('value-filter');
    userEvent.type(numberFilter, 10000000000);

    const filterBtn = screen.getByTestId('button-filter');
    userEvent.click(filterBtn);
    userEvent.click(filterBtn);
  });
});
