import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {NotifySVG, UserLogoSVG} from '../../../assets/icons';
import {LogoSVG} from '../../../assets/images';

export const HomeHeader = () => (
  <View style={styles.container}>
    <LogoSVG width={100} height={19} />
    <View style={styles.iconContainer}>
      <NotifySVG width={24} height={24} />
      <UserLogoSVG width={24} height={24} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 56,
    width: '100%',
    paddingVertical: 16,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
});
