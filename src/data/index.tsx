import {ImageSourcePropType} from 'react-native/types';

export interface Icons {
  id: number;
  name: string;
  linkPlaceHolder: string;
  image: ImageSourcePropType;
}

export const social: Icons[] = [
  {
    id: 1,
    name: 'Facebook',
    linkPlaceHolder: 'Facebook Profile Link',
    image: require('../assets/images/socialIcons/facebook.png'),
  },
  {
    id: 4,
    name: 'TikTok',
    linkPlaceHolder: 'TikTok Profile Link',
    image: require('../assets/images/socialIcons/tiktok.png'),
  },
  {
    id: 2,
    name: 'Instagram',
    linkPlaceHolder: 'Instagram Profile Link',
    image: require('../assets/images/socialIcons/instagram.png'),
  },
  {
    id: 3,
    name: 'Snapchat',
    linkPlaceHolder: 'Snapchat Profile',
    image: require('../assets/images/socialIcons/snapchat.png'),
  },
  {
    id: 5,
    name: 'Twitter',
    linkPlaceHolder: 'Twitter Profile Link',
    image: require('../assets/images/socialIcons/twitter.png'),
  },
  {
    id: 6,
    name: 'Twitch',
    linkPlaceHolder: 'Twitch Profile Link',
    image: require('../assets/images/socialIcons/twitch.png'),
  },
  {
    id: 7,
    name: 'Spotify',
    linkPlaceHolder: 'Spotify Link',
    image: require('../assets/images/socialIcons/spotify.png'),
  },
  {
    id: 8,
    name: 'SoundCloud',
    linkPlaceHolder: 'SoundCloud Profile Link',
    image: require('../assets/images/socialIcons/soundcloud.png'),
  },
  {
    id: 9,
    name: 'Bigo',
    linkPlaceHolder: 'Bigo Profile Link',
    image: require('../assets/images/socialIcons/bigo.png'),
  },
];
