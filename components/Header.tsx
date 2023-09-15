import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import StyleGuide from '../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
import LeftArrow from '../src/assets/svgs/LeftArrow';
import RightArrow from '../src/assets/svgs/RightArrow';
// import {FlagContext} from '../context/FlagContext';
interface Props {
  title: string;
}

const Header: React.FC<Props> = ({title}) => {
  // @ts-ignore
  // const {flag, toggleFalse, toggleTrue} = useContext(FlagContext);
  const navigation = useNavigation();
  return (
    <View
      style={[
        StyleGuide.pp4,
        StyleGuide.center,
        {
          height: hp(6),
          width: widthPercentageToDP(100),
          backgroundColor: '#f2f2f2',
          borderBottomWidth: 1,
          borderColor: '#0001',
          flexDirection: 'row',

          // shadowColor: '#000',
          // shadowOffset: {width: 0, height: 4}, // adjust the height for the desired shadow position
          // shadowOpacity: 0.8,
          // shadowRadius: 4,
          // elevation: 4,
        },
      ]}>
      <TouchableOpacity
        style={{position: 'absolute', left: 16, direction: 'rtl'}}
        onPress={() => navigation.goBack()}>
        {/* <LeftArrow /> */}
        <RightArrow />
      </TouchableOpacity>
      <Text
        style={[StyleGuide.semiBold16, {fontWeight: '600', color: '#2A2A2A'}]}>
        {title}
      </Text>
    </View>
  );
};

export default Header;
