import {View, Text, Image} from 'react-native';
import React from 'react';
import Box from '../src/assets/svgs/Box';
import StyleGuide from '../constants/StyleGuide';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import Location from '../src/assets/svgs/Location';
import PersonBeat from '../src/assets/svgs/PersonBeat';
import LocationB from '../src/assets/svgs/LocationB';
import BoxBack from '../src/assets/svgs/BoxBack';

const DoctorAmenities = () => {
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
          {header?.includes('L') ? <LocationB /> : <PersonBeat />}
        </View>
        <View style={[StyleGuide.flex1, StyleGuide.ml10]}>
          <Text
            style={[
              StyleGuide.regular12,
              {
                fontWeight: '700',
              },
            ]}>
            {header}
          </Text>
          <Text
            style={[
              StyleGuide.regular12,
              {
                color: StyleGuide.colors.text,
              },
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
      {SmallContainer('Location', 'Al Mansour Baghdad, Iraq')}
      {SmallContainer('Patients', '20')}
    </View>
  );
};

export default DoctorAmenities;
