import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {Progress5} from '../../../assets/progress';

const BirthScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Progress5 width="100%" height="6" style={{marginBottom: 20}} />
      <Text style={styles.title}>When were you born?</Text>
      <View style={styles.childContainer}>
        <Text>child</Text>
      </View>
      <View style={styles.buttonContainer}>
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
    marginBottom: 16,
  },
});

export default BirthScreen;
