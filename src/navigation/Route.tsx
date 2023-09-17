/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useContext, useEffect, useState} from 'react';
import {I18nManager, StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../navigation/BottomTab';
import SearchScreen from '../screens/SearchScreen';
import DoctorDetails from '../screens/DoctorDetails';
import {RtlContext} from '../context/RtlContext';
const Stack = createNativeStackNavigator();

function Route() {
  // @ts-ignore
  const {toggleFalse, toggleTrue} = useContext(RtlContext);

  useEffect(() => {
    I18nManager?.isRTL ? toggleTrue() : toggleFalse();
  }, [I18nManager?.isRTL]);

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
}

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

export default Route;
