import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';

interface Props {
  title: string;
  onPress?: any;
  disable?: boolean;
  loading?: boolean;
  buttonStyle?: any;
}

const FullButton: React.FC<Props> = (props: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      disabled={props.disable}
      onPress={props.onPress}
      style={[
        {
          // width: wp(84),
          // height:2,
          paddingVertical: hp(1.2),
          // alignSelf: 'center',
          alignItems: 'center',
          backgroundColor: props.disable ? '#BBBBBB' : '#5390ED',
          borderRadius: 8,
          marginTop: hp(2),
        },
        props?.buttonStyle,
      ]}>
      {props?.loading ? (
        <ActivityIndicator color={'white'} size={'small'} />
      ) : (
        <Text
          style={[
            StyleGuide.colorWhite,
            {fontSize: 16, fontFamily: 'Poppins-SemiBold'},
          ]}>
          {props.title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default FullButton;
