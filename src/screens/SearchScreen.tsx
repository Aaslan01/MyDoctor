import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useContext } from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import { RtlContext } from '../context/RtlContext';

const SearchScreen = (props: any) => {
  // @ts-ignore
  const {rtl} = useContext(RtlContext);
  
  return (
    <SafeAreaView style={[StyleGuide.fullBackground]}>
      <Header title={rtl ?'بحث' : 'Search Screen'} />
      <Text style={[StyleGuide.center, StyleGuide.m20]}>SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
