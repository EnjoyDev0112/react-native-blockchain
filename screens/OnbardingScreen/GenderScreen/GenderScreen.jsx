import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {Progress4} from '../../../assets/progress';
import {CustomSelectList} from '../../../components/SelecterComponent';
const GenderScreen = ({navigation}) => {
  const [gender, setGender] = useState('Male');
  const dataList = [
    {key: 'Male', value: 'Male', label: 'Male'},
    {key: 'Female', value: 'Female', label: 'Female'},
    {key: 'Other', value: 'Other', label: 'Prefer not to say'},
  ];
  return (
    <View style={styles.container}>
      <Progress4 width="100%" height="6" style={{marginBottom: 20}} />
      <Text style={styles.title}>What is your gender?</Text>
      <View style={styles.childContainer}>
        <CustomSelectList
          dataList={dataList}
          value={gender}
          setValue={setGender}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="NEXT"
          onPress={() => navigation.navigate(ROUTES.BirthScreen)}
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
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 36,
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

export default GenderScreen;
