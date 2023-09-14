import {View, Text, TouchableOpacity, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {Icons} from '../data';

interface IconClicksProps {
  item: Icons;
}

const IconClicks = (props: IconClicksProps) => {
  return (
    <TouchableOpacity style={{alignItems: 'center', width: '30%'}}>
      <Image
        style={{
          height: 90,
          width: 90,
          resizeMode: 'contain',
        }}
        source={props?.item?.image}
      />
      <Text style={[StyleGuide.regular14, StyleGuide.mv10]}>
        {props?.item?.name}
      </Text>
    </TouchableOpacity>
  );
};

export default IconClicks;
