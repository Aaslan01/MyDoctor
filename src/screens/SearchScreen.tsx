import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';

const SearchScreen = (props: any) => {
  return (
    <SafeAreaView style={[StyleGuide.fullBackground]}>
      <Header title={'Search Screen'} />
      <Text style={[StyleGuide.center, StyleGuide.m20]}>SearchScreen</Text>
    </SafeAreaView>
  );
};

export default SearchScreen;
