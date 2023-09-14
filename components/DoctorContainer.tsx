import {View, Text} from 'react-native';
import React from 'react';
import DoctorInformation from './DoctorInformation';

const DoctorContainer = () => {
  return (
    <View
      style={{
        backgroundColor: '#FFF',
        borderRadius: 12,
      }}>
      <DoctorInformation />
    </View>
  );
};

export default DoctorContainer;
