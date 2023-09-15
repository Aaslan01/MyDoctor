/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './src/navigation/BottomTab';
import SearchScreen from './src/screens/SearchScreen';
import DoctorDetails from './src/screens/DoctorDetails';
const Stack = createNativeStackNavigator();
import { I18nManager } from 'react-native';
const App = () => {

  function forceLayout(rtl: boolean) {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    // RNRestart.restart();
  }
  forceLayout(true)
  return (
    <NavigationContainer>
      {
        <Stack.Navigator initialRouteName="BottomTab">
          <Stack.Screen
            name="BottomTab"
            component={BottomTab}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="DoctorDetails"
            component={DoctorDetails}
            options={{header: () => null}}
          />
          <Stack.Screen
            name="SearchScreen"
            component={SearchScreen}
            options={{header: () => null}}
          />
          {/* 
            <Stack.Screen
              name="SignIn"
              component={SignIn}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="SignUp"
              component={SignUp}
              options={{header: () => null}}
            />
            <Stack.Screen
              name="AddLinks"
              component={AddLinks}
              options={{header: () => null}}
            /> */}
        </Stack.Navigator>
      }
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
