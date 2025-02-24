import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {FONTS} from '../../theme/font';

export const CustomPhoneInput = ({
  countryNumber = '+1',
  setCountryNumber,
  phoneNumber,
  setPhoneNumber,
  label = '',
  errorMessage = '',
}) => {
  const [countryCode, setCountryCode] = useState('US');
  const handleChangeCountry = country => {
    setCountryNumber(`+${country?.callingCode}`);
    setCountryCode(country?.cca2);
  };
  const handleChangeText = value => {
    setPhoneNumber(value);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CountryPicker
          containerButtonStyle={styles.countryPickerButton}
          countryCode={countryCode}
          withCallingCode
          withCallingCodeButton
          withFilter
          withFlag
          withFlagButton={false}
          onSelect={handleChangeCountry}
          theme={{
            fontSize: 26,
            fontFamily: FONTS.BOLD,
            primaryColor: 'white',
            primaryColorVariant: '#534F4F',
            backgroundColor: '#171717',
            onBackgroundTextColor: 'white',
          }}
          translation="eng"
        />
        <TextInput
          style={styles.textInput}
          keyboardType="phone-pad"
          autoCorrect={true}
          autoComplete="tel"
          textContentType="telephoneNumber"
          onChangeText={handleChangeText}
          value={phoneNumber}
          placeholder="(000) 000-00-00"
          placeholderTextColor="#534F4F"
          selectionColor="white"
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: 350,
    marginBottom: 16,
  },
  label: {
    color: '#333',
    fontSize: 18,
    marginBottom: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
  countryPickerButton: {
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingHorizontal: 10,
    color: 'white',
    height: 28,
    display: 'flex',
    borderRightWidth: 3,
    borderColor: '#555',
    marginTop: 2,
  },
  errorBorder: {
    borderColor: '#FF0000',
  },
  textInput: {
    fontFamily: FONTS.BOLD,
    fontSize: 26,
    color: 'white',
    flex: 1,
    paddingLeft: 12,
  },
  errorInput: {
    borderColor: '#FF0000',
  },
  errorText: {
    color: '#FF0000',
    fontSize: 14,
    marginTop: 4,
  },
});
