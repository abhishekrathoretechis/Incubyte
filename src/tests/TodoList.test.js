import {render} from '@testing-library/react-native';
import TodoList from '../components/TodoList';

test('renders a list of todos', () => {
  const todos = [{id: 1, text: 'Learn React Native'}];
  const {getByText} = render(<TodoList todos={todos} onDelete={() => {}} />);

  expect(getByText('Learn React Native')).toBeTruthy();
});
