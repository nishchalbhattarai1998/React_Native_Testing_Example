import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
// import AddTodo from './../Components/TodoItem';
import TodoList from './../Components/TodoList';

describe('TodoList', () => {
  
  
  it('should render todos and call onRemove when delete button is pressed', () => {
    const onRemove = jest.fn();
    const todos = [    { key: '1', text: 'Todo 1' },    { key: '2', text: 'Todo 2' },    { key: '3', text: 'Todo 3' },  ];
    const { getByText, getAllByTestId, getByTestId } = render(
      <TodoList todos={todos} onRemove={onRemove} />,
    );
    const todoItems = getAllByTestId('todo-item');
  
    expect(todoItems.length).toBe(3);
    expect(getByText('Todo 1')).toBeTruthy();
    expect(getByText('Todo 2')).toBeTruthy();
    expect(getByText('Todo 3')).toBeTruthy();
  
    fireEvent.press(getByTestId('delete-button-2')); // Simulate button press on "Todo 2" item
  
    expect(onRemove).toHaveBeenCalledWith('2');
  });
  

});

