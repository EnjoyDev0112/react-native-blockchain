import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {AuthLogoSVG} from '../../assets/images';
import {FONTS} from '../../theme/font';
import {PrimaryButton, OutlinedButton} from '../../components/ButtonComponent';

const AuthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <AuthLogoSVG width={150} height={190} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Earn & Share Crypto in one app</Text>
        <Text style={styles.description}>
          It's easier to make cryptocurrency transactions in your hand, wherever
          and whenever.
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label={'CREATE ACCOUNT'}
          onPress={() => navigation.navigate(ROUTES.RegisterScreen)}
        />
        <OutlinedButton
          label={'LOGIN'}
          onPress={() => navigation.navigate(ROUTES.LoginScreen)}
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
    paddingTop: 24,
    paddingBottom: 24,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 32,
    marginBottom: 64,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  languageSelectButtonText: {
    color: 'white',
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontFamily: 'Sansation-Bold',
    lineHeight: 30,
    textAlign: 'center',
  },
  description: {
    color: '#DCDCDCEE',
    fontFamily: FONTS.REGULAR,
    lineHeight: 20,
    fontSize: 16,
    textAlign: 'center',
    paddingTop: 16,
    paddingLeft: 10,
    paddingRight: 10,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex-grow',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 16,
    marginBottom: 32,
  },
});

export default AuthScreen;
