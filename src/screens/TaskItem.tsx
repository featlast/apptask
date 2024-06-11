import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {openModal} from '../redux/features/modalSlice';
import {useDispatch} from 'react-redux';
import {AppDispatch} from '../redux/store';
import {
  captureIdTask,
  changeNewTask,
  deleteTask,
  openEdit,
  updateTask,
} from '../redux/features/textInputSlice';

interface TaskItemProps {
  text: string;
  index: number;
}
const TaskItem: React.FC<TaskItemProps> = ({text, index: id}) => {
  const dispatch = useDispatch<AppDispatch>();

  const handleOpenModal = () => {
    dispatch(openModal());
  };
  const handleDeleteTask = () => {
    dispatch(deleteTask(id));
  };

  const handleUpdateModal = () => {
    dispatch(openEdit());
    dispatch(captureIdTask(id.toString()));
    dispatch(updateTask({id, newValue: text}));
    dispatch(changeNewTask(text));
    handleOpenModal();
  };
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{text}</Text>
      <TouchableOpacity onPress={handleUpdateModal}>
        <Text>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDeleteTask}>
        <Text>Delete</Text>
      </TouchableOpacity>
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
function dispatch(arg0: any) {
  throw new Error('Function not implemented.');
}
