import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';
import EditProfileScreen from '../screens/EditProfileScreen/EditProfileScreen';
import {ROUTES} from './routes';

const ProfileStack = createNativeStackNavigator();
const ProfileNavigator = () => {
  return (
    <ProfileStack.Navigator screenOptions={{headerShown: false}}>
      <ProfileStack.Group>
        <ProfileStack.Screen
          name={ROUTES.ProfileScreen}
          component={ProfileScreen}
        />
        <ProfileStack.Screen
          name={ROUTES.EditProfileScreen}
          component={EditProfileScreen}
        />
      </ProfileStack.Group>
    </ProfileStack.Navigator>
  );
};

export default ProfileNavigator;
