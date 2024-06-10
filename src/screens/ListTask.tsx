import React from 'react';
import {ActivityIndicator, FlatList, StyleSheet, Text} from 'react-native';
import {useGetTaskQuery} from '../services/taskApi';
import ItemComponent from './ItemComponent';

const ListTask = () => {
  const {data, isLoading, error} = useGetTaskQuery();

  return (
    <>
      {isLoading && <ActivityIndicator size={'large'} color={'orange'} />}
      {error && <Text style={styles.textError}>No encuentra BD</Text>}
      <FlatList
        data={data}
        renderItem={({item}) => <ItemComponent name={item.name} />}
        keyExtractor={(item, _index) => item.id}
      />
    </>
  );
};

export default ListTask;

const styles = StyleSheet.create({
  textError: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 17,
    textAlign: 'center',
  },
});
