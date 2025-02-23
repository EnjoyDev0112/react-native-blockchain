import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {FONTS} from '../../theme/font';
import {EyeIconSVG, EyeOffIconSVG} from '../../assets/icons';

export const CustomTextInput = ({
  type = 'text',
  keyboardType = 'default',
  label = '',
  placeholder = '',
  value = '',
  onChange = () => {},
  style = {},
  inputTextStyle = 'white',
  ...props
}) => {
  const [isSecureTextEntry, setIsSecureTextEntry] = useState(
    type === 'password',
  );
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      {type === 'password' ? (
        <View
          style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 10,
            justifyContent: 'space-between',
          }}>
          <TextInput
            placeholder={placeholder}
            placeholderTextColor="#7C7B7B"
            value={value}
            onChangeText={onChange}
            keyboardType={keyboardType}
            style={[styles.input, style, {flex: 1, color: inputTextStyle}]}
            selectionColor="white"
            secureTextEntry={isSecureTextEntry}
            {...props}
          />
          <TouchableOpacity
            onPress={() => setIsSecureTextEntry(!isSecureTextEntry)}>
            {isSecureTextEntry ? (
              <EyeIconSVG width={24} height={24} />
            ) : (
              <EyeOffIconSVG width={24} height={24} />
            )}
          </TouchableOpacity>
        </View>
      ) : (
        <TextInput
          placeholder={placeholder}
          placeholderTextColor="#7C7B7B"
          value={value}
          onChangeText={onChange}
          keyboardType={keyboardType}
          style={[styles.input, style, {color: inputTextStyle}]}
          selectionColor="white"
          {...props}
        />
      )}
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
  input: {
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    width: '100%',
    borderColor: 'white',
    height: 24,
    marginBottom: 5,
  },
});
