import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';

const FoodList = ({food, onSelect}) => {
  function trim(str) {
    return str.length > 16 ? str.slice(0, 16) + '...' : str;
  }
  if (food.length === 0) {
    return <Text>Your result 0</Text>;
  }
  return (
    <Unorderedlist>
      {food.map(item => (
        <Unorderedlist onPress={() => onSelect(item)}>
          <Text>{trim(item.label)}</Text>
          <Image source={{uri: item.image}} />
          <Text>{Math.floor(item.calories)} Calories</Text>
          <View>{item.source}</View>
        </Unorderedlist>
      ))}
    </Unorderedlist>
  );
};

export default FoodList;

const styles = StyleSheet.create({});
