import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import StyleGuide from '../../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../../components/Header';
import FullButton from '../../components/FullButton';
import CircleTickBox from '../components/CircleTickBox';
import PlusSVG from '../assets/svgs/PlusSVG';
import DoctorContainer from '../../components/DoctorContainer';

const Home = (props: any) => {
  console.log('=======props=============================');
  console.log(props);
  console.log('====================================');
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <SafeAreaView style={StyleGuide.fullBackground}>
      <Header title={'ContactMe'} />
      <ScrollView
        style={{
          paddingHorizontal: 16,
        }}>
        <DoctorContainer />
        <DoctorContainer />
        <DoctorContainer />
        <DoctorContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
