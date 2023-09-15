import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DoctorInformation from './DoctorInformation';
import DoctorAmenities from './DoctorAmenities';
import StyleGuide from '../constants/StyleGuide';
import PriceBoxes from './PriceBoxes';
import FullButton from './FullButton';
import {useNavigation} from '@react-navigation/native';

const DoctorContainer = (props: any) => {
  console.log('==========props==========================');
  console.log(props);
  console.log('====================================');
  return (
    <TouchableOpacity
      onPress={() => console.log('hihjii', props)}
      style={[
        StyleGuide.p16,
        StyleGuide.mt14,
        {
          backgroundColor: '#FFF',
          borderRadius: 12,
          width: '100%',
        },
      ]}>
      <DoctorInformation />
      <DoctorAmenities />
      <PriceBoxes />
      <FullButton
        title={'Book Now'}
        onPress={() => console.log('====================================')}
      />
    </TouchableOpacity>
  );
};

export default DoctorContainer;
