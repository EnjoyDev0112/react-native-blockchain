import {StyleSheet} from 'react-native';

import {FONTS} from '../../theme/font';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    paddingTop: 12,
    paddingBottom: 28,
    paddingHorizontal: 35,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#232323',
  },
  tabBarItemStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 6,
  },
  tabBarText: {
    fontSize: 14,
    fontWeight: 'bold',
    fontFamily: FONTS.bold,
  },
});

export default styles;
