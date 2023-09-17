import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useContext} from 'react';
import StyleGuide from '../../constants/StyleGuide';
import Header from '../../components/Header';
import FullButton from '../../components/FullButton';
import CircleTickBox from '../components/CircleTickBox';
import PlusSVG from '../assets/svgs/PlusSVG';
import DoctorContainer from '../../components/DoctorContainer';
import {RtlContext} from '../context/RtlContext';
import {I18nManager} from 'react-native';
import RNRestart from 'react-native-restart';

const Home = (props: any) => {
  // @ts-ignore
  const {rtl, toggleFalse, toggleTrue} = useContext(RtlContext);

  function setFlagTrue() {
    I18nManager.allowRTL(true);
    I18nManager.forceRTL(true);
    setTimeout(() => {
      RNRestart.Restart();
    }, 200);
  }
  function setFlagFalse() {
    I18nManager.allowRTL(false);
    I18nManager.forceRTL(false);
    setTimeout(() => {
      RNRestart.Restart();
    }, 200);
  }
  // I18nManager.allowRTL(false);
  // I18nManager.forceRTL(false);
  //   RNRestart.Restart();
  return (
    <SafeAreaView style={[StyleGuide.fullBackground, {direction: 'rtl'}]}>
      {/* <Header title={'Find Doctors'} /> */}
      <Header title={rtl ? 'الأطباء' : 'Find Doctors'} />
      <FullButton
        buttonStyle={{height: 40, marginHorizontal: 20}}
        onPress={() => (rtl ? setFlagFalse() : setFlagTrue())}
        title={
          rtl
            ? 'Click for the English Version'
            : 'انقر للحصول على النسخة العربية'
        }
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 16}}
        style={{
          flex: 1,
        }}>
        <DoctorContainer rtl={rtl} />
        <DoctorContainer rtl={rtl} />
        <DoctorContainer rtl={rtl} />
        <DoctorContainer rtl={rtl} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
