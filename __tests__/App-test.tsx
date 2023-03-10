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
  page.getByTestId('wrapper-id');
  page.getByTestId('input-id');
  page.getByTestId('add-button-id');
  page.getByTestId('remove-button-id');
});

it('Are text entered as described', () => {
  const page = render(<App />);
  page.getByText('Add');
  page.getByText('Remove All');
});

it('Was todo added on button press', () => {
  const {getByTestId, getAllByText, debug} = render(<App />);

  fireEvent.changeText(getByTestId('input-id'), 'Go to super market by 7pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Cook by 8pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Eat by 9pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Wash plates  by 9:40pm');
  fireEvent.press(getByTestId('add-button-id'));

  // getByTestId('input-id').
  // expect(queryAllByText
  getAllByText('Go to super market by 7pm');
  getAllByText('Cook by 8pm');

  // debug();
});

it('Todo testID should be found', () => {
  const {getByTestId, queryByTestId} = render(<App />);

  fireEvent.changeText(getByTestId('input-id'), 'Go to super market by 7pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Cook by 8pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Eat by 9pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Wash plates  by 9:40pm');
  fireEvent.press(getByTestId('add-button-id'));

  fireEvent.press(getByTestId('remove-button-id'));

  expect(queryByTestId('Cook by 8pm')).toBeNull();
});

it('should remove a todo', () => {
  const {getByTestId} = render(<App />);

  fireEvent.changeText(getByTestId('input-id'), 'Go to super market by 7pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Cook by 8pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Eat by 9pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Wash plates  by 9:40pm');
  fireEvent.press(getByTestId('add-button-id'));

  const formattedValue = 'Wash plates  by 9:40pm ';
  const listTestId = 'todo-' + formattedValue.trim().replace(/\s/g, '-');
  getByTestId(listTestId);
});

it('should remove a todo', () => {
  const {getByTestId, queryByTestId} = render(<App />);

  fireEvent.changeText(getByTestId('input-id'), 'Go to super market by 7pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Cook by 8pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Eat by 9pm');
  fireEvent.press(getByTestId('add-button-id'));
  fireEvent.changeText(getByTestId('input-id'), 'Wash plates  by 9:40pm');
  fireEvent.press(getByTestId('add-button-id'));

  const formattedValue = 'Wash plates  by 9:40pm ';
  const listTestId = 'todo-' + formattedValue.trim().replace(/\s/g, '-');
  getByTestId(listTestId);
  fireEvent.press(getByTestId(listTestId));
  expect(queryByTestId(listTestId)).toBeNull();
});
