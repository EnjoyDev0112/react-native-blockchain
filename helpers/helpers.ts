import {Dimensions, Platform} from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const isAndroid = Platform.OS === 'android'
export const isIos = Platform.OS === 'ios'

export const Color = {
  primary: '#105475',
  lightPrimary: '#1054751A',
  grey: '#858585',
  lightGrey: '#E3E3E3',
  white: '#FFFFFF',
  black: '#000000',
  yellow: '#FFC444',
  brown: '#794100',
  blue: '#1F8BFF',
  red: '#FF0004',
  lightRed: '#FF5900',
  mainBk: '#F6F7FB00',
  green: '#199D64',
}
