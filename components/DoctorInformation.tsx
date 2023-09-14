import {View, Text, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';

interface DoctorInformationProps {}

const DoctorInformation = () => {
  return (
    <View style={[StyleGuide.fdr]}>
      <Image
        style={{
          height: 80,
          width: 80,
        }}
        source={require('../src/assets/images/Doctor.png')}
      />
      <View style={[StyleGuide.ml10, StyleGuide.mt2]}>
        <Text
          style={[
            StyleGuide.semiBold16,
            StyleGuide.mt2,
            {color: StyleGuide.colors.text, fontWeight: '600'},
          ]}>
          Dr. Yaser Qurban
        </Text>
        <Text
          style={[StyleGuide.semiBold14, StyleGuide.mt2, {fontWeight: '600'}]}>
          General Medicine
        </Text>
        <Text
          style={[
            StyleGuide.semiBold12,
            StyleGuide.mt2,
            {color: StyleGuide.colors.lightText, fontWeight: '500'},
          ]}>
          2 Reviews
        </Text>
        <View style={[StyleGuide.fdrac, StyleGuide.mt2]}>
          <Image
            style={{resizeMode: 'contain'}}
            source={require('../src/assets/images/iraq.png')}
          />
          <Text
            style={[
              StyleGuide.semiBold12,
              {color: StyleGuide.colors.lightText},
            ]}>
            Iraq
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorInformation;
