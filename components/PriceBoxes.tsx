import {View, Text} from 'react-native';
import React, {useContext} from 'react';
import StyleGuide from '../constants/StyleGuide';
import {RtlContext} from '../src/context/RtlContext';

const PriceBoxes = () => {
  // @ts-ignore
  const {rtl} = useContext(RtlContext);

  function PriceBox(heading: string, price: string) {
    return (
      <View
        style={[
          StyleGuide.center,
          StyleGuide.pv10,
          // StyleGuide.ph20,
          StyleGuide.colorBackground,
          // StyleGuide.
          {
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#EEE',
            width: '48%',
          },
        ]}>
        <Text style={[StyleGuide.regular12]}>{heading}</Text>
        <Text
          style={{
            fontFamily: rtl ? 'Tajawal-Bold' : 'Urbanist-Bold',
            fontSize: 20,
            // fontWeight: '700',
            marginTop: 2,
            color: '#2A2A2A',
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
    <View style={[StyleGuide.fdrjsb, StyleGuide.mt20, ]}>
      {PriceBox(rtl ? 'استشارات أونلاين' : 'Online Consultation', '150,000')}
      {PriceBox(rtl ? 'استشارات منزلية' : 'Home Consultation', '240,000')}
    </View>
  );
};

export default PriceBoxes;
