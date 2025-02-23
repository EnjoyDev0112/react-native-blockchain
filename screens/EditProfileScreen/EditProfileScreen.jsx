import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {FONTS} from '../../theme/font';
import {PrimaryButton} from '../../components/ButtonComponent';
import {MainHeader} from '../../components/HeaderComponent/MainHeader';
import {CustomTextInput} from '../../components/TextInputComponent';
import {CustomPhoneInput} from '../../components/PhoneInputComponent/DefaultPhoneInput';

const EditProfileScreen = ({navigation}) => {
  const [firstName, setFirstName] = useState('Puerto');
  const [lastName, setLastName] = useState('Rico');
  const [email, setEmail] = useState('puerto22@gmail.com');
  const [country, setCountry] = useState('USA');
  const [password, setPassword] = useState('123456789');
  const [number, setNumber] = useState('');

  return (
    <View style={styles.container}>
      <MainHeader
        navigation={navigation}
        title="Edit Profile"
        showSettings={false}
      />
      <View style={styles.childContainer}>
        <CustomTextInput
          label="First Name"
          placeholder="Enter name"
          value={firstName}
          onChangeText={setFirstName}
          inputTextStyle="gray"
        />
        <CustomTextInput
          label="Last Name"
          placeholder="Enter name"
          value={lastName}
          onChangeText={setLastName}
          inputTextStyle="gray"
        />
        <CustomTextInput
          label="Email"
          placeholder="Enter email"
          value={email}
          onChangeText={setEmail}
          inputTextStyle="gray"
        />
        <CustomTextInput
          label="Country"
          placeholder="Choose country"
          value={country}
          onChangeText={setCountry}
          inputTextStyle="gray"
        />
        <CustomTextInput
          type="password"
          label="Password"
          placeholder="Enter here"
          value={password}
          onChangeText={setPassword}
          inputTextStyle="gray"
        />
        <CustomPhoneInput
          value={number}
          setValue={setNumber}
          textInputColor="gray"
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton label="SUBMIT" onPress={() => navigation.goBack()} />
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
    marginTop: 40,
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: 24,
  },
  buttonContainer: {
    width: '100%',
    display: 'flex-grow',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingTop: 32,
    marginBottom: 40,
  },
});

export default EditProfileScreen;
