import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {Progress7} from '../../../assets/progress';
import {CustomSelectList} from '../../../components/SelecterComponent';

const FamilyNumberScreen = ({navigation}) => {
  const [familyNumber, setFamilyNumber] = useState('More than 5');
  const dataList = [
    {key: '1', value: 'More than 5', label: 'More than 5'},
    {key: '2', value: 'Less than 5', label: 'Less than 5'},
  ];
  return (
    <View style={styles.container}>
      <Progress7 width="100%" height="6" style={{marginBottom: 20}} />
      <Text style={styles.title}>How many people are in your household?</Text>
      <View style={styles.childContainer}>
        <CustomSelectList
          dataList={dataList}
          value={familyNumber}
          setValue={setFamilyNumber}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="NEXT"
          onPress={() => navigation.navigate(ROUTES.VehicleScreen)}
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
    paddingHorizontal: 24,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex-grow',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    paddingTop: 32,
    marginBottom: 16,
  },
});

export default FamilyNumberScreen;
