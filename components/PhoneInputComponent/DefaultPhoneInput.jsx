import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ArrowDownSVG} from '../../assets/icons';
import PhoneInput from 'react-native-phone-number-input';

import {FONTS} from '../../theme/font';

export const CustomPhoneInput = ({
  value,
  setValue,
  label = 'Phone Number',
  placeholder = 'Enter your valid number',
  textInputColor = 'white',
}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={{color: 'white', fontSize: 13, fontFamily: FONTS.REGULAR}}>
        {label}
      </Text>
      <PhoneInput
        defaultValue={value}
        defaultCode="US"
        layout="first"
        placeholder={placeholder}
        renderDropdownImage={<ArrowDownSVG />}
        textInputStyle={{
          fontSize: 16,
          marginTop: 2,
          color: textInputColor,
        }}
        textInputProps={{
          backgroundColor: '#171717',
          color: textInputColor,
          placeholderTextColor: '#7C7B7B',
          selectionColor: 'white',
        }}
        flagButtonStyle={{
          backgroundColor: '#171717',
          autoFocus: true,
          marginRight: -16,
          paddingTop: 4,
          marginLeft: -16,
          gap: -4,
        }}
        codeTextStyle={{color: 'white'}}
        containerStyle={styles.phoneContainer}
        textContainerStyle={styles.textInput}
        onChangeFormattedText={text => {}}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  textInputContainer: {
    width: '100%',
    borderColor: '#555',
    borderBottomWidth: 2,
  },
  phoneContainer: {
    color: 'white',
    width: '100%',
    height: 50,
  },
  textInput: {
    backgroundColor: '#171717',
  },
});
