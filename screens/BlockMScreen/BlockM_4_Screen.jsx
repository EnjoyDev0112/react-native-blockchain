import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {FONTS} from '../../theme/font';
import {PrimaryButton} from '../../components/ButtonComponent';
import {CustomSelectList} from '../../components/SelecterComponent';
import {MainHeader} from '../../components/HeaderComponent/MainHeader';

const BlockM_4_Screen = ({navigation}) => {
  const [habits, setHabits] = useState('Take an Online Source');
  const dataList = [
    {
      key: 1,
      value: 'Take an Online Source',
      label: 'Take an Online Source',
    },
    {
      key: 2,
      value: 'Youtube Videos',
      label: 'Youtube Videos',
    },
    {
      key: 3,
      value: 'Offline Course',
      label: 'Offline Course',
    },
    {
      key: 4,
      value: 'Self learning',
      label: 'Self learning',
    },
  ];
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <Text style={styles.title}>TOKENS</Text>
      <Text style={styles.subtitle}>How do you keeps your skills updated?</Text>
      <View style={styles.childContainer}>
        <CustomSelectList
          type="secondary"
          dataList={dataList}
          value={habits}
          setValue={setHabits}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="NEXT"
          onPress={() => navigation.navigate(ROUTES.BlockM_5_Screen)}
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
    fontSize: 16,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 44,
  },
  subtitle: {
    color: 'white',
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
    textAlign: 'left',
    marginBottom: 12,
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

export default BlockM_4_Screen;
