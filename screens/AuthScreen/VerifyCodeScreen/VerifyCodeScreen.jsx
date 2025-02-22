import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {ROUTES} from '../../../navigation/routes';
import {FONTS} from '../../../theme/font';
import {PrimaryButton} from '../../../components/ButtonComponent';
import {AuthHeader} from '../../../components/HeaderComponent/AuthHeader';
import {Progress3} from '../../../assets/progress';
import LinearGradient from 'react-native-linear-gradient';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';

const VerifyCodeScreen = ({navigation}) => {
  const CELL_COUNT = 4;
  const [code, setCode] = useState('');

  const ref = useBlurOnFulfill({code, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value: code,
    setValue: setCode,
  });
  return (
    <View style={styles.container}>
      <Progress3 width="100%" height="6" style={{marginBottom: 20}} />
      <AuthHeader navigation={navigation} />
      <View style={{width: 260, display: 'flex'}}>
        <Text style={styles.title}>Enter 4 digit verification code</Text>
        <Text style={styles.description}>
          Code send to +9232045*** . This code will expired in{' '}
          <Text style={{color: '#E6291D'}}>01:30</Text>
        </Text>
      </View>

      <CodeField
        ref={ref}
        {...props}
        value={code}
        onChangeText={setCode}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <View
            // Make sure that you pass onLayout={getCellOnLayoutHandler(index)} prop to root component of "Cell"
            onLayout={getCellOnLayoutHandler(index)}
            key={index}
            style={styles.cellRoot}>
            {symbol || isFocused ? (
              <LinearGradient
                style={styles.cellRoot}
                colors={['#DC2366', '#4F5CAA']}
                start={{x: 1, y: 0.3}}
                end={{x: 0, y: 0}}>
                <Text style={styles.cellText}>
                  {symbol || (isFocused ? <Cursor /> : null)}
                </Text>
              </LinearGradient>
            ) : (
              <Text style={styles.cellText}>
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          </View>
        )}
      />

      <View style={styles.buttonContainer}>
        <PrimaryButton
          label={'CONTINUE'}
          onPress={() => {
            navigation.navigate(ROUTES.OnboardingScreen);
          }}
        />
        <Text
          style={{
            color: 'white',
            fontSize: 14,
            fontFamily: FONTS.REGULAR,
            textAlign: 'center',
          }}></Text>
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
    paddingBottom: 30,
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontFamily: FONTS.BOLD,
    lineHeight: 30,
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    color: '#807E7E',
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
    marginBottom: 60,
  },

  codeFieldRoot: {
    marginTop: 20,
    width: 280,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cellRoot: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#292929',
    borderRadius: 50,
  },
  cellText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  focusCell: {
    backgroundColor: 'green',
  },
  buttonContainer: {
    flex: 1,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
});

export default VerifyCodeScreen;
