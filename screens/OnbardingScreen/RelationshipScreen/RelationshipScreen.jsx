import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {Progress6} from '../../../assets/progress';
import {CustomSelectList} from '../../../components/SelecterComponent';

const RelationshipScreen = ({navigation}) => {
  const [relationship, setRelationship] = useState('Single');
  const dataList = [
    {key: 'Single', value: 'Single', label: 'Single'},
    {key: 'Married', value: 'Married', label: 'Married'},
    {key: 'Divorced', value: 'Divorced', label: 'Divorced'},
    {key: 'Widowed', value: 'Widowed', label: 'Widowed'},
  ];

  return (
    <View style={styles.container}>
      <Progress6 width="100%" height="6" style={{marginBottom: 20}} />
      <Text style={styles.title}>What is your relationship status?</Text>
      <View style={styles.childContainer}>
        <CustomSelectList
          dataList={dataList}
          value={relationship}
          setValue={setRelationship}
        />
      </View>
      <View style={styles.buttonContainer}>
        <PrimaryButton
          label="NEXT"
          onPress={() => navigation.navigate(ROUTES.FamilyNumberScreen)}
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

export default RelationshipScreen;
