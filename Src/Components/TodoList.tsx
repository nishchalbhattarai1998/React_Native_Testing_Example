import React from 'react';
import { TouchableOpacity, Text, StyleSheet,FlatList, View } from 'react-native';

const TodoItem = ({ item, onRemove }: { item: { key: string; text: string }; onRemove: (key: string) => void }) => {
  return (
    <View style={styles.item} testID="todo-item">
      <Text>{item.text}</Text>
      <TouchableOpacity
  style={styles.deleteButton}
  onPress={() => onRemove(item.key)}
  testID={`delete-button-${item.key}`}
    />

    </View>
  );
};

const TodoList = ({ todos, onRemove }: { todos: { key: string; text: string }[]; onRemove: (key: string) => void }) => {
  return (
    <FlatList
      data={todos}
      renderItem={({ item }) => <TodoItem item={item} onRemove={onRemove} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
  },
  deleteButton: {
    backgroundColor: '#ff6666',
    borderRadius: 5,
    padding: 5,
  },
  deleteButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TodoList;
