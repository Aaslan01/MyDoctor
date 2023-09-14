import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Header from '../../components/Header';
import StyleGuide from '../../constants/StyleGuide';
import FullButton from '../../components/FullButton';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

// NavigationProp<ReactNavigation.RootParamList>;
const OpeningScreen = (props: any) => {
  return (
    <SafeAreaView style={StyleGuide.fullBackground}>
      <Header title={'ContactMe'} />
      <View
        style={[
          StyleGuide.flex1,
          StyleGuide.bottomCenter,
          {
            marginBottom: wp(30),
          },
        ]}>
        <Text style={[StyleGuide.headerText, {fontSize: 30, color: '#1B1B1B'}]}>
          Wel Come
        </Text>
        <Text style={StyleGuide.regular14}>
          to your's Digital Business Card
        </Text>
        <FullButton
          onPress={() => props?.navigation.navigate('SignUp')}
          title={'Create Account'}
          buttonStyle={{marginTop: 20}}
        />
        <Text style={[StyleGuide.regular14, StyleGuide.mt20]}>
          Already registered?{' '}
          <Text
            onPress={() => props?.navigation.navigate('SignIn')}
            style={{fontFamily: 'Poppins-SemiBold'}}>
            Sing In
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default OpeningScreen;
