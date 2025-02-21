import {SCREEN_HEIGHT, SCREEN_WIDTH} from 'helpers/helpers';
import {Platform, StyleSheet} from 'react-native';

import {Color} from 'helpers/helpers';
import {FONTS} from '../../theme/font';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 40,
    paddingHorizontal: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontFamily: FONTS.BOLD,
  },
});

export default styles;
