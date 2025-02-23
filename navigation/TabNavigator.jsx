import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {
  HomeSVG,
  HomeFilledSVG,
  ProfileSVG,
  ProfileFilledSVG,
  MessageSVG,
  MessageFilledSVG,
} from '../assets/icons';
import TabBar from '../components/TabBarComponent';

import MessageScreen from '../screens/MessageScreen';
import ProfileScreen from '../screens/ProfileScreen';
import BlockMNavigator from './BlockMNavigator';
import ProfileNavigator from './ProfileNavigator';
import {ROUTES} from './routes';

const TabStack = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <TabStack.Navigator
      id={undefined}
      tabBar={props => <TabBar {...props} />}
      initialRouteName={ROUTES.ProfileScreen}
      screenOptions={({route}) => ({
        unmountOnBlur: true,
        tabBarShowLabel: false,
        tabBarVisible: true,
        headerShown: false,
      })}>
      <TabStack.Screen
        component={BlockMNavigator}
        name={ROUTES.HomeScreen}
        options={{
          tabBarLabel: 'Main Menu',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <HomeFilledSVG width={size} height={size} />
            ) : (
              <HomeSVG width={size} height={size} />
            ),
        }}
      />
      <TabStack.Screen
        component={MessageScreen}
        name={ROUTES.MessageScreen}
        options={{
          tabBarLabel: 'Messages',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <MessageFilledSVG width={size} height={size} />
            ) : (
              <MessageSVG width={size} height={size} />
            ),
        }}
      />
      <TabStack.Screen
        component={ProfileNavigator}
        name={ROUTES.ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({focused, size}) =>
            focused ? (
              <ProfileFilledSVG width={size} height={size} />
            ) : (
              <ProfileSVG width={size} height={size} />
            ),
        }}
      />
    </TabStack.Navigator>
  );
};

export default TabNavigator;
