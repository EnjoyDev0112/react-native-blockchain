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
// import TabNavigator from './TabNavigator'

const NavigationStack = createNativeStackNavigator();

const Navigator = ({isAuth}) => {
  return (
    <NavigationStack.Navigator
      id={undefined}
      //   initialRouteName={isAuth ? ROUTES.TabScreen : ROUTES.StartScreen}
      initialRouteName={ROUTES.StartScreen}
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <NavigationStack.Screen
        component={StartScreen}
        name={ROUTES.StartScreen}
      />
      <NavigationStack.Screen component={AuthScreen} name={ROUTES.AuthScreen} />
      <NavigationStack.Screen
        component={LoginScreen}
        name={ROUTES.LoginScreen}
      />
      <NavigationStack.Screen
        component={RegisterScreen}
        name={ROUTES.RegisterScreen}
      />
      <NavigationStack.Screen
        component={PhoneInputScreen}
        name={ROUTES.PhoneInputScreen}
      />
      <NavigationStack.Screen
        component={VerifyCodeScreen}
        name={ROUTES.VerifyCodeScreen}
      />
      <NavigationStack.Screen
        component={OnboardingScreen}
        name={ROUTES.OnboardingScreen}
      />
      <NavigationStack.Screen
        component={GenderScreen}
        name={ROUTES.GenderScreen}
      />
      <NavigationStack.Screen
        component={BirthScreen}
        name={ROUTES.BirthScreen}
      />
      <NavigationStack.Screen
        component={RelationshipScreen}
        name={ROUTES.RelationshipScreen}
      />
      <NavigationStack.Screen
        component={FamilyNumberScreen}
        name={ROUTES.FamilyNumberScreen}
      />
      <NavigationStack.Screen
        component={VehicleScreen}
        name={ROUTES.VehicleScreen}
      />
      <NavigationStack.Screen
        component={SuccessSignupScreen}
        name={ROUTES.SuccessSignupScreen}
      />
      {/* <NavigationStack.Screen
        component={TabNavigator}
        name={ROUTES.TabScreen}
      /> */}
    </NavigationStack.Navigator>
  );
};

export default Navigator;
