import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

interface TaskItemProps {
  text: string;
}
const TaskItem: React.FC<TaskItemProps> = ({text}) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    padding: 10,
    marginVertical: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'flex-start',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default TaskItem;
