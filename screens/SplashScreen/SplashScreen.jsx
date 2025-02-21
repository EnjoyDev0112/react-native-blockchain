import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';
import {ROUTES} from '../../navigation/routes';
import Navigator from '../../navigation/RootNavigator';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({}) => {
  const [isShowSplashScreen, setIsShowSplashScreen] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsShowSplashScreen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return isShowSplashScreen ? (
    <View style={styles.container}>
      <Image
        source={require('../../assets/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
    </View>
  ) : (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: '#171717'}}>
        <Navigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;
