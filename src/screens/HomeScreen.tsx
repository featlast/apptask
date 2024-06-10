import React from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type RootStackParamList = {
  ListsTask: undefined;
  NewTaks: undefined;
};
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <View style={styles.containerHomeScreen}>
      <View style={styles.containerButtons}>
        <Button title="Task" onPress={() => navigation.navigate('NewTaks')} />
        <View style={styles.spacer} />
        <Button title="List" onPress={() => navigation.navigate('ListsTask')} />
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  containerHomeScreen: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
  },
  containerButtons: {
    padding: 40,
  },
  spacer: {
    marginVertical: 5,
  },
});
