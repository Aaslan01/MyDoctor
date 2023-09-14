import {View, Text, ImageBackground, Image} from 'react-native';
import React from 'react';
import StyleGuide from '../../constants/StyleGuide';
import ColorStatus from '../assets/svgs/ColorStatus';
import PriceBoxes from '../../components/PriceBoxes';

const DoctorDetails = () => {
  function BioInfo() {
    return (
      <View
        style={[
          StyleGuide.center,
          StyleGuide.colorBackground,
          StyleGuide.p12,
          {borderRadius: 8},
        ]}>
        <Text style={[StyleGuide.semiBold16, {color: StyleGuide.colors.text}]}>
          Biography
        </Text>
        <Text
          style={[
            StyleGuide.regular14,
            {color: '#6D6D6D', textAlign: 'center'},
          ]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Diam erat
          vestibulum cursus eget eleifend maecenas aenean in aenean. Nunc
          dignissim enim, vitae tincidunt morbi massa sed
        </Text>
      </View>
    );
  }
  function TimeInfo() {
    return (
      <View
        style={[
          StyleGuide.ph16,
          StyleGuide.pv8,
          StyleGuide.fdrac,
          StyleGuide.mt10,
          {
            backgroundColor: '#F6F6F6',
            borderColor: '#ECECEC',
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={[StyleGuide.regular14, {color: '#2A2A2A'}]}>Monday</Text>
        <View>
          <Text style={[StyleGuide.regular14, StyleGuide.mv2, {color: '#2A2A2A'}]}>
            09:00 AM - 12:30 PM
          </Text>
          <Text style={[StyleGuide.regular14, StyleGuide.mv2, {color: '#2A2A2A'}]}>
            09:00 AM - 12:30 PM
          </Text>
        </View>
      </View>
    );
  }
  function TimeInfoTwo() {
    return (
      <View
        style={[
          StyleGuide.ph16,
          StyleGuide.pv8,
          StyleGuide.fdrac,
          StyleGuide.mt10,
          {
            backgroundColor: '#F6F6F6',
            borderColor: '#ECECEC',
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={[StyleGuide.regular14, {color: '#2A2A2A'}]}>Monday</Text>
        <View>
          <Text style={[StyleGuide.regular14, StyleGuide.mv2, {color: '#2A2A2A'}]}>
            09:00 AM - 12:30 PM
          </Text>
        </View>
      </View>
    );
  }

  return (
    <View style={[StyleGuide.flex1, StyleGuide.mainBackground]}>
      <View
        style={[
          StyleGuide.center,
          {
            height: '30%',
            width: '100%',
            backgroundColor: '#C4D8E8',
          },
        ]}>
        <Image
          style={{
            flex: 1,
            height: 220,
            width: 220,
            position: 'absolute', //Here is the trick
            bottom: 0, //Here is the trick
            resizeMode: 'contain',
          }}
          source={require('../assets/images/DoctorFull.png')}
        />
        <View
          style={[
            StyleGuide.fdrac,
            {
              position: 'absolute',
              top: '20%',
              right: 20,
            },
          ]}>
          <ColorStatus />
          <Text
            style={[StyleGuide.regular14, StyleGuide.ml5, {color: '#098416'}]}>
            Online
          </Text>
        </View>
      </View>
      <View
        style={[
          StyleGuide.ph16,
          {
            flex: 1,
            backgroundColor: '#FBFBFB',
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            marginTop: -20,
          },
        ]}>
        <View
          style={{
            alignItems: 'center',
          }}>
          {/* Name */}
          <Text
            style={[
              StyleGuide.semiBold16,
              StyleGuide.mt20,
              {color: StyleGuide.colors.text, fontWeight: '700', fontSize: 20},
            ]}>
            Dr. Ching Ming Yu
          </Text>
          {/* Detail */}
          <Text
            style={[
              StyleGuide.semiBold14,
              StyleGuide.mt4,
              {fontWeight: '600'},
            ]}>
            General Medicine - Cardiovascular Disease
          </Text>
          {/* Ratting */}
          <Text
            style={[
              StyleGuide.semiBold12,
              StyleGuide.mt2,
              {color: StyleGuide.colors.lightText, fontWeight: '600'},
            ]}>
            3.2
          </Text>
        </View>
        {/* Biography */}
        {BioInfo()}
        <PriceBoxes />
        {/* Availibilty Timings */}

        <Text
          style={[
            StyleGuide.semiBold16,
            StyleGuide.mt16,
            {color: StyleGuide.colors.text, fontWeight: '600', fontSize: 16},
          ]}>
          Availibilty Timings
        </Text>
        {TimeInfo()}
        {TimeInfoTwo()}
      </View>
    </View>
  );
};

export default DoctorDetails;
