import {View, Text, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';

interface DoctorInformationProps {
    
}

const DoctorInformation = () => {
  return (
    <View style={[StyleGuide.fdr, StyleGuide.p16]}>
      <Image
        style={{
          height: 80,
          width: 80,
        }}
        source={require('../src/assets/images/Doctor.png')}
      />
      <View>
        <Text>Dr. Yaser Qurban</Text>
        <Text>General Medicine</Text>
        <Text>2 Reviews</Text>
        <Text>Iraq</Text>
      </View>
    </View>
  );
};

export default DoctorInformation;
