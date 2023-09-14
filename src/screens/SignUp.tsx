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

const SignUp = (props: any) => {
  const [loading, setLoading] = useState<boolean>();
  const [error, setError] = useState<boolean>();
  // @ts-ignore
  // const {flag, toggleFalse, toggleTrue} = useContext(FlagContext);
  const {handleSubmit, watch, control} = useForm();

  return (
    <SafeAreaView style={StyleGuide.fullBackground}>
      <Header title={'ContactMe'} />
      <ScrollView
        contentContainerStyle={[
          StyleGuide.flex1,
          StyleGuide.aIc,
          {
            marginTop: wp(10),
          },
        ]}>
        <Text style={[StyleGuide.secondHeaderText, {alignSelf: 'center'}]}>
          Register 👋
        </Text>
        <CustomInputField
          name={'username'}
          label={'Username'}
          control={control}
          requiredErrorMessage={'Username is compulsory'}
        />
        <CustomInputField
          name={'email'}
          label={'Email'}
          requiredErrorMessage={'Email is compulsory'}
          control={control}
          validateEmail={true}
        />
        <CustomInputField
          name={'password'}
          label={'Password'}
          control={control}
          requiredErrorMessage={`Password can't be blank`}
          validatePassword={true}
          secureTextEntry
        />
        <CustomInputField
          name={'conPassword'}
          label={'Confirm Password'}
          requiredErrorMessage={`Confirm password can't be blank`}
          control={control}
          secureTextEntry
          rules={{
            validate: (value: string) =>
              value === watch('password') || 'Password does not match',
          }}
        />
        <FullButton
          title="SignUp"
          buttonStyle={{marginTop: 10}}
          // onPress={handleSubmit(onSignInPressed)}
          // loading={loading}
        />
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
        <SocialLoginButton title="SignUp with Google" />
        <SocialLoginButton title="SignUp with Facebook" />
        <Text style={[StyleGuide.regular14, StyleGuide.mt20]}>
          I already have an account?{' '}
          <Text
            onPress={() => props?.navigation.navigate('SignIn')}
            style={{fontFamily: 'Poppins-SemiBold'}}>
            LogIn
          </Text>
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
