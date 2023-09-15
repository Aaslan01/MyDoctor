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
  const [isEdit, setIsEdit] = useState<boolean>(false);
  return (
    <SafeAreaView style={[StyleGuide.fullBackground,{direction:'rtl'}]}>
      {/* <Header title={'Find Doctors'} /> */}
      <Header title={'الأطباء'} />
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={{
          
          flex:1,
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
