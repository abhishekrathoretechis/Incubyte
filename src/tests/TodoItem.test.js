import {render, fireEvent} from '@testing-library/react-native';
import TodoItem from '../components/TodoItem';

test('renders a single todo item', () => {
  const todo = {id: 1, text: 'Learn React Native'};
  const {getByText} = render(<TodoItem todo={todo} onDelete={() => {}} />);

  expect(getByText('Learn React Native')).toBeTruthy();
});

test('calls onDelete when delete button is clicked', () => {
  const todo = {id: 1, text: 'Learn React Native'};
  const onDelete = jest.fn();
  const {getByText} = render(<TodoItem todo={todo} onDelete={onDelete} />);

  fireEvent.press(getByText('Delete'));
  expect(onDelete).toHaveBeenCalledWith(1);
});
