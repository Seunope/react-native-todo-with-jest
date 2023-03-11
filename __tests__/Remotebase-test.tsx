/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import {fireEvent, render} from '@testing-library/react-native';

it('renders correctly', () => {
  renderer.create(<App />);
});

it('Was all testId added', () => {
  const page = render(<App />);
  page.getByTestId('app-input');
  page.getByTestId('submit-button');
  page.getByTestId('records-body');
  page.getByTestId('amount');
});

it('Should get test id of list transaction', () => {
  const page = render(<App />);
  page.getByTestId('102,234.45');
  page.getByTestId('12,34.459');
});

it('Should enter search text', () => {
  const {getByTestId, getByText} = render(<App />);
  fireEvent.changeText(getByTestId('app-input'), '2019-11-25');
  getByText('2019-11-25');
});

it('Filter by date', () => {
  const {getByTestId} = render(<App />);

  fireEvent.changeText(getByTestId('app-input'), '2019-11-25');
  fireEvent.press(getByTestId('submit-button'));
  getByTestId('1,234.45');
});

it('Sort by amount', () => {
  const {getByTestId} = render(<App />);
  fireEvent.press(getByTestId('amount'));
});
