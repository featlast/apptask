import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

interface ItemProps {
  name: string;
}

const ItemComponent: React.FC<ItemProps> = ({name}) => {
  const defaultImageSource = require('../assets/profile.png');

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={defaultImageSource} style={styles.image} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: '99%',
    height: 80,
    marginVertical: 5,
  },
  imageContainer: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'semibold',
  },
});

export default ItemComponent;
