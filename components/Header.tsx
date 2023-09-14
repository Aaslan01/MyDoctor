import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useContext} from 'react';
import StyleGuide from '../constants/StyleGuide';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
import {useNavigation} from '@react-navigation/native';
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
          backgroundColor: '#f2f2f2',
          // shadowColor: '#000',
          // shadowOffset: {width: 0, height: 4}, // adjust the height for the desired shadow position
          // shadowOpacity: 0.8,
          // shadowRadius: 4,
          // elevation: 4,
        },
      ]}>
      <Text style={StyleGuide.headerText}>{title}</Text>
      {/* <TouchableOpacity
        onPress={() => {
          auth()
            .signOut()
            .then(() => {
              console.log('User signed out!'), toggleFalse();
              AsyncStorage.setItem('AuthData', 'false');
            });
        }}
        >
        <Image
          style={StyleGuide.bottomNavIcon}
          source={require('../src/assets/images/icons/share.png')}
        />
      </TouchableOpacity> */}
    </View>
  );
};

export default Header;
