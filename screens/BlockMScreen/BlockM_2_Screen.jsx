import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../navigation/routes';
import {FONTS} from '../../theme/font';
import {PrimaryButton} from '../../components/ButtonComponent';
import {CustomSelectList} from '../../components/SelecterComponent';
import {MainHeader} from '../../components/HeaderComponent/MainHeader';

const BlockM_2_Screen = ({navigation}) => {
  const [habits, setHabits] = useState('Yes, I am covered individually');
  const dataList = [
    {
      key: 1,
      value: 'Yes, I am covered individually',
      label: 'Yes, I am covered individually',
    },
    {
      key: 2,
      value: 'Yes, I have a family cover',
      label: 'Yes, I have a family cover',
    },
    {
      key: 3,
      value: 'No',
      label: 'No',
    },
  ];
  return (
    <View style={styles.container}>
      <MainHeader navigation={navigation} />
      <Text style={styles.title}>TOKENS</Text>
      <Text style={styles.subtitle}>Do you have a medical insurance?</Text>
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
          onPress={() => navigation.navigate(ROUTES.BlockM_3_Screen)}
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

export default BlockM_2_Screen;
