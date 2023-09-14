import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import {social} from '../data';
import IconClicks from '../components/IconClicks';

const AddLinks = (props: any) => {
  return (
    <SafeAreaView style={StyleGuide.fullBackground}>
      <Header title={'Choose a link type'} />
      <View style={[StyleGuide.flex1]}>
        <Text
          style={[StyleGuide.regular14, {fontSize: 22, alignSelf: 'center'}]}>
          Featured
        </Text>
        <Text
          style={[StyleGuide.regular14, {fontSize: 22, alignSelf: 'center'}]}>
          Social Media
        </Text>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}>
          {social.map(item => (
            <IconClicks item={item}/>
          ))}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default AddLinks;
