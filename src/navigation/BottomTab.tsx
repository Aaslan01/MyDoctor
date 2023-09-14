import {View, Text, Platform, Image} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import AddLinks from '../screens/AddLinks';
import Connections from '../screens/Connections';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StyleGuide from '../../constants/StyleGuide';
import HomeSVG from '../assets/svgs/HomeSVG';
import ConnectionSVG from '../assets/svgs/ConnectionSVG';
import AddCircleSVG from '../assets/svgs/AddCircleSVG';
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
                {focused ? <HomeSVG /> : <HomeSVG box={'white'} plus={'#1B1B1B'} />}
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="AddLinks"
        component={AddLinks}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
                <View style={StyleGuide.center}>
                {focused ? (
                  <AddCircleSVG />
                ) : (
                  <AddCircleSVG  fill={'#1B1B1B'} />
                )}
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Connections"
        component={Connections}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={StyleGuide.center}>
                {focused ? (
                  <ConnectionSVG />
                ) : (
                  <ConnectionSVG background={'white'} />
                )}
              </View>
            );
          },
        })}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
