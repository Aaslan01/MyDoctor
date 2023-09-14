import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';

interface ProfileButtonsProps {
  title: string;
  icons: ImageSourcePropType;
  onPress?: () => void;
}

const ProfileButtons = ({title, icons, onPress}: ProfileButtonsProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.7}
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 8,
        height: hp(8),
        marginTop: hp(2),
        backgroundColor: '#fff',
      }}>
      <Image
        style={{width: 30, height: 30, marginLeft: hp(2), marginRight: hp(4)}}
        source={icons}
      />
      <Text style={StyleGuide.secondHeaderText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ProfileButtons;
