import React from 'react';
import {Button, FlatList, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {openModal} from '../redux/features/modalSlice';
import Modal from '../components/ModalCustom';
import {TextInputState} from '../redux/features/textInputSlice';
import TaskItem from './TaskItem';

const NewTask = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector<RootState, boolean>(
    state => state.modal.isOpen,
  );
  const {tasks} = useSelector<RootState, TextInputState>(
    state => state.textInput,
  );

  const handleOpenModal = () => {
    dispatch(openModal());
  };

  return (
    <View style={styles.containerNewTask}>
      <View style={styles.containerButton}>
        <Button title="New Task" onPress={handleOpenModal} />
        {isModalOpen && <Modal />}
      </View>
      <View style={styles.containerFlatList}>
        <FlatList
          data={tasks}
          renderItem={({item}) => <TaskItem text={item} />}
          keyExtractor={(_item, index) => index.toString()}
          inverted={true}
        />
      </View>
    </View>
  );
};

export default NewTask;

const styles = StyleSheet.create({
  containerNewTask: {
    flex: 1,
  },
  containerButton: {
    alignContent: 'center',
    padding: 30,
  },
  containerFlatList: {
    width: '99%',
    alignSelf: 'center',
  },
});
