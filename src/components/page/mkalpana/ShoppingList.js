import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Unorderedlist from 'react-native-unordered-list';
const ShoppingList = ({list}) => {
  return (
    <View style={styles.ingredientList}>
      <Text>Your Shopping List</Text>
      <Unorderedlist>
        {list.map(item => (
          <Unorderedlist key={item}>{item}</Unorderedlist>
        ))}
      </Unorderedlist>
      {(!list || list.length === 0) && <Text>No meal found</Text>}
    </View>
  );
};

export default ShoppingList;

const styles = StyleSheet.create({});
