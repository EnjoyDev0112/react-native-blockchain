import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {FONTS} from '../../theme/font';
import {PrimaryButton} from '../../components/ButtonComponent';
import {MainHeader} from '../../components/HeaderComponent/MainHeader';
import {EarnedSVG} from '../../assets/images';

const BlockM_5_Screen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <View style={styles.childContainer}>
        <EarnedSVG width={158} height={187} />
        <Text style={styles.title}>
          Congratulations! You've Earned<Text>{'   '}</Text>Tokens!
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="EXIT TO MAIN MENU"
          onPress={() => navigation.navigate(ROUTES.HomeScreen)}
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
  },
  childContainer: {
    flex: 1,
    flexDirection: 'column',
    width: 340,
    marginTop: 100,
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginTop: 32,
    lineHeight: 32,
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

export default BlockM_5_Screen;
