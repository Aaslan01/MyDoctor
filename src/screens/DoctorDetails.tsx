import {
  View,
  Text,
  ImageBackground,
  Image,
  StyleSheet,
  ScrollView,
  Platform,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import StyleGuide from '../../constants/StyleGuide';
import ColorStatus from '../assets/svgs/ColorStatus';
import PriceBoxes from '../../components/PriceBoxes';
import {Rating, AirbnbRating} from 'react-native-ratings';
import LeftArrow from '../assets/svgs/LeftArrow';
import {useNavigation} from '@react-navigation/native';
import Peoples from '../assets/svgs/Peoples';
import HomeB from '../assets/svgs/HomeB';
import Paper from '../assets/svgs/Paper';
import RightArrow from '../assets/svgs/RightArrow';

const DoctorDetails = () => {
  const navigation = useNavigation();

  function BioInfo() {
    return (
      <View
        style={[
          StyleGuide.center,
          StyleGuide.colorBackground,
          StyleGuide.p12,
          styles.shadow,
          {borderRadius: 8},
        ]}>
        <Text
          style={[
            StyleGuide.semiBold16,
            {color: StyleGuide.colors.text, fontWeight: '700'},
          ]}>
          نبذة عني
        </Text>
        <Text
          style={[
            StyleGuide.regular14,
            {color: '#6D6D6D', textAlign: 'center'},
          ]}>
          لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو
          أيوسمود تيمبور أنكايد يديونتيوت لابوري ات دولار ماجري.
        </Text>
      </View>
    );
  }
  function DoctorsNewAmenities() {
    return (
      <View style={[StyleGuide.fdrjsb, StyleGuide.mt20]}>
        <View
          style={[
            StyleGuide.p8,
            StyleGuide.colorBackground,
            {
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#EEE',
              width: '30%',
            },
          ]}>
          <Text
            style={[
              StyleGuide.regular12,
              {color: '#959BA4', textAlign: 'left'},
            ]}>
            المرضى
          </Text>
          <View style={[StyleGuide.fdr, StyleGuide.mt4, StyleGuide.colorBackground]}>
            <Peoples />
            <Text
              style={[
                StyleGuide.semiBold16,
                StyleGuide.mh10,
                {color: StyleGuide.colors.text, fontWeight: '600'},
              ]}>
              200+
            </Text>
          </View>
        </View>
        <View
          style={[
            StyleGuide.p8,
            StyleGuide.colorBackground,
            {
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#EEE',
              width: '30%',
            },
          ]}>
          <Text
            style={[
              StyleGuide.regular12,
              {color: '#959BA4', textAlign: 'left'},
            ]}>
            زيارات منزلية
          </Text>
          <View style={[StyleGuide.fdr, StyleGuide.mt4]}>
            <HomeB />
            <Text
              style={[
                StyleGuide.semiBold16,
                StyleGuide.mh10,
                {color: StyleGuide.colors.text, fontWeight: '600'},
              ]}>
              30+
            </Text>
          </View>
        </View>
        <View
          style={[
            StyleGuide.p8,
            StyleGuide.colorBackground,
            {
              borderRadius: 8,
              borderWidth: 1,
              borderColor: '#EEE',
              width: '30%',
            },
          ]}>
          <Text
            style={[
              StyleGuide.regular12,
              {color: '#959BA4', textAlign: 'left'},
            ]}>
            الخبرة
          </Text>
          <View style={[StyleGuide.fdr, StyleGuide.mt4]}>
            <Paper />
            <Text
              style={[
                StyleGuide.semiBold16,
                StyleGuide.mh10,
                {color: StyleGuide.colors.text, fontWeight: '600'},
              ]}>
              200+
            </Text>
          </View>
        </View>
      </View>
    );
  }
  function TimeInfo() {
    return (
      <View
        style={[
          StyleGuide.ph16,
          StyleGuide.pv8,
          StyleGuide.fdrac,
          StyleGuide.mt10,
          {
            backgroundColor: '#F6F6F6',
            borderColor: '#ECECEC',
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={[StyleGuide.regular14, {color: '#2A2A2A'}]}>الأثنين</Text>
        <View>
          <Text
            style={[StyleGuide.regular14, StyleGuide.mv2, {color: '#2A2A2A'}]}>
            12:30 مساء - 09:00 صباحا
          </Text>
          <Text
            style={[StyleGuide.regular14, StyleGuide.mv2, {color: '#2A2A2A'}]}>
            01:30 مساء - 10:00 صباحا
          </Text>
        </View>
      </View>
    );
  }
  function TimeInfoTwo() {
    return (
      <View
        style={[
          StyleGuide.ph16,
          StyleGuide.pv8,
          StyleGuide.fdrac,
          StyleGuide.mt10,
          {
            backgroundColor: '#F6F6F6',
            borderColor: '#ECECEC',
            borderWidth: 1,
            borderRadius: 8,
            justifyContent: 'space-between',
          },
        ]}>
        <Text style={[StyleGuide.regular14, {color: '#2A2A2A'}]}>الثلاثاء</Text>
        <View>
          <Text
            style={[StyleGuide.regular14, StyleGuide.mv2, {color: '#2A2A2A'}]}>
            01:30 مساء - 10:00 صباحا
          </Text>
        </View>
      </View>
    );
  }
  function Certificate() {
    return (
      <View
        style={[
          StyleGuide.colorBackground,
          StyleGuide.p12,
          styles.shadow,
          StyleGuide.mt12,
          {borderRadius: 8},
        ]}>
        <Text
          style={[
            StyleGuide.semiBold14,
            {
              color: StyleGuide.colors.text,
              fontWeight: '600',
              width: '70%',
              textAlign: 'left',
            },
          ]}>
          شهادة رعاية مرضى معتمدة (CPCT)
        </Text>
        <Text
          style={[
            StyleGuide.semiBold16,
            {fontWeight: '600', position: 'absolute', right: 12, top: 12},
          ]}>
          2020
        </Text>
        <Text
          style={[
            StyleGuide.regular14,
            StyleGuide.mt14,
            {color: '#6D6D6D', textAlign: 'left'},
          ]}>
          جامعة البصرة
        </Text>
      </View>
    );
  }
  function Feedbacks(name: string, comment: string) {
    return (
      <View
        style={[
          StyleGuide.colorBackground,
          StyleGuide.p12,
          StyleGuide.mt12,
          styles.shadow,
          {borderRadius: 8},
        ]}>
        <View style={StyleGuide.fdr}>
          <Image
            style={{
              height: 40,
              width: 40,
              resizeMode: 'contain',
              borderRadius: 20,
            }}
            source={require('../assets/images/Doctor.png')}
          />
          <View style={StyleGuide.ph10}>
            <Text style={[StyleGuide.semiBold16, {fontWeight: '600'}]}>
              {name}
            </Text>
            <Rating
              type="custom"
              readonly
              ratingCount={5}
              imageSize={10}
              startingValue={2}
              //   ratingColor="#3498db"
              ratingBackgroundColor="#c8c7c8"
              style={{
                alignItems: 'flex-start',
              }}
              // showRating
              //   onFinishRating={this.ratingCompleted}
            />
          </View>
        </View>
        <Text
          style={[
            StyleGuide.regular14,
            StyleGuide.mt10,
            {color: '#000', textAlign: 'left'},
          ]}>
          {comment}
        </Text>
        <Text
          style={[
            StyleGuide.regular12,
            StyleGuide.mt10,
            {color: '#6D6D6D', textAlign: 'left'},
          ]}>
          يناير 22, 2020{' '}
        </Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1, borderWidth: 1, direction: 'rtl'}}>
      <StatusBar barStyle={'dark-content'} />
      <ScrollView
        contentContainerStyle={{flexGrow: 1}}
        scrollEnabled
        showsVerticalScrollIndicator={false}
        style={[StyleGuide.fullBackground]}>
        <View
          style={[
            StyleGuide.center,
            {
              width: '100%',
              backgroundColor: '#C4D8E8',
              paddingTop:
                Platform.OS == 'android' ? StatusBar.currentHeight - 20 : '10%',
            },
          ]}>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 16,
              top:
                Platform.OS == 'android' ? StatusBar.currentHeight - 30 : '20%',
            }}
            onPress={() => navigation.goBack()}>
            {/* <LeftArrow /> */}
            <RightArrow />
          </TouchableOpacity>
          <Image
            style={{
              height: 220,
              width: 220,
              resizeMode: 'contain',
            }}
            source={require('../assets/images/DoctorFull.png')}
          />
          <View
            style={[
              StyleGuide.fdrac,
              {
                position: 'absolute',
                right: 20,
                top:
                  Platform.OS == 'android'
                    ? StatusBar.currentHeight - 30
                    : '20%',
              },
            ]}>
            <ColorStatus />
            <Text
              style={[
                StyleGuide.regular14,
                StyleGuide.ml5,
                {color: '#098416'},
              ]}>
              متصل
            </Text>
          </View>
        </View>

        <View
          style={[
            StyleGuide.ph16,
            {
              backgroundColor: '#FBFBFB',
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
              marginTop: -20,
            },
          ]}>
          <View
            style={{
              alignItems: 'center',
            }}>
            {/* Name */}
            <Text
              style={[
                StyleGuide.semiBold16,
                StyleGuide.mt20,
                {
                  color: StyleGuide.colors.text,
                  fontWeight: '700',
                  fontSize: 20,
                },
              ]}>
              د. أحمد كريم
            </Text>
            {/* Detail */}
            <Text
              style={[
                StyleGuide.semiBold14,
                StyleGuide.mt4,
                {fontWeight: '600'},
              ]}>
              طب عام - أمراض قلب وأوعية دموية
            </Text>
            {/* Ratting */}
            <View style={[StyleGuide.fdrac, StyleGuide.mt6, StyleGuide.mb10]}>
              <Rating
                type="custom"
                readonly
                ratingCount={5}
                imageSize={10}
                startingValue={2}
                ratingBackgroundColor="#c8c7c8"
              />
              <Text
                style={[
                  StyleGuide.semiBold12,
                  StyleGuide.ml5,
                  {color: StyleGuide.colors.lightText, fontWeight: '600'},
                ]}>
                3.2
              </Text>
            </View>
          </View>

          {/* Biography */}
          {BioInfo()}
          {DoctorsNewAmenities()}
          <PriceBoxes />
          {/* Availibilty Timings */}
          <Text style={styles.headings}>المواعيد المتاحة</Text>
          {TimeInfo()}
          {TimeInfoTwo()}
          {/* Certificate */}
          <Text style={styles.headings}>الشهادات</Text>
          {Certificate()}
          {/* Feedback */}
          <Text style={styles.headings}>
            التقييمات{' '}
            <Text
              style={{
                fontSize: 12,
                color: '#B8BEC6',
                fontWeight: '500',
              }}>
              (23 تقييم)
            </Text>
          </Text>
          {Feedbacks(
            'نور الهدى كريم',
            'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايد يديونتيوت لابوري ات دولار ماجري',
          )}
          {Feedbacks(
            'أيمن كريم',
            'لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايد يديونتيوت لابوري ات دولار ماجري. لوريم ايبسوم دولار سيت أميت ,كونسيكتيتور أدايبا يسكينج أليايت,سيت دو أيوسمود تيمبور أنكايد يديونتيوت لابوري ات دولار ماجري',
          )}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headings: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    color: '#2A2A2A',
    marginTop: 20,
    textAlign: 'left',
  },
  shadow: {
    backgroundColor: 'white', // Add your background color here
    padding: 16, // Add your desired padding
    shadowColor: 'rgba(134, 134, 153, 0.10)',
    shadowOffset: {
      width: -4,
      height: -4,
    },
    shadowOpacity: 1,
    shadowRadius: 32,
  },
});

export default DoctorDetails;
