import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import DoctorInformation from './DoctorInformation';
import DoctorAmenities from './DoctorAmenities';
import StyleGuide from '../constants/StyleGuide';
import PriceBoxes from './PriceBoxes';
import FullButton from './FullButton';
import {useNavigation} from '@react-navigation/native';

const DoctorContainer = ({rtl}: any) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={[
        StyleGuide.p16,
        StyleGuide.mt14,
        {
          backgroundColor: '#FFF',
          borderRadius: 12,
          width: '100%',
        },
      ]}>
      <DoctorInformation rtl={rtl}/>
      <DoctorAmenities rtl={rtl}/>
      <PriceBoxes/>
      <FullButton
        // title={'Book Now'}
        buttonStyle={{height: 40}}
        title={rtl? 'احجز الأن' : 'Book Now'}
        onPress={() => navigation?.navigate('DoctorDetails')}
      />
    </TouchableOpacity>
  );
};

export default DoctorContainer;
