import React from 'react';
import {FlatList} from 'react-native';
import TodoItem from './TodoItem';

const TodoList = ({todos, onDelete}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={item => item.id.toString()}
      renderItem={({item}) => <TodoItem todo={item} onDelete={onDelete} />}
    />
  );
};

export default TodoList;
