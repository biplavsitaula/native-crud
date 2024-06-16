import TodoItems from "@/components/custom-components/todo-items";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

import { useState, useRef } from "react";

export default function HomeScreen() {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);
  const [edit, setEdit] = useState<number | null>(null);

  const scrollViewRef = useRef<ScrollView>(null);

  const handleAdd = () => {
    if (todo.trim()) {
      if (edit !== null) {
        const updatedTodos = todos.map((item, index) =>
          index === edit ? todo : item
        );
        setTodos(updatedTodos);
        setEdit(null);
      } else {
        setTodos([...todos, todo]);
      }
      setTimeout(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true });
      }, 10);
      setTodo("");
    }
  };
  const handleDelete = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const handleEdit = (index: number) => {
    setTodo(todos[index]);
    setEdit(index);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Todos</Text>
      <View style={styles.taskWrapper}>
        <ScrollView style={styles.list} ref={scrollViewRef}>
          {todos.map((todo, index) => (
            <TodoItems
              key={index}
              text={todo}
              onDelete={() => handleDelete(index)}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </ScrollView>
      </View>
      <View style={styles.inputText}>
        <TextInput
          style={styles.inputField}
          value={todo}
          onChangeText={(newTodo) => setTodo(newTodo)}
          placeholder="Add Todo."
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={handleAdd}>
          <Text style={styles.buttonText}>Add</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e8eaed",
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  taskWrapper: {
    paddingTop: 10,
    flex: 1,
    marginBottom: 48
  },
  heading: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
    paddingBottom: 18,
    paddingTop: 72
  },
  list: {
    flex: 1
  },
  inputText: {
    flexDirection: "row",
    gap: 10,
    textAlign: "center",
    marginTop: 18,
    position: 'absolute',
    bottom: 10,
    left: 10
  },
  inputField: {
    backgroundColor: "#fff",
    width: "80%",
    height: 48,
    borderRadius: 5,
    padding: 5,
  },
  buttonStyle: {
    backgroundColor: "#aaf",
    flexGrow: 1,
    width: "auto",
    height: 48,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
  },
});
