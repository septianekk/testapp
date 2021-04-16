import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from '../components/page/Landing';
import Plan from '../components/page/Plan';
import Survey from '../components/page/Survey';
import Home from '../components/page/Home';
import HomeTest from '../components/page/Home1';

const Stack = createStackNavigator();

const Router = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="HomeTest" component={HomeTest} /> */}

      {/* <Stack.Screen name="Home" component={Home} /> */}

      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Plan" component={Plan} />
      <Stack.Screen name="Survey" component={Survey} />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
