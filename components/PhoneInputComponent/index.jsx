import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import CountryPicker from 'react-native-country-picker-modal';
import {FONTS} from '../../theme/font';

export const CustomPhoneInput = ({
  countryCode,
  phone,
  onChangeCountry,
  onChangePhone,
  label,
  errorMessage = '',
}) => {
  const handleChangeCountry = country => {
    onChangeCountry(country);
    // props.clearErrorMessage?.();
  };
  const handleChangeText = value => {
    onChangePhone(value);
    // props.clearErrorMessage?.();
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <CountryPicker
          containerButtonStyle={styles.countryPickerButton}
          countryCode={countryCode || 'DE'}
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
          value={phone}
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
    fontSize: 24,
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
