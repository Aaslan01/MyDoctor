import {TextInput} from 'react-native-paper';
import React, {useState} from 'react';
import StyleGuide from '../constants/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
interface Props {
  label: string;
  setVal: any
}

const InputField: React.FC<Props> = ({
  label,
  setVal
}) => {
  const [isFocused, setIsFocused] = useState(false);
  return (
    <TextInput
      onChangeText={newText => setVal(newText)}
      label={label}
      mode={'outlined'}
      placeholderTextColor={StyleGuide.colors.darkText}
      textColor={StyleGuide.colors.text}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      outlineStyle={{
        borderColor: isFocused
          ? StyleGuide.colors.secondPrimary
          : 'transparent',
        borderWidth: isFocused ? 1 : 0,
        borderRadius: 10
      }}
      contentStyle={{
        // @ts-ignore
        color: StyleGuide.colors.text
      }}
      style={{
        backgroundColor: StyleGuide.colors.gray,
        // fontSize: FontSize.small,
        fontFamily: 'Poppins-Regular',
        // borderRadius: 10,
        // paddingVertical: hp(1.2),
        paddingHorizontal: wp(4),
        marginTop: hp(2),
      }}
    />
  );
};

export default InputField;
