import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {StyleSheet} from 'react-native'
import {BackIconSVG} from '../../../assets/icons'

export const AuthHeader = ({navigation}) => (
  <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <BackIconSVG width={24} height={24} />
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    height: 62,
    width: '100%',
    backgroundColor: '#171717',
    paddingBottom: 18,
  },
});
