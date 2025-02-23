import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {ArrowLeftSVG, SettingsSVG, QRCodeSVG} from '../../../assets/icons';
import {FONTS} from '../../../theme/font';

export const MainHeader = ({
  title = 'BlockM',
  navigation,
  showSettings = true,
  showQRCode = false,
}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <ArrowLeftSVG width={18} height={13} />
    </TouchableOpacity>
    <Text style={{fontSize: 15, fontFamily: FONTS.BOLD, color: '#F1F1F1'}}>
      {title}
    </Text>
    <View style={{flexDirection: 'row', gap: 10}}>
      <TouchableOpacity onPress={() => {}}>
        {showQRCode && <QRCodeSVG width={21} height={21} />}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}}>
        {showSettings && <SettingsSVG width={5} height={21} />}
      </TouchableOpacity>
    </View>
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
