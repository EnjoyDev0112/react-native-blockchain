import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {WelcomeSVG} from '../../assets/images';
import {FONTS} from '../../theme/font';
import {PrimaryButton} from '../../components/ButtonComponent';

const OnboardingScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <WelcomeSVG width={132} height={212} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Let's get you started!</Text>
        <Text style={[styles.description, {marginTop: 12}]}>
          Just answer a few questions and start earning free money!
        </Text>
        <Text style={[styles.description, {marginTop: 52}]}>
          We’ll ask you some quick questions to set up your account, and you’ll
          be on your way to earning your rewards. It only takes a minute!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="GET STARTED"
          onPress={() => navigation.navigate(ROUTES.GenderScreen)}
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
    color: '#DCDCDC99',
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
    marginBottom: 16,
  },
});

export default OnboardingScreen;
