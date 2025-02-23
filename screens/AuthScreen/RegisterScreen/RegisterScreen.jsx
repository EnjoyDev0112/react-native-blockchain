import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {
  PrimaryButton,
  OutlinedButton,
} from '../../../components/ButtonComponent';
import {AuthHeader} from '../../../components/HeaderComponent/AuthHeader';
import {Progress1} from '../../../assets/progress';
import {CustomTextInput} from '../../../components/TextInputComponent';
import Checkbox from 'react-native-check-box';
import {CustomCountrySelector} from '../../../components/CountrySelectorComponent';

const RegisterScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  return (
    <View style={styles.container}>
      <Progress1 width="100%" height="6" style={{marginBottom: 20}} />
      <AuthHeader navigation={navigation} />
      <Text style={styles.title}>Create your account</Text>
      <View style={styles.inputContainer}>
        <CustomTextInput
          label="First Name"
          placeholder="Enter name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <CustomTextInput
          label="Last Name"
          placeholder="Enter name"
          value={lastName}
          onChangeText={setLastName}
        />
        <CustomTextInput
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
        />
        <CustomCountrySelector value={country} setValue={setCountry} />
        <CustomTextInput
          type="password"
          label="Password"
          placeholder="Enter here"
          value={password}
          onChangeText={setPassword}
        />
      </View>
      <View
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          flexDirection: 'row',
          gap: 8,
          marginTop: 24,
        }}>
        <Checkbox
          isChecked={isChecked}
          onClick={() => setIsChecked(!isChecked)}
          checkBoxColor="#DC2366"
          checkedCheckBoxColor="#DC2366"
        />
        <View style={{flex: 1}}>
          <Text
            style={{
              color: '#8f8f8f',
              fontSize: 12,
              lineHeight: 18,
            }}>
            By clicking here, you are agreeing to our{' '}
            <Text style={styles.pinkText}>Terms & Conditions</Text>
          </Text>
        </View>
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label={'NEXT'}
          onPress={() => navigation.navigate(ROUTES.PhoneInputScreen)}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: FONTS.REGULAR,
            textAlign: 'center',
          }}>
          Already have an account?{' '}
          <Text
            onPress={() => {
              navigation.navigate(ROUTES.LoginScreen);
            }}
            style={styles.pinkText}>
            Log in
          </Text>
        </Text>
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
    rowGap: 24,
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 48,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    gap: 16,
    marginBottom: 16,
  },
  pinkText: {
    color: '#DC2366',
    fontFamily: FONTS.BOLD,
    fontWeight: 'bold',
  },
});

export default RegisterScreen;
