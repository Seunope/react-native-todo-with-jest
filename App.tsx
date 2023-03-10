import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Switch,
  FlatList,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

interface ToDoProps {
  id: number;
  title: string | undefined;
}

export default function TodoApp() {
  const [title, setTitle] = useState<string>();
  const [isEnabled, setIsEnabled] = useState<boolean>(false);
  const [toDoData, setToDoData] = useState<ToDoProps[]>([]);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const addTodo = () => {
    const data = [...toDoData];
    const newData = {
      title,
      id: toDoData.length + 1,
    };
    title ? data.push(newData) : null;
    setToDoData(data);
    setTitle('');
  };

  const toDoItems = (item: ToDoProps, index: number) => {
    const formattedValue = item.title?.trim();
    const listTestId = 'todo-' + formattedValue?.replace(/\s/g, '-');

    return (
      <TouchableOpacity
        style={styles.item}
        testID={listTestId}
        onPress={() => onPressItem(index)}>
        <Text style={styles.title}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  const onPressItem = (index: number) => {
    const data = [...toDoData];
    for (let i = 0; i < toDoData.length; i++) {
      if (i === index) {
        data.splice(i, 1);
        break;
      }
    }
    setToDoData(data);
  };

  return (
    <View
      testID="wrapper-id"
      style={{backgroundColor: isEnabled ? '#888' : '#fff'}}>
      <Switch
        trackColor={{false: '#767577', true: '#81b0ff'}}
        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
      <TextInput
        testID="input-id"
        placeholder="Enter Todo Tile"
        style={styles.input}
        onChangeText={text => setTitle(text)}
        value={title}
      />

      <Button
        title="Add"
        color="#841584"
        testID="add-button-id"
        onPress={addTodo}
        disabled={title && title === '' ? true : false}
      />

      {toDoData.length !== 0 ? (
        <FlatList
          data={toDoData}
          showsVerticalScrollIndicator={false}
          renderItem={({item, index}) => toDoItems(item, index)}
          keyExtractor={item => item.id.toString()}
        />
      ) : null}

      <Button
        title="Remove All"
        color="#841584"
        testID="remove-button-id"
        onPress={() => setToDoData([])}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
  },
});
