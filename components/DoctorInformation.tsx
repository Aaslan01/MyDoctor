import {View, Text, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';
import ColorStatus from '../src/assets/svgs/ColorStatus';

interface DoctorInformationProps {}

const DoctorInformation = ({rtl}: any) => {
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
      <View style={[StyleGuide.ml10]}>
        <Text
          style={[
            StyleGuide.semiBold16,
            // StyleGuide.mt2,
            {
              color: StyleGuide.colors.text,
              fontWeight: '600',
            },
            rtl && {fontFamily: 'Tajawal-Regular'},
          ]}>
          {rtl ? 'د. ياسر يعقوب' : 'Dr. Yaser Qurban'}
        </Text>
        <Text
          style={[
            StyleGuide.semiBold14,
            // StyleGuide.mt2,
            {
              fontWeight: '600',
              textAlign: 'left',
            },
            rtl && {fontFamily: 'Tajawal-Regular'},
          ]}>
          {rtl ? 'طب عام' : 'General Medicine'}
        </Text>
        <Text
          style={[
            StyleGuide.semiBold12,
            // StyleGuide.mt2,
            {
              color: StyleGuide.colors.lightText,
              fontWeight: '500',
            },
            rtl && {fontFamily: 'Tajawal-Regular', textAlign: 'left',},
          ]}>
          {rtl ? '3 تقييمات' : '3 Reviews'}
        </Text>
        <View style={[StyleGuide.fdrac]}>
          <Image
            style={{resizeMode: 'contain'}}
            source={require('../src/assets/images/iraq.png')}
          />
          <Text
            style={[
              StyleGuide.semiBold12,
              {
                color: StyleGuide.colors.lightText,
              },
              rtl && {fontFamily: 'Tajawal-Regular'},
            ]}>
            {' '}
            {rtl ? 'العراق' : 'Iraq'}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default DoctorInformation;
