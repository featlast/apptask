import React from 'react';
import {
  Text,
  View,
  Animated,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../redux/store';
import {closeModal} from '../redux/features/modalSlice';
import {
  TextInputState,
  addTask,
  changeNewTask,
} from '../redux/features/textInputSlice';
import useModalAnimation from './useModalAnimation';

const ModalCustom = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isModalOpen = useSelector<RootState, boolean>(
    state => state.modal.isOpen,
  );
  const scaleValue = useModalAnimation(isModalOpen);
  const {newTask} = useSelector<RootState, TextInputState>(
    state => state.textInput,
  );

  const handleCloseModal = () => {
    dispatch(closeModal());
  };
  const handleChangeText = (text: string) => {
    dispatch(changeNewTask(text));
  };
  const handleAddText = () => {
    if (newTask.trim() !== '') {
      dispatch(addTask(newTask));
    }
  };
  const handleAddTextAndCloseModal = () => {
    handleAddText();
    handleCloseModal();
  };

  return (
    <Modal
      transparent
      visible={isModalOpen}
      animationType="fade"
      hardwareAccelerated>
      <View style={styles.containerModalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          <View style={styles.containerHeader}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={handleCloseModal}>
              <Text>close</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.containerInputs}>
            <TextInput
              placeholder="New Task Name"
              keyboardType="default"
              style={styles.input}
              onChangeText={text => handleChangeText(text)}
            />
            <View style={styles.containerButton}>
              <Button
                title="Add"
                onPress={handleAddTextAndCloseModal}
                disabled={newTask.trim() === ''}
              />
            </View>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalCustom;

const styles = StyleSheet.create({
  containerModalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 30,
    elevation: 20,
  },
  containerHeader: {
    alignItems: 'center',
  },
  header: {
    width: '100%',
    height: 40,
    alignItems: 'flex-end',
    justifyContent: 'space-around',
    position: 'absolute',
    marginTop: -25,
    flexDirection: 'row',
  },
  title: {
    fontSize: 17,
    color: 'black',
    paddingBottom: 5,
  },
  touchable: {
    position: 'absolute',
    right: 0,
  },
  containerInputs: {
    alignItems: 'center',
    marginTop: 30,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1.5,
    width: '99%',
    height: 50,
    marginBottom: 5,
    borderRadius: 5,
  },
  containerButton: {width: '99%'},
});
