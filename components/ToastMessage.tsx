// import {View, Text, Image} from 'react-native';
// import React from 'react';
// import Toast from 'react-native-toast-message';
// import StyleGuide from '../constants/StyleGuide';

// export const SuccessToast = ({title}: {title: string}) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         height: 55,
//         margin: 10,
//         borderRadius: 8,
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         // position: 'absolute',
//         bottom: 5,
//         // zIndex: 100,
//       }}>
//       <View
//         style={{
//           backgroundColor: StyleGuide.colors.secondPrimary,
//           width: '2%',
//           borderTopStartRadius: 8,
//           borderBottomStartRadius: 8,
//           height: 55,
//         }}
//       />
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '98%',
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../assets/images/valid.png')}
//             style={{height: 25, width: 25}}
//           />
//         </View>
//         <Text
//           style={{
//             color: StyleGuide.colors.secondPrimary,
//             width: '80%',
//             paddingLeft: 12,
//             paddingRight: 6,
//             fontSize: 12,
//           }}>
//           {title}
//         </Text>
//       </View>
//     </View>
//   );
// };
// export const FailureToast = ({title}: {title: string}) => {
//   return (
//     <View
//       style={{
//         flexDirection: 'row',
//         backgroundColor: '#fff',
//         height: 55,
//         margin: 10,
//         borderRadius: 8,
//         elevation: 5,
//         shadowColor: '#000',
//         shadowOffset: {
//           width: 0,
//           height: 2,
//         },
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         // position: 'absolute',
//         bottom: 5,
//         // zIndex: 100,
//       }}>
//       <View
//         style={{
//           backgroundColor: StyleGuide.colors.secondPrimary,
//           width: '2%',
//           borderTopStartRadius: 8,
//           borderBottomStartRadius: 8,
//           height: 55,
//         }}
//       />
//       <View
//         style={{
//           flexDirection: 'row',
//           justifyContent: 'center',
//           alignItems: 'center',
//           width: '98%',
//         }}>
//         <View style={{alignItems: 'center'}}>
//           <Image
//             source={require('../assets/images/invalid.png')}
//             style={{height: 25, width: 25}}
//           />
//         </View>
//         <Text
//           style={{
//             color: StyleGuide.colors.secondPrimary,
//             width: '80%',
//             paddingLeft: 12,
//             paddingRight: 6,
//             fontSize: 12,
//           }}>
//           {title}
//         </Text>
//       </View>
//     </View>
//   );
// };

// interface ShowToastInterface {
//   type: 'success' | 'failure';
//   text: string;
//   position?: any;
//   timeInMilliSeconds?: number;
// }

// export const ToastMessage = ({
//   type,
//   text,
//   timeInMilliSeconds,
//   position,
// }: ShowToastInterface) => {
//   Toast.show({
//     type: type,
//     text1: text,
//     position: 'bottom',
//     visibilityTime: timeInMilliSeconds ?? 5000,
//     bottomOffset: 20,
//   });
// };

// ToastMessage.defaultProps = {
//   position: 'bottom',
// };
