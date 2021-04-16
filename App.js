import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Router from './src/router';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from './src/redux/reducers';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(logger, thunk));

const store = createStore(reducer, enhancer);

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Router />
      </Provider>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
