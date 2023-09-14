import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import GoogleSvg from '../src/assets/svgs/GoogleSvg';
import FbSvg from '../src/assets/svgs/FbSvg';
import StyleGuide from '../constants/StyleGuide';

interface SocialLoginButtonProps {
  title: string;
  marginTop?: number;
}

const SocialLoginButton = ({title, marginTop = 10}: SocialLoginButtonProps) => {
  return (
    <TouchableOpacity
    onPress={()=> console.log('TEstttt')}
      style={[
        StyleGuide.fdrsacjcc,
        {
          borderRadius: 20,
          width: '90%',
          height: 50,
          marginTop: marginTop,
          // borderWidth
        },
        !title.includes('Facebook') && {borderColor: '#BBBBBB', borderWidth: 1},
        title.includes('Facebook') && {backgroundColor: '#1877F2'},
      ]}>
      <View style={{position: 'absolute', left: 14}}>
        {title.includes('Google') ? <GoogleSvg /> : <FbSvg />}
      </View>
      <Text
        style={[
          StyleGuide.semiBold16,
          title.includes('Facebook') && {
            color: '#fff',
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default SocialLoginButton;
