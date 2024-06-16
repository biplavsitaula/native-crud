import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from "react-native";
interface TodoItemsProps {
  text: string;
  onDelete: () => void;
  onEdit: () => void;
}

const TodoItems: React.FC<TodoItemsProps> = ({ text, onDelete, onEdit }) => {
  return (
    <View style={styles.item}>
      <View style={styles.itemLeft}>
        <View style={styles.square}></View>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.circle} onPress={onDelete}>
          <Text style={{color: 'red'}}>Del</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onEdit}>
          <Text style={{color: '#0af'}}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 4,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: '100%'
  },
  itemLeft: {
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 10,
  },
  right: {
    flexDirection: "row",
    gap: 12,
  },
  square: {
    width: 12,
    height: 12,
    backgroundColor: "#f9c0c0",
    borderRadius: 4,
    opacity: 0.4,
  },
  text: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  circle: {
    alignItems: "flex-end",
  },
});
export default TodoItems;
