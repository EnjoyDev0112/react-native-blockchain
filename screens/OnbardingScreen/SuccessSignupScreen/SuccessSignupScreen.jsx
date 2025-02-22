import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {SuccessSignupSVG} from '../../../assets/images';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';

const SuccessSignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <SuccessSignupSVG width={218} height={216} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>
          Congratulations! You've Successfully Signed Up for BlockM!
        </Text>
        <Text style={[styles.description, {marginTop: 24}]}>
          You've earned BlockM tokens, which you can use for services like
          doctor appointments, shopping, rides, and even converting to local
          currency. Enjoy your rewards!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="NEXT"
          onPress={() => navigation.navigate(ROUTES.TabScreen)}
        />
      </View>
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
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 60,
    paddingRight: 20,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
  },
  description: {
    color: '#DCDCDC',
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
    textAlign: 'center',
    lineHeight: 20,
    paddingLeft: 12,
    paddingRight: 12,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex-grow',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingTop: 32,
    marginBottom: 40,
  },
});

export default SuccessSignupScreen;
