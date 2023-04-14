
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import AddTodo from './../Components/TodoItem';
// import TodoList from './TodoList';

describe('AddTodo', () => {
  it('should call onAdd with trimmed text when Add button is pressed', () => {
    const onAdd = jest.fn();
    const { getByPlaceholderText, getByText } = render(<AddTodo onAdd={onAdd} />);
    const input = getByPlaceholderText('Add a new todo...');
    const addBtn = getByText('Add');

    fireEvent.changeText(input, '  New Todo  ');
    fireEvent.press(addBtn);

    expect(onAdd).toHaveBeenCalledWith('New Todo');
  });

  it('should not call onAdd when Add button is pressed with empty text', () => {
    const onAdd = jest.fn();
    const { getByText } = render(<AddTodo onAdd={onAdd} />);
    const addBtn = getByText('Add');

    fireEvent.press(addBtn);

    expect(onAdd).not.toHaveBeenCalled();
  });
});