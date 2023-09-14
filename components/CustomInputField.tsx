import {View, Text, TouchableOpacity} from 'react-native';
import React, {memo, useState} from 'react';
import {Controller, useForm} from 'react-hook-form';
import {TextInput} from 'react-native-paper';
import StyleGuide from '../constants/StyleGuide';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import OpenEyeSVG from '../src/assets/svgs/OpenEyeSVG';
import CloseEyeSVG from '../src/assets/svgs/CloseEyeSVG';

interface CustomInputFieldProps {
  name: string;
  control: any;
  label: string;
  requiredErrorMessage?: string;
  validateEmail: boolean;
  validatePassword: boolean;
  secureTextEntry: boolean;
  minLength?: number;
  errorMessage: string;
  rules: {};
}

const CustomInputField = (props: CustomInputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [revealSecureText, setRevealSecureText] = useState(false);

  const Label = memo(({label}: {label: string}) => {
    return <Text style={{fontFamily: 'Poppins-Regular'}}>{label}</Text>;
  });

  return (
    <Controller
      name={props.name}
      control={props.control}
      render={({field: {onChange, value}, fieldState: {error}}) => {
        return (
          <>
            <TextInput
              onChangeText={onChange}
              label={<Label label={props.label} />}
              mode={'outlined'}
              secureTextEntry={props.secureTextEntry && !revealSecureText}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              textColor="#E85451"
              theme={{
                colors: {
                  primary: StyleGuide.colors.secondPrimary,
                },
              }}
              outlineStyle={{
                borderColor: error
                  ? StyleGuide.colors.primary
                  : isFocused
                  ? StyleGuide.colors.secondPrimary
                  : 'transparent',
                borderWidth: isFocused ? 1 : 0,
                borderRadius: 10,
              }}
              contentStyle={{
                // @ts-ignore
                color: StyleGuide.colors.text,
                fontFamily: 'Poppins-Regular'
              }}
              style={{
                backgroundColor: StyleGuide.colors.gray,
                paddingHorizontal: wp(4),
                width: wp(92),
                marginTop: hp(1),
              }}
              right={
                props.secureTextEntry ? (
                  <TextInput.Icon
                    icon={() => (
                      <TouchableOpacity
                        onPress={() => setRevealSecureText(!revealSecureText)}>
                        {revealSecureText ? <OpenEyeSVG /> : <CloseEyeSVG />}
                      </TouchableOpacity>
                    )}
                    style={{width: 50}}
                  />
                ) : null
              }
            />
            {error && error && (
              <Text
                style={[
                  StyleGuide.colorRed,
                  {
                    alignSelf: 'stretch',
                    marginLeft: wp(2),
                    fontSize: 10,
                    fontFamily: 'Poppins-Regular',
                  },
                ]}>
                {error.message}
              </Text>
            )}
          </>
        );
      }}
      //rules
      rules={{
        ...props?.rules,
        ...(props.requiredErrorMessage && {
          required: {
            value: !!props.requiredErrorMessage,
            message: props.requiredErrorMessage,
          },
        }),
        ...(props.validateEmail && {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: 'Invalid email format',
          },
        }),
        ...(props.validatePassword && {
          pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
            message:
              'Password must be (8) characters in length, contain (1) uppercase, (1) lowercase and (1) numeric',
          },
        }),

        ...(props.minLength && {
          minLength: {
            value: 3,
            message: 'Name must be at least 3 characters',
          },
        }),
      }}
    />
  );
};

export default CustomInputField;

CustomInputField.defaultProps = {
  validateEmail: false,
  validatePassword: false,
  secureTextEntry: false,
  errorMessage: null,
  rules: {},
};
