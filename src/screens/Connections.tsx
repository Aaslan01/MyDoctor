import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import FullButton from '../../components/FullButton';
import TickSVG from '../assets/svgs/TickSVG';
import CircleTickBox from '../components/CircleTickBox';

const Connections = (props: any) => {
  return (
    <SafeAreaView style={StyleGuide.fullBackground}>
      <Header title={'ContactMe'} />
      <View style={[StyleGuide.flex1, StyleGuide.center]}>
        <Text style={[StyleGuide.secondHeaderText, {alignSelf: 'center'}]}>
          Hi, Welcome Back! 👋
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Connections;
