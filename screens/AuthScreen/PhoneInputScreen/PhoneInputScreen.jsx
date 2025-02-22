import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {AuthHeader} from '../../../components/HeaderComponent/AuthHeader';
import {Progress2} from '../../../assets/progress';
import {CustomPhoneInput} from '../../../components/PhoneInputComponent';
const PhoneInputScreen = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');

  return (
    <View style={styles.container}>
      <Progress2 width="100%" height="6" style={{marginBottom: 20}} />
      <AuthHeader navigation={navigation} />
      <Text style={styles.title}>Enter your number</Text>
      <Text style={styles.description}>
        We will send you a verification code
      </Text>
      <CustomPhoneInput
        phone={phoneNumber}
        onChangePhone={setPhoneNumber}
        countryCode={countryCode}
        onChangeCountry={setCountryCode}
      />
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label={'CONTINUE'}
          onPress={() => {
            navigation.navigate(ROUTES.VerifyCodeScreen);
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: FONTS.REGULAR,
            textAlign: 'center',
          }}></Text>
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
    paddingBottom: 30,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#807E7E',
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
    marginBottom: 100,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default PhoneInputScreen;
