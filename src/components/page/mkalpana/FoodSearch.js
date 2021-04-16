import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import FoodList from './FoodList';

const FoodSearch = ({
  isLoading,
  selectRecipe,
  onInputChange,
  searchFood,
  food,
  day,
  meal,
  onClose,
  value,
}) => {
  return (
    <View>
      <View>
        <Text>
          Find meal for {day} {meal}
          {/* {isLoading ? (
            <Text>Loading.. </Text>
          ) : ( */}
          <View>
            <View>
              <TextInput
                value={value}
                placeholder="Search Foods"
                onChangeText={onInputChange}
              />
              <TouchableOpacity onPress={searchFood}>
                <Icon name="arrow-right" size={20} />
              </TouchableOpacity>
            </View>
            {food && (
              <FoodList
                food={food}
                onSelect={recipe => {
                  selectRecipe({recipe, dat, meal});
                  onClose();
                }}
              />
            )}
          </View>
          {/* )} */}
        </Text>
      </View>
    </View>
  );
};

export default FoodSearch;

const styles = StyleSheet.create({});
