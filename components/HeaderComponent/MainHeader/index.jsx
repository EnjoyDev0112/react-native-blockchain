import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {ArrowLeftSVG, SettingsSVG} from '../../../assets/icons';
import {FONTS} from '../../../theme/font';

export const MainHeader = ({navigation}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeftSVG width={18} height={13} />
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontFamily: FONTS.BOLD, color: '#F1F1F1'}}>
      BlockM
    </Text>
    <TouchableOpacity onPress={() => {}}>
      <SettingsSVG width={5} height={21} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 21,
    width: '100%',
  },
});
