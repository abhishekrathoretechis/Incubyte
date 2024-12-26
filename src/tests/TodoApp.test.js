import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TodoApp from '../components/TodoApp';

test('deletes a to-do item', () => {
  const {getByPlaceholderText, getByText, queryByText} = render(<TodoApp />);

  const input = getByPlaceholderText('Add a to-do');
  fireEvent.changeText(input, 'Learn React Native');
  const addButton = getByText('Add');
  fireEvent.press(addButton);

  expect(getByText('Learn React Native')).toBeTruthy();

  const deleteButton = getByText('X');
  fireEvent.press(deleteButton);

  expect(queryByText('Learn React Native')).toBeNull();
});
