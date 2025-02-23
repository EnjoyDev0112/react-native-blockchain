import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {Progress5} from '../../../assets/progress';
import DatePicker from 'react-native-date-picker';
import moment from 'moment';

const BirthScreen = ({navigation}) => {
  const [date, setDate] = useState(new Date());
  const [age, setAge] = useState(0);

  const calculateAge = selectedDate => {
    const today = moment();
    const birthDate = moment(selectedDate);
    const calculatedAge = today.diff(birthDate, 'years');
    setAge(calculatedAge);
  };

  useEffect(() => {
    calculateAge(date);
  }, [date]);

  return (
    <View style={styles.container}>
      <Progress5 width="100%" height="6" style={{marginBottom: 20}} />
      <Text style={styles.title}>When were you born?</Text>
      <View style={styles.childContainer}>
        {/* inline date picker */}
        <DatePicker
          date={date}
          onDateChange={date => {
            setDate(date);
            calculateAge(date);
          }}
          mode="date"
          textColor="white"
          theme="dark"
        />
      </View>
      <View style={styles.buttonContainer}>
        {age != 0 && (
          <Text style={styles.ageText}>You are {age} years old</Text>
        )}
        <PrimaryButton
          label="NEXT"
          onPress={() => navigation.navigate(ROUTES.RelationshipScreen)}
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
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 36,
  },
  ageText: {
    color: 'white',
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginBottom: 18,
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex-grow',
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingTop: 32,
    marginBottom: 40,
  },
});

export default BirthScreen;
