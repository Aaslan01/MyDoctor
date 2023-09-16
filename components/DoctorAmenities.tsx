import {View, Text, Image} from 'react-native';
import React from 'react';
import Box from '../src/assets/svgs/Box';
import StyleGuide from '../constants/StyleGuide';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Location from '../src/assets/svgs/Location';
import PersonBeat from '../src/assets/svgs/PersonBeat';
import LocationB from '../src/assets/svgs/LocationB';
import BoxBack from '../src/assets/svgs/BoxBack';

const DoctorAmenities = ({rtl}: any) => {
  function SmallContainer(
    header: string | undefined,
    text: string | undefined,
  ) {
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
          style={[
            StyleGuide.center,
            {
              backgroundColor: '#5492FD30',
              height: 44,
              width: 44,
              borderRadius: 12,
            },
          ]}>
          {header?.includes('المنطقة') ? <LocationB /> : <PersonBeat />}
        </View>
        <View style={[StyleGuide.flex1, StyleGuide.mh10]}>
          <Text
            style={[
              StyleGuide.regular12,
              {
                fontWeight: '700',
              },
              rtl && {fontFamily: 'Tajawal-Regular', textAlign: 'left',}
            ]}>
            {header}
          </Text>
          <Text
            style={[
              StyleGuide.regular12,
              {
                color: StyleGuide.colors.text,
              },
              rtl && {fontFamily: 'Tajawal-Regular', textAlign: 'left',}
            ]}>
            {text}
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
        <BoxBack />
        <View style={[StyleGuide.flex1, StyleGuide.mh10]}>
          <Text
            style={[
              StyleGuide.regular12,
              {
                fontWeight: '700',
              },
              rtl && {fontFamily: 'Tajawal-Regular', textAlign: 'left',},
            ]}>
            {rtl ? 'مكان العمل' : 'WorkPlace'}
          </Text>
          <Text
            style={[
              StyleGuide.regular10,
              {
                color: StyleGuide.colors.text,
              },
              rtl && {fontFamily: 'Tajawal-Regular', textAlign: 'left', fontWeight: '400',},

            ]}>
            {rtl
              ? 'مستشفى اليرموك بغداد, العراق'
              : 'Yarmuk Hospital Baghdad iraq'}
          </Text>
        </View>
      </View>
      {SmallContainer(
        rtl ? 'المنطقة' : 'Location',
        rtl ? 'المنصور بغداد' : 'Al Mansour Baghdad, Iraq',
      )}
      {SmallContainer(rtl ? 'المرضى' : 'Patients', '20')}
    </View>
  );
};

export default DoctorAmenities;
