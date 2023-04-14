import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const AddTodo = ({ onAdd }: { onAdd: (text: string) => void }) => {
  const [text, setText] = useState('');

  const handleAddPress = () => {
    if (text.trim()) {
      onAdd(text.trim());
      setText('');
    }
  };

  return (
    <View>
      <TextInput
        style={{ borderBottomWidth: 1, padding: 8 }}
        placeholder="Add a new todo..."
        onChangeText={setText}
        value={text}
      />
      <Button title="Add" onPress={handleAddPress} />
    </View>
  );
};

export default AddTodo;
