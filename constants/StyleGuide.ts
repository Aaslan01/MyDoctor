const white = '#fff';
const black = '#000';
const textBlack = '#2A2A2A';
const lightBlack = '#6D6D6D';
const blue = '#1F41BB';
const FbLue = '#1877F2';
const gray = '#ECECEC';
const lightBlue = '#f1f4ff';
const orange = '#FF911C'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import FontSize from './FontSize';
const StyleGuide = {
  colors: {
    darkText: black,
    text: textBlack,
    lightText: lightBlack,
    background: white,
    primary: '#5492FD',
    onPrimary: white,
    secondPrimary: textBlack,
    active: blue,
    borderWithOpacity: '#1f41bb',
    lightPrimary: lightBlue,
    gray: gray,
    disable: '#BBBBBB',
    secondary: '#37474F',
    error: '#C94444',
    grey1: '#737678',
    grey2: '#BBBBBB',
    grey3: '#F2F2F2',
    white: '#FFFFFF',
  },
  mainBackground: {backgroundColor: '#FBFBFB'},
  colorBackground: {backgroundColor: '#fff'},
  secondBackground: {backgroundColor: '#ECECEC'},
  colorWhite: {
    color: '#ffffff',
  },
  colorBlack: {
    color: '#1B1B1B',
  },
  colorRed: {
    color: '#E85451',
  },
  flex1: {
    flex: 1,
  },
  fullBackground: {
    flex: 1,
    backgroundColor: '#F2F2F2',
  },
  mt5: {
    marginTop: 5,
  },
  pp4: {
    paddingHorizontal: wp(4),
  },
  ptp2: {paddingTop: hp(1)},
  jcsb: {
    justifyContent: 'space-between',
  },

  fdr: {flexDirection: 'row'},
  aIc: {alignItems: 'center'},
  fdrjsb: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  fdrac: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fdrsacjcc: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomCenter: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 14,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
  },
  redTextReg: {
    color: '#E85451',
    fontSize: 12,
    fontFamily: 'Urbanist-Regular',
  },
  headingText: {
    fontSize: hp(3.4),
    fontFamily: 'Urbanist-SemiBold',
    color: '#1B1B1B',
  },
  fullButtonText: {
    color: white,
    fontSize: FontSize.medium,
    fontFamily: 'Urbanist-SemiBold',
  },
  regularText: {
    fontFamily: 'Urbanist-Regular',
    color: '#5492FD',
  },
  semiBoldText: {
    fontFamily: 'Urbanist-Bold',
    color: '#5492FD',
  },
  boldText: {
    fontFamily: 'Urbanist-SemiBold',
    color: '#5492FD',
  },
  bottomNavText: {
    fontSize: 10,
    fontFamily: 'Urbanist-Regular',
    color: '#B8BEC6',
  },
  headerText: {
    fontSize: hp(3.4),
    fontFamily: 'Urbanist-SemiBold',
    color: '#1B1B1B',
  },
  headerTextTwo: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    color: '#1B1B1B',
  },
  secondHeaderText: {
    fontSize: hp(2.8),
    fontFamily: 'Urbanist-SemiBold',
    color: '#1B1B1B',
  },
  previewNameText: {
    fontSize: hp(2.4),
    fontFamily: 'Urbanist-SemiBold',
    color: '#fff',
  },
  semiBold18: {
    fontSize: 18,
    fontFamily: 'Urbanist-SemiBold',
    lineHeight: 24,
    color: '#5492FD',
  },
  semiBold16: {
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    color: '#5492FD',
  },
  semiBold16grey: {
    fontSize: 16,
    fontFamily: 'Urbanist-SemiBold',
    color: '#5492FD',
  },
  semiBold14: {
    fontSize: 14,
    fontFamily: 'Urbanist-SemiBold',
    color: '#5492FD',
  },
  semiBold12: {
    fontSize: 12,
    fontFamily: 'Urbanist-SemiBold',
    color: '#5492FD',
  },
  semiBold10: {
    fontSize: 10,
    fontFamily: 'Urbanist-SemiBold',
    color: '#5492FD',
  },
  regular14: {
    fontSize: 14,
    fontFamily: 'Urbanist-Regular',
    color: '#5492FD',
  },
  regular12: {
    fontSize: 12,
    fontFamily: 'Urbanist-Regular',
    color: '#5492FD',
  },
  regular10: {
    fontSize: 10,
    fontFamily: 'Urbanist-Regular',
    color: '#5492FD',
  },
  bottomNavIcon: {height: hp(3.5), width: hp(3.5)},

  // Padding
  p2: {padding: 2},
  p3: {padding: 3},
  p4: {padding: 4},
  p5: {padding: 5},
  p8: {padding: 8},
  p10: {padding: 10},
  p12: {padding: 12},
  p15: {padding: 15},
  p16: {padding: 16},
  p20: {padding: 20},
  p25: {padding: 25},
  p30: {padding: 30},
  p35: {padding: 35},
  p40: {padding: 40},
  p45: {padding: 45},
  // Padding
  // paddingRight
  pr5: {paddingRight: 5},
  pr10: {paddingRight: 10},
  pr15: {paddingRight: 15},
  pr20: {paddingRight: 20},
  pr24: {paddingRight: 24},
  pr25: {paddingRight: 25},
  pr30: {paddingRight: 30},
  pr35: {paddingRight: 35},
  pr40: {paddingRight: 40},
  pr45: {paddingRight: 45},
  // paddingRight
  // paddingTop
  pt0: {paddingTop: 0},
  pt5: {paddingTop: 5},
  pt8: {paddingTop: 8},
  pt10: {paddingTop: 10},
  pt12: {paddingTop: 12},
  pt15: {paddingTop: 15},
  pt18: {paddingTop: 18},
  pt20: {paddingTop: 20},
  pt24: {paddingTop: 24},
  pt25: {paddingTop: 25},
  pt30: {paddingTop: 30},
  pt35: {paddingTop: 35},
  pt40: {paddingTop: 40},
  pt45: {paddingTop: 45},
  pt76: {paddingTop: 76},

  // paddingTop
  // paddingBottom
  pb5: {paddingBottom: 5},
  pb10: {paddingBottom: 10},
  pb15: {paddingBottom: 15},
  pb20: {paddingBottom: 20},
  pb25: {paddingBottom: 25},
  pb30: {paddingBottom: 30},
  pb35: {paddingBottom: 35},
  pb40: {paddingBottom: 40},
  pb45: {paddingBottom: 45},
  // paddingBottom
  // paddingLeft
  pl5: {paddingLeft: 5},
  pl10: {paddingLeft: 10},
  pl12: {paddingLeft: 12},
  pl16: {paddingLeft: 16},
  pl18: {paddingLeft: 18},
  pl20: {paddingLeft: 20},
  pl24: {paddingLeft: 24},
  pl25: {paddingLeft: 25},
  pl30: {paddingLeft: 30},
  pl35: {paddingLeft: 35},
  pl40: {paddingLeft: 40},
  pl45: {paddingLeft: 45},
  // paddingLeft
  // paddingHorizontal
  ph0: {paddingHorizontal: 0},
  ph5: {paddingHorizontal: 5},
  ph6: {paddingHorizontal: 6},
  ph8: {paddingHorizontal: 8},
  ph10: {paddingHorizontal: 10},
  ph12: {paddingHorizontal: 12},
  ph15: {paddingHorizontal: 15},
  ph16: {paddingHorizontal: 16},
  ph18: {paddingHorizontal: 18},
  ph20: {paddingHorizontal: 20},
  ph23: {paddingHorizontal: 23},
  ph25: {paddingHorizontal: 25},
  ph30: {paddingHorizontal: 30},
  ph35: {paddingHorizontal: 35},
  ph40: {paddingHorizontal: 40},
  ph45: {paddingHorizontal: 45},
  // paddingHorizontal
  // paddingVertical
  pv3: {paddingVertical: 3},
  pv4: {paddingVertical: 4},
  pv5: {paddingVertical: 5},
  pv6: {paddingVertical: 6},
  pv8: {paddingVertical: 8},
  pv10: {paddingVertical: 10},
  pv12: {paddingVertical: 12},
  pv15: {paddingVertical: 15},
  pv20: {paddingVertical: 20},
  pv25: {paddingVertical: 25},
  pv30: {paddingVertical: 30},
  pv32: {paddingVertical: 32},
  pv34: {paddingVertical: 34},
  pv35: {paddingVertical: 35},
  pv40: {paddingVertical: 40},
  pv45: {paddingVertical: 45},
  // paddingVertical
  // margin
  m0: {margin: 0},
  m5: {margin: 5},
  m10: {margin: 10},
  m15: {margin: 15},
  m20: {margin: 20},
  m25: {margin: 25},
  m30: {margin: 30},
  m35: {margin: 35},
  m40: {margin: 40},
  m45: {margin: 45},
  // margin
  // paddingRight
  mr0: {marginRight: 0},
  mr5: {marginRight: 5},
  mr6: {marginRight: 6},
  mr8: {marginRight: 8},
  mr10: {marginRight: 10},
  mr12: {marginRight: 12},
  mr15: {marginRight: 15},
  mr16: {marginRight: 16},
  mr18: {marginRight: 18},
  mr20: {marginRight: 20},
  mr25: {marginRight: 25},
  mr30: {marginRight: 30},
  mr35: {marginRight: 35},
  mr40: {marginRight: 40},
  mr45: {marginRight: 45},
  // marginRight
  // marginTop
  mt0: {marginTop: 0},
  mt2: {marginTop: 2},
  mt4: {marginTop: 4},
  mt5: {marginTop: 5},
  mt6: {marginTop: 6},
  mt8: {marginTop: 8},
  mt10: {marginTop: 10},
  mt12: {marginTop: 12},
  mt14: {marginTop: 14},
  mt15: {marginTop: 15},
  mt16: {marginTop: 16},
  mt17: {marginTop: 17},
  mt18: {marginTop: 18},
  mt20: {marginTop: 20},
  mt25: {marginTop: 25},
  mt28: {marginTop: 28},
  mt30: {marginTop: 30},
  mt35: {marginTop: 35},
  mt40: {marginTop: 40},
  mt45: {marginTop: 45},
  mt52: {marginTop: 52},
  mt72: {marginTop: 72},

  // marginTop
  // marginBottom
  mb0: {marginBottom: 0},
  mb2: {marginBottom: 2},
  mb4: {marginBottom: 4},
  mb5: {marginBottom: 5},
  mb6: {marginBottom: 6},
  mb8: {marginBottom: 8},
  mb10: {marginBottom: 10},
  mb12: {marginBottom: 12},
  mb15: {marginBottom: 15},
  mb20: {marginBottom: 20},
  mb25: {marginBottom: 25},
  mb28: {marginBottom: 28},
  mb30: {marginBottom: 30},
  mb35: {marginBottom: 35},
  mb40: {marginBottom: 40},
  mb43: {marginBottom: 43},
  mb45: {marginBottom: 45},
  mb60: {marginBottom: 60},
  mb70: {marginBottom: 70},
  mb80: {marginBottom: 80},
  // marginBottom
  // marginLeft
  ml0: {marginLeft: 0},
  ml5: {marginLeft: 5},
  ml10: {marginLeft: 10},
  ml12: {marginLeft: 12},
  ml15: {marginLeft: 15},
  ml16: {marginLeft: 16},
  ml20: {marginLeft: 20},
  ml25: {marginLeft: 25},
  ml30: {marginLeft: 30},
  ml35: {marginLeft: 35},
  ml40: {marginLeft: 40},
  ml45: {marginLeft: 45},
  // marginLeft

  // marginHorizontal
  mh5: {marginHorizontal: 5},
  mh10: {marginHorizontal: 10},
  mh14: {marginHorizontal: 14},
  mh15: {marginHorizontal: 15},
  mh16: {marginHorizontal: 16},
  mh20: {marginHorizontal: 20},
  mh25: {marginHorizontal: 25},
  mh30: {marginHorizontal: 30},
  mh35: {marginHorizontal: 35},
  mh40: {marginHorizontal: 40},
  mh45: {marginHorizontal: 45},
  // marginHorizontal
  // marginVertical
  mv2: {marginVertical: 2},
  mv5: {marginVertical: 5},
  mv8: {marginVertical: 8},
  mv10: {marginVertical: 10},
  mv15: {marginVertical: 15},
  mv20: {marginVertical: 20},
  mv25: {marginVertical: 25},
  mv30: {marginVertical: 30},
  mv35: {marginVertical: 35},
  mv40: {marginVertical: 40},
  mv45: {marginVertical: 45},
};

export default StyleGuide;
