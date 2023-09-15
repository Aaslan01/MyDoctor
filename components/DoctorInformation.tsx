import {View, Text, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';
import ColorStatus from '../src/assets/svgs/ColorStatus';

interface DoctorInformationProps {}

const DoctorInformation = () => {
  return (
    <View style={[StyleGuide.fdr]}>
      <View
        style={{
          height: 80,
          width: 80,
        }}>
        <Image
          style={{
            height: 80,
            width: 80,
            resizeMode: 'contain',
          }}
          source={require('../src/assets/images/Doctor.png')}
        />
        <View
          style={{
            position: 'absolute',
            right: -5,
            top: -5,
          }}>
          <ColorStatus />
        </View>
      </View>
      <View style={[StyleGuide.ml10, StyleGuide.mt2]}>
        <Text
          style={[
            StyleGuide.semiBold16,
            StyleGuide.mt2,
            {color: StyleGuide.colors.text, fontWeight: '600'},
          ]}>
          {/* Dr. Yaser Qurban */}د. ياسر يعقوب
        </Text>
        <Text
          style={[
            StyleGuide.semiBold14,
            StyleGuide.mt2,
            {fontWeight: '600', textAlign: 'left'},
          ]}>
          طب عام
        </Text>
        <Text
          style={[
            StyleGuide.semiBold12,
            StyleGuide.mt2,
            {
              color: StyleGuide.colors.lightText,
              fontWeight: '500',
              textAlign: 'left',
            },
          ]}>
          3 تقييمات
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
            {' '}
            العراق
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorInformation;
