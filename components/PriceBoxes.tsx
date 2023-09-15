import {View, Text} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const PriceBoxes = () => {
  function PriceBox(heading: string, price: string) {
    
    return (
      <View
        style={[
          StyleGuide.center,
          StyleGuide.pv10,
          StyleGuide.ph20,
          StyleGuide.colorBackground,
          // StyleGuide.
          {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#EEE',
            width: '48%',
            marginRight: 10,
          },
        ]}>
        <Text style={[StyleGuide.regular12,
        ]}>{heading}</Text>
        <Text
          style={{
            fontFamily: 'Urbanist-Regular',
            fontSize: 20,
            fontWeight: '700',
            marginTop: 2,
            color: '#2A2A2A'
          }}>
          {price}{' '}
          <Text
            style={{
              fontSize: 14,
            }}>
            IQD
          </Text>
        </Text>
      </View>
    );
  }

  return (
    <View style={[StyleGuide.fdr, StyleGuide.mt20]}>
      {PriceBox('استشارات أونلاين', '150,000')}
      {PriceBox('استشارات منزلية', '240,000')}
    </View>
  );
};

export default PriceBoxes;
