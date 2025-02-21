import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {LanguageSVG, DropdownSVG, ArrowRightSVG} from '../../assets/icons';
import {StartImageSVG} from '../../assets/images';
import {FONTS} from '../../theme/font';
import {SecondaryButton} from '../../components/ButtonComponent';

const StartScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.languageSelectButtonContainer}>
        <LanguageSVG width={16} height={16} />

        <Text style={styles.languageSelectButtonText}>English</Text>
        <DropdownSVG />
      </View>
      <View style={styles.imageContainer}>
        <StartImageSVG width={236} height={236} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>The Most</Text>
        <Text style={styles.title}>Trusted & Secure Crypto Community</Text>
        <Text style={styles.description}>
          Do you want a completely FREE way to earn real money? Money "that you
          can send to your family in our Blockm Wallet, get a Doctor at
          BlockMed, a lesson at BlockMed, pay for products at BigMudi, a
          delivery/ride at BlockRide, get a low-interest quick loan at
          BlockLoans?
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <SecondaryButton onPress={() => navigation.navigate(ROUTES.AuthScreen)}>
          <>
            <View
              style={{
                width: 32,
                height: 32,
                borderRadius: 16,
                backgroundColor: 'white',
                marginRight: 10,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <ArrowRightSVG />
            </View>
            <Text style={{color: 'white', fontSize: 13, fontWeight: '500'}}>
              SWIPE TO GET STARTED
            </Text>
          </>
        </SecondaryButton>
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
  languageSelectButtonContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'flex-end',
    gap: 10,
  },
  imageContainer: {
    display: 'flex',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 32,
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
    fontSize: 14,
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
    paddingTop: 32,
    marginBottom: 16,
  },
});

export default StartScreen;
