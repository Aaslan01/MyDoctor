/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();
import {RtlProvider} from './src/context/RtlContext';
import Route from './src/navigation/Route';

const App = () => {
  return (
    <RtlProvider>
      <Route/>
    </RtlProvider>
  );
};

export default App;
