import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import StyleGuide from '../constants/StyleGuide';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import {useNavigation} from '@react-navigation/native';
interface Props {
  title: string;
}

const IconHeader: React.FC<Props> = ({title}) => {
  const navigation = useNavigation();
  return (
    <View
      style={[
        StyleGuide.pp4,
        {
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: hp(1),
          backgroundColor: '#fff',
          shadowColor: '#000',
          shadowOffset: {width: 0, height: 4}, // adjust the height for the desired shadow position
          shadowOpacity: 0.8,
          shadowRadius: 4,
          elevation: 4,
        },
      ]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          style={{height: hp(2.2), width: hp(2.2), resizeMode: 'contain'}}
          source={require('../assets/images/icons/left-arrow-red.png')}
        />
      </TouchableOpacity>
      <Text style={[StyleGuide.headerText, {marginLeft: hp(3)}]}>{title}</Text>
    </View>
  );
};

export default IconHeader;
