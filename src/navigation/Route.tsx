/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useContext } from 'react';
import {
  StyleSheet,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from '../navigation/BottomTab';
import SearchScreen from '../screens/SearchScreen';
import DoctorDetails from '../screens/DoctorDetails';
const Stack = createNativeStackNavigator();
import {I18nManager} from 'react-native';
import {RtlProvider} from '../context/RtlContext';
import {RtlContext} from '../context/RtlContext';


function Route() {
  // @ts-ignore
  const {rtl, toggleFalse, toggleTrue} = useContext(RtlContext);
  // toggleTrue()
  // toggleFalse()
//   function forceLayout(rtl: boolean) {
    I18nManager.allowRTL(rtl);
    I18nManager.forceRTL(rtl);
    // RNRestart.restart()
//   }
//   forceLayout(rtl);
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

export default Route;
