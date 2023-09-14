import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Alert,
  Platform,
  KeyboardAvoidingView,
} from 'react-native';
import Modal from 'react-native-modal';
import React, {useState} from 'react';
import StyleGuide from '../constants/StyleGuide';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
// import {Icons} from '../data';
import {
  Controller,
  FormProvider,
  useForm,
  useFormContext,
} from 'react-hook-form';
import CustomInputField from './CustomInputField';
import FullButton from './FullButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
interface Props {
  title: string;
  data: any;
}

const SocialNameIcons: React.FC<Props> = ({title, data}) => {
  const methods = useForm({
    defaultValues: {
      name: undefined,
      email: undefined,
      'custom:phone': undefined,
      phone_number: undefined,
      'custom:country_code': '92',
      'custom:landline': undefined,
      'custom:ll_country_code': '92',
      'custom:whatsapp': undefined,
      'custom:wa_country_code': '92',
      'custom:address': undefined,
      'custom:country_name': 'Pakistan',
      'custom:city_id': undefined,
      'custom:nick': undefined,
      'custom:about': undefined,
    },
  });

  const {
    handleSubmit,
    getValues,
    setValue,
    resetField,
    watch,
    formState,
    reset,
    control,
  } = methods;

  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={{marginTop: hp(2)}}>
      <Text style={StyleGuide.secondHeaderText}>{title}</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map((item: any, index: number) => (
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{alignItems: 'center', marginRight: 10}}>
            <View
              style={{
                marginTop: hp(2),
                padding: wp(4),
                borderRadius: 20,
                backgroundColor: StyleGuide.colors.gray,
              }}>
              <Image
                style={{
                  height: hp(7),
                  width: hp(7),
                  borderRadius: 10,
                  // resizeMode: 'contain',
                }}
                source={item.image}
              />
            </View>
            <Text
              style={{
                fontFamily: 'Poppins-SemiBold',
                fontSize: hp(1.8),
                color: '#37474F',
              }}>
              {item.name}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default SocialNameIcons;
