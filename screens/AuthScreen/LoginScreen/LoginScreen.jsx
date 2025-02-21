import React, {useEffect, useState, useRef} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {EyeIconSVG, EyeOffIconSVG, ArrowDownSVG} from '../../../assets/icons';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {AuthHeader} from '../../../components/HeaderComponent/AuthHeader';
import PhoneInput from 'react-native-phone-number-input';

const LoginScreen = ({navigation}) => {
  const phoneInput = useRef(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handleSignIn = () => {
    console.log(phoneInput.current.getNumber());
  };

  return (
    <View style={styles.container}>
      <AuthHeader navigation={navigation} />
      <Text style={styles.title}>Log in</Text>
      <View style={styles.inputContainer}>
        <View style={styles.textInputContainer}>
          <Text
            style={{color: 'white', fontSize: 13, fontFamily: FONTS.REGULAR}}>
            Phone Number
          </Text>
          <PhoneInput
            ref={phoneInput}
            defaultValue={''}
            defaultCode="US"
            layout="first"
            placeholder="Enter your valid number"
            renderDropdownImage={<ArrowDownSVG />}
            textInputStyle={{
              color: 'white',
              fontSize: 16,
              marginTop: 2,
            }}
            textInputProps={{
              backgroundColor: '#171717',
              color: 'white',
              placeholderTextColor: '#7C7B7B',
              onSubmitEditing: handleSignIn,
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
        <View style={styles.textInputContainer}>
          <Text
            style={{color: 'white', fontSize: 13, fontFamily: FONTS.REGULAR}}>
            Password
          </Text>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={styles.passwordInput}
              placeholder="Enter here"
              placeholderTextColor="#7C7B7B"
              secureTextEntry={!isPasswordVisible}
              selectionColor="white"
            />
            <TouchableOpacity
              onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
              {!isPasswordVisible ? (
                <EyeIconSVG width={24} height={24} />
              ) : (
                <EyeOffIconSVG width={24} height={24} />
              )}
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.pinkText}>Forgot Password?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton label={'SIGN IN'} />
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
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    marginBottom: 60,
  },
  text: {
    color: 'white',
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
  },
  title: {
    color: 'white',
    fontSize: 24,
    lineHeight: '120%',
    textAlign: 'center',
    fontFamily: FONTS.BOLD,
    marginBottom: 24,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex-grow',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    gap: 16,
  },
  phoneContainer: {
    color: 'white',
    width: '100%',
    height: 50,
  },
  textInput: {
    backgroundColor: '#171717',
  },
  countryCodeContainer: {
    flexDirection: 'row',
    color: 'white',
    alignItems: 'center',
    backgroundColor: '#171717',
    paddingHorizontal: 10,
    height: '100%',
  },
  countryCodeText: {
    color: '#B4B4B4',
    marginRight: 5,
    textTransform: 'uppercase',
  },
  textInputContainer: {
    width: '100%',
    borderColor: '#555',
    borderBottomWidth: 2,
    marginTop: 24,
  },
  passwordInput: {
    color: 'white',
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    marginTop: 10,
    marginBottom: 10,
  },
  pinkText: {
    paddingTop: 8,
    color: '#D2276A',
    textAlign: 'right',
    fontFamily: FONTS.BOLD,
    fontSize: 14,
    lineHeight: 12,
    letterSpacing: 0.15,
  },
});

export default LoginScreen;
