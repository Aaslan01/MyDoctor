import {View, Text} from 'react-native';
import React from 'react';
import DoctorInformation from './DoctorInformation';
import DoctorAmenities from './DoctorAmenities';
import StyleGuide from '../constants/StyleGuide';
import PriceBoxes from './PriceBoxes';
import FullButton from './FullButton';
import {useNavigation} from '@react-navigation/native';

const DoctorContainer = () => {
  const navigation = useNavigation();
  return (
    <View
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
        onPress={() => navigation.navigate('DoctorDetails')}
      />
    </View>
  );
};

export default DoctorContainer;
