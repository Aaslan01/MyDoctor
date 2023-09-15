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
    <SafeAreaView style={[StyleGuide.fullBackground]}>
      <Header title={'Find Doctors'} />
      <ScrollView
      showsVerticalScrollIndicator={false}
        style={{
          paddingHorizontal: 16,
          flex:1,
        }}>
        <DoctorContainer navigation={props?.navigation} />
        <DoctorContainer />
        <DoctorContainer />
        <DoctorContainer />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
