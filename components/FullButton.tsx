import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import StyleGuide from '../constants/StyleGuide';

interface Props {
  title: string;
  onPress?: () => {};
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
          width: wp(92),
          // height:2,
          paddingVertical: hp(1.6),
          alignItems: 'center',
          backgroundColor: props.disable ? '#BBBBBB' : '#1B1B1B',
          borderRadius: 30,
          // marginTop: hp(4),
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
