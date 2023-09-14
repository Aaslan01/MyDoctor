import {View, Text, Image} from 'react-native';
import React from 'react';
import Box from '../src/assets/svgs/Box';
import StyleGuide from '../constants/StyleGuide';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const DoctorAmenities = () => {
  function SmallContainer() {
    return (
      <View
        style={[
          StyleGuide.fdrac,
          StyleGuide.mt18,
          {
            width: wp(40),
          },
        ]}>
        <View
          style={{
            backgroundColor: '#5492FD30',
            height: 44,
            width: 44,
            borderRadius: 12,
          }}></View>
        <View style={[StyleGuide.flex1, StyleGuide.ml10]}>
          <Text
            style={[
              StyleGuide.regular12,
              {                
                fontWeight: '700',
              },
            ]}>
            WorkPlace
          </Text>
          <Text
            style={[
              StyleGuide.regular12,
              {
                color: StyleGuide.colors.text,
              },
            ]}>
            Yarmuk Hospital Baghdad iraq
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
      <View
        style={[
          StyleGuide.fdrac,
          StyleGuide.mt18,
          {
            width: wp(40),
          },
        ]}>
        <Image source={require('../src/assets/images/BoxBack.png')} />
        <View style={[StyleGuide.flex1, StyleGuide.ml10]}>
          <Text
            style={[
              StyleGuide.regular12,
              {
                fontWeight: '700',
              },
            ]}>
            WorkPlace
          </Text>
          <Text
            style={[
              StyleGuide.regular12,
              {
                color: StyleGuide.colors.text,
              },
            ]}>
            Yarmuk Hospital Baghdad iraq
          </Text>
        </View>
      </View>
      {SmallContainer()}
      {SmallContainer()}
    </View>
  );
};

export default DoctorAmenities;
