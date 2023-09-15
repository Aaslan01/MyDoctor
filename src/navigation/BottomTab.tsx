import {View, Text, Platform, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import Connections from '../screens/Connections';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StyleGuide from '../../constants/StyleGuide';
import HomeSVG from '../assets/svgs/HomeSVG';
import ConnectionSVG from '../assets/svgs/ConnectionSVG';
import AddCircleSVG from '../assets/svgs/AddCircleSVG';
import SearchSVG from '../assets/svgs/SearchSVG';
import Paper from '../assets/svgs/Paper';
import NotificationSVG from '../assets/svgs/NotificationSVG';
const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {backgroundColor: StyleGuide.colors.background, height: hp(8)},
          Platform.OS === 'ios' && {paddingTop: 15, height: hp(9)},
        ],
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={StyleGuide.center}>
                {focused ? (
                  <HomeSVG />
                ) : (
                  <HomeSVG stroke={'#B8BEC6'} />
                )}
                <Text
                  style={[
                    StyleGuide.bottomNavText,
                    focused && {
                      fontWeight: '600',
                      fontSize: 12,
                      color: '#5492FD',
                    },
                  ]}>
                  Home
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={StyleGuide.center}>
                {focused ? <SearchSVG /> : <SearchSVG fill={'#B8BEC6'} />}
                <Text
                  style={[
                    StyleGuide.bottomNavText,
                    focused && {
                      fontWeight: '600',
                      fontSize: 12,
                      color: '#5492FD',
                    },
                  ]}>
                  Search
                </Text>
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
