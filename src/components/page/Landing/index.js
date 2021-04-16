import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View>
      <View>
        <Text>Custom Meal Planning made easy</Text>
      </View>
      <View>
        <Text>Does this sound Like you?</Text>
      </View>
      <View>
        <Text>
          Wasted a lot of time thinking about what I should make for dinner
          today
        </Text>
        <Text>Want to watch what I eat but don't know how?</Text>
        <Text>Not good at pre-planning meals</Text>
        <Text>Want to track my weight and calorie intake</Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Survey')}
          style={styles.btn}>
          <Text>FInd that meal plan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Landing;

const styles = StyleSheet.create({
  btn: {
    padding: 20,
    backgroundColor: '#009688',
  },
});
