import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {FONTS} from '../../theme/font';
import {PrimaryButton} from '../../components/ButtonComponent';
import {CustomSelectList} from '../../components/SelecterComponent';
import {MainHeader} from '../../components/HeaderComponent/MainHeader';

const BlockM_1_Screen = ({navigation}) => {
  const [habits, setHabits] = useState('Shop frequently and offline only');
  const dataList = [
    {
      key: 1,
      value: 'Shop frequently and offline only',
      label: 'Shop frequently and offline only',
    },
    {
      key: 2,
      value: 'Shop frequently & online mostly',
      label: 'Shop frequently & online mostly',
    },
    {
      key: 3,
      value: 'I love shopping online & offline both',
      label: 'I love shopping online & offline both',
    },
  ];
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <Text style={styles.title}>TOKENS</Text>
      <Text style={styles.subtitle}>
        Which of the following define your shopping habits?
      </Text>
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
          onPress={() => navigation.navigate(ROUTES.BlockM_2_Screen)}
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

export default BlockM_1_Screen;
