import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';

const TodoItem = ({todo, onDelete}) => {
  return (
    <View style={styles.item}>
      <Text style={styles.text}>{todo.text}</Text>
      <Button title="Delete" onPress={() => onDelete(todo.id)} />
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  text: {
    fontSize: 16,
    color: 'black',
  },
});

export default TodoItem;
