import {View, Text} from 'react-native';
import React from 'react';
import DoctorInformation from './DoctorInformation';
import DoctorAmenities from './DoctorAmenities';
import StyleGuide from '../constants/StyleGuide';

const DoctorContainer = () => {
  return (
    <View
      style={[
        StyleGuide.p16,
        {
          backgroundColor: '#FFF',
          borderRadius: 12,
          width: '100%',
        },
      ]}>
      <DoctorInformation />
      <DoctorAmenities />
    </View>
  );
};

export default DoctorContainer;
