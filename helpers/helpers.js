import {Dimensions, Platform} from 'react-native'

export const SCREEN_WIDTH = Dimensions.get('screen').width
export const SCREEN_HEIGHT = Dimensions.get('screen').height

export const isAndroid = Platform.OS === 'android'
export const isIos = Platform.OS === 'ios'

export const Color = {
  background: '#171717',
  modal: '#232323',
  pink: '#DC2366',
  commonText: 'white',
  secondaryText: '#BBB',
  textDescription: '#8F8F8F',
  border: '#4A4A4A',
  placeholder: '#7C7B7B',
}

