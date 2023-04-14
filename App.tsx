import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, StatusBar } from 'react-native';
import TodoList from './../lab04/Src/Components/TodoList';
import AddTodo from './Src/Components/TodoItem';

const App = () => {

  type TodoItem = {
    key: string;
    text: string;
  };
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const handleAddTodo = (text: string) => {
    const newTodo = { key: Math.random().toString(), text };
    setTodos([newTodo, ...todos]);
  };

  const handleRemoveTodo = (key: string) => {
    setTodos(todos.filter((todo) => todo.key !== key));
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
        <AddTodo onAdd={handleAddTodo} />
        <TodoList todos={todos} onRemove={handleRemoveTodo} />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingTop: 16,
  },
});

export default App;
