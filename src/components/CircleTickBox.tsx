import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import TickSVG from '../assets/svgs/TickSVG';

interface CircleTickBoxProps {
  bottom?: number;
  right?: number;
}

const CircleTickBox = ({bottom, right}: CircleTickBoxProps) => {
  return (
    <TouchableOpacity
      style={[
        StyleGuide.center,
        {
          width: wp(10),
          height: wp(10),
          backgroundColor: '#FFF',
          borderRadius: 20,
          position: 'absolute',
          bottom: bottom??-wp(3.4),
          right: right??-wp(3.4),
        },
      ]}>
      <TickSVG />
    </TouchableOpacity>
  );
};

export default CircleTickBox;
