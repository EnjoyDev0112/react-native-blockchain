import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {FONTS} from '../../theme/font';

const MessageScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Message</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#171717',
    paddingLeft: 32,
    paddingRight: 16,
    paddingTop: 24,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 36,
  },
});

export default MessageScreen;
