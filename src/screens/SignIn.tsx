import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import React, {useContext, useState} from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useForm} from 'react-hook-form';
// import firestore, {firebase} from '@react-native-firebase/firestore';
// import auth from '@react-native-firebase/auth';
// import AsyncStorage from '@react-native-community/async-storage';
// import {FlagContext} from '../context/FlagContext';
// import {ToastMessage} from '../components/ToastMessage';
import Header from '../../components/Header';
import SocialLoginButton from '../../components/SocialLoginButton';
import CustomInputField from '../../components/CustomInputField';
import FullButton from '../../components/FullButton';

const SignIn = (props: any) => {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  // @ts-ignore
  // const {flag, toggleFalse, toggleTrue} = useContext(FlagContext);
  const {handleSubmit, watch, control} = useForm();

  return (
    <SafeAreaView style={StyleGuide.fullBackground}>
      <Header title={'ContactMe'} />
      <View
        style={[
          StyleGuide.flex1,
          StyleGuide.bottomCenter,
          {
            marginBottom: hp(6),
          },
        ]}>
        <Text style={[StyleGuide.secondHeaderText, {alignSelf: 'center'}]}>
          Hi, Welcome Back! 👋
        </Text>
        <CustomInputField
          name={'username'}
          label={'Username/Email'}
          control={control}
          requiredErrorMessage={'Username is compulsory'}
        />
        <CustomInputField
          name={'password'}
          label={'Password'}
          control={control}
          requiredErrorMessage={`Password is compulsory`}
          validatePassword={true}
          secureTextEntry
        />
        {error && (
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
            Incorrect Password
          </Text>
        )}
        <FullButton
          title="SignIn"
          buttonStyle={{marginTop: 10}}
          // onPress={handleSubmit(onSignInPressed)}
          // loading={loading}
        />
        <Text
          onPress={() => console.log('Password')}
          style={[StyleGuide.redTextReg, {marginTop: hp(1.4)}]}>
          Forget Password?
        </Text>
        <View style={[StyleGuide.fdrsacjcc, {marginVertical: hp(4)}]}>
          <View
            style={{
              width: '33%',
              height: 1,
              backgroundColor: StyleGuide.colors.secondPrimary,
            }}
          />
          <Text style={[StyleGuide.semiBold14, StyleGuide.mh10]}>OR</Text>
          <View
            style={{
              width: '33%',
              height: 1,
              backgroundColor: StyleGuide.colors.secondPrimary,
            }}
          />
        </View>
        <SocialLoginButton title="SignIn with Google" />
        <SocialLoginButton title="SignIn with Facebook" />
        <Text style={[StyleGuide.regular14, StyleGuide.mt20]}>
          Don't have an account?{' '}
          <Text
            onPress={() => props?.navigation.navigate('SignUp')}
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Register Now
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default SignIn;
