import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {DropdownSVG} from '../../assets/icons';
import {FONTS} from '../../theme/font';
import {CountryPicker} from 'react-native-country-codes-picker';

export const CustomCountrySelector = ({
  value,
  setValue,
  label = 'Country',
  placeholder = 'Choose country',
  textColor = 'white',
}) => {
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TouchableOpacity
        onPress={() => setShowCountryPicker(true)}
        style={styles.selectorContainer}>
        {value ? (
          <Text style={[styles.text, {color: textColor}]}>{value}</Text>
        ) : (
          <Text style={[styles.text, {color: '#7C7B7B'}]}>{placeholder}</Text>
        )}
        <DropdownSVG />
      </TouchableOpacity>
      <CountryPicker
        show={showCountryPicker}
        pickerButtonOnPress={item => {
          setValue(item.code);
          setShowCountryPicker(false);
        }}
        onBackdropPress={() => {
          setShowCountryPicker(false);
        }}
        theme="light"
        style={{
          modal: {
            height: 500,
          },
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    display: 'flex',
    borderBottomWidth: 2,
    borderColor: '#555',
  },
  label: {
    fontSize: 12,
    marginBottom: 5,
    color: 'white',
    lineHeight: 12,
    fontFamily: FONTS.REGULAR,
  },
  selectorContainer: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 24,
    marginBottom: 5,
  },
  text: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    borderColor: 'white',
  },
});
