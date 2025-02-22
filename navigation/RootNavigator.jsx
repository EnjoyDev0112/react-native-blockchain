import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {ROUTES} from './routes';
import AuthScreen from '../screens/AuthScreen';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/AuthScreen/LoginScreen';
import RegisterScreen from '../screens/AuthScreen/RegisterScreen';
import PhoneInputScreen from '../screens/AuthScreen/PhoneInputScreen';
import VerifyCodeScreen from '../screens/AuthScreen/VerifyCodeScreen';
import OnboardingScreen from '../screens/OnbardingScreen';
import BirthScreen from '../screens/OnbardingScreen/BirthScreen';
import FamilyNumberScreen from '../screens/OnbardingScreen/FamilyNumberScreen';
import GenderScreen from '../screens/OnbardingScreen/GenderScreen';
import RelationshipScreen from '../screens/OnbardingScreen/RelationshipScreen';
import SuccessSignupScreen from '../screens/OnbardingScreen/SuccessSignupScreen';
import VehicleScreen from '../screens/OnbardingScreen/VehicleScreen';
import TabNavigator from './TabNavigator';

const Stack = createNativeStackNavigator();

const Navigator = ({isAuth}) => {
  return (
    <Stack.Navigator
      id={undefined}
      //   initialRouteName={isAuth ? ROUTES.TabScreen : ROUTES.StartScreen}
      initialRouteName={ROUTES.StartScreen}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen component={StartScreen} name={ROUTES.StartScreen} />
      <Stack.Screen component={AuthScreen} name={ROUTES.AuthScreen} />
      <Stack.Screen component={LoginScreen} name={ROUTES.LoginScreen} />
      <Stack.Screen component={RegisterScreen} name={ROUTES.RegisterScreen} />
      <Stack.Screen
        component={PhoneInputScreen}
        name={ROUTES.PhoneInputScreen}
      />
      <Stack.Screen
        component={VerifyCodeScreen}
        name={ROUTES.VerifyCodeScreen}
      />
      <Stack.Screen
        component={OnboardingScreen}
        name={ROUTES.OnboardingScreen}
      />
      <Stack.Screen component={GenderScreen} name={ROUTES.GenderScreen} />
      <Stack.Screen component={BirthScreen} name={ROUTES.BirthScreen} />
      <Stack.Screen
        component={RelationshipScreen}
        name={ROUTES.RelationshipScreen}
      />
      <Stack.Screen
        component={FamilyNumberScreen}
        name={ROUTES.FamilyNumberScreen}
      />
      <Stack.Screen component={VehicleScreen} name={ROUTES.VehicleScreen} />
      <Stack.Screen
        component={SuccessSignupScreen}
        name={ROUTES.SuccessSignupScreen}
      />
      <Stack.Screen component={TabNavigator} name={ROUTES.TabScreen} />
    </Stack.Navigator>
  );
};

export default Navigator;
