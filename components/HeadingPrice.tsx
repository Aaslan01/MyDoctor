import {View, Text} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';

interface HeadingPriceProps {
  heading: string;
  price: number;
}
const HeadingPrice = (props: HeadingPriceProps) => {
  return (
    <View>
      <Text style={StyleGuide.regular12}>{props?.heading}</Text>
      <Text style={StyleGuide.regular12}>{props?.price}</Text>
    </View>
  );
};

export default HeadingPrice;
