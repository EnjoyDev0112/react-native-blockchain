import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import BlockM_1_Screen from '../screens/BlockMScreen/BlockM_1_Screen';
import BlockM_2_Screen from '../screens/BlockMScreen/BlockM_2_Screen';
import BlockM_3_Screen from '../screens/BlockMScreen/BlockM_3_Screen';
import BlockM_4_Screen from '../screens/BlockMScreen/BlockM_4_Screen';
import BlockM_5_Screen from '../screens/BlockMScreen/BlockM_5_Screen';
import HomeScreen from '../screens/HomeScreen';
import {ROUTES} from './routes';

const BlockMStack = createNativeStackNavigator();
const BlockMNavigator = () => {
  return (
    <BlockMStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={ROUTES.HomeScreen}>
      <BlockMStack.Group>
        <BlockMStack.Screen name={ROUTES.HomeScreen} component={HomeScreen} />
        <BlockMStack.Screen
          name={ROUTES.BlockM_1_Screen}
          component={BlockM_1_Screen}
        />
        <BlockMStack.Screen
          name={ROUTES.BlockM_2_Screen}
          component={BlockM_2_Screen}
        />
        <BlockMStack.Screen
          name={ROUTES.BlockM_3_Screen}
          component={BlockM_3_Screen}
        />
        <BlockMStack.Screen
          name={ROUTES.BlockM_4_Screen}
          component={BlockM_4_Screen}
        />
        <BlockMStack.Screen
          name={ROUTES.BlockM_5_Screen}
          component={BlockM_5_Screen}
        />
      </BlockMStack.Group>
    </BlockMStack.Navigator>
  );
};

export default BlockMNavigator;
