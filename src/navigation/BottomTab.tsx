import {View, Text, Platform} from 'react-native';
import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import SearchScreen from '../screens/SearchScreen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StyleGuide from '../../constants/StyleGuide';
import HomeSVG from '../assets/svgs/HomeSVG';
import SearchSVG from '../assets/svgs/SearchSVG';
const Tab = createBottomTabNavigator();
import {RtlContext} from '../context/RtlContext';
import Notifications from '../screens/Notifications';
import NotificationSVG from '../assets/svgs/NotificationSVG';
import More from '../screens/More';
import MoreSVG from '../assets/svgs/MoreSVG';
import Consultations from '../screens/Consultations';
import Paper from '../assets/svgs/Paper';

const BottomTab = () => {
  // @ts-ignore
  const {rtl, toggleFalse, toggleTrue} = useContext(RtlContext);

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: [
          {
            backgroundColor: StyleGuide.colors.background,
            height: hp(8),
            direction: 'rtl',
          },
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
                {focused ? <HomeSVG /> : <HomeSVG stroke={'#B8BEC6'} />}
                <Text
                  style={[
                    StyleGuide.bottomNavText,
                    focused && {
                      fontWeight: '600',
                      fontSize: 12,
                      color: '#5492FD',
                    },
                  ]}>
                  {rtl ? 'الرئيسية' : 'Home'}
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
                  {rtl ? 'بحث' : 'Search'}
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Consultations"
        component={Consultations}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={StyleGuide.center}>
                {focused ? <Paper /> : <Paper fill={'#B8BEC6'} />}
                <Text
                  style={[
                    StyleGuide.bottomNavText,
                    focused && {
                      fontWeight: '600',
                      fontSize: 12,
                      color: '#5492FD',
                    },
                  ]}>
                  {rtl ? 'بحث' : 'Search'}
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="Notifications"
        component={Notifications}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={StyleGuide.center}>
                {focused ? <NotificationSVG /> : <NotificationSVG fill={'#B8BEC6'} />}
                <Text
                  style={[
                    StyleGuide.bottomNavText,
                    focused && {
                      fontWeight: '600',
                      fontSize: 12,
                      color: '#5492FD',
                    },
                  ]}>
                  {rtl ? 'الاشعارات' : 'Notifications'}
                </Text>
              </View>
            );
          },
        })}
      />
      <Tab.Screen
        name="More"
        component={More}
        options={() => ({
          tabBarIcon: ({focused, size}) => {
            return (
              <View style={StyleGuide.center}>
                {focused ? <MoreSVG /> : <MoreSVG fill={'#B8BEC6'} />}
                <Text
                  style={[
                    StyleGuide.bottomNavText,
                    focused && {
                      fontWeight: '600',
                      fontSize: 12,
                      color: '#5492FD',
                    },
                  ]}>
                  {rtl ? 'المزيد' : 'More'}
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
