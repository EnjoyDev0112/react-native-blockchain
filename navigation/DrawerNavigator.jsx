import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React from 'react';
import {ROUTES} from './routes';
import TabNavigator from './TabNavigator';
import {
  BlockMGraySVG,
  BlockMUDIGraySVG,
  BlockMEDGraySVG,
  BlockEDGraySVG,
  BlockRIDEGraySVG,
  ArtistNFTGraySVG,
  BlockLOANSGraySVG,
  BlockFARMGraySVG,
  MessageGraySVG,
  ProfileGraySVG,
  LogoutSVG,
} from '../assets/icons';
import {FONTS} from '../theme/font';
import {View, Text, TouchableOpacity} from 'react-native';
import {LogoSVG} from '../assets/images';
import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

const drawerItems = [
  {
    label: 'BLOCK M',
    icon: <BlockMGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK MUDI',
    icon: <BlockMUDIGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK MED',
    icon: <BlockMEDGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK ED',
    icon: <BlockEDGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK RIDE',
    icon: <BlockRIDEGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK NFT',
    icon: <ArtistNFTGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK LOANS',
    icon: <BlockLOANSGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'BLOCK FARM',
    icon: <BlockFARMGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'MESSAGES',
    icon: <MessageGraySVG />,
    screen: ROUTES.TabScreen,
  },
  {
    label: 'MY PROFILE',
    icon: <ProfileGraySVG />,
    screen: ROUTES.TabScreen,
  },
];

const DrawerContent = props => {
  const {navigation} = props;
  return (
    <View style={{padding: 20, gap: 24, height: '100%'}}>
      <LogoSVG
        onPress={() => navigation.navigate(ROUTES.TabScreen)}
        width={100}
        height={19}
      />
      {drawerItems.map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}
          onPress={() => navigation.navigate(item.screen)}>
          {item.icon}
          <Text
            style={{color: '#c7c6c6', fontSize: 14, fontFamily: FONTS.REGULAR}}>
            {item.label}
          </Text>
        </TouchableOpacity>
      ))}
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          marginBottom: 8,
        }}>
        <TouchableOpacity
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 16,
          }}
          onPress={() => navigation.navigate(ROUTES.StartScreen)}>
          <LogoutSVG />
          <Text
            style={{color: '#F05757', fontSize: 16, fontFamily: FONTS.BOLD}}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName={ROUTES.TabScreen}
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#232323',
          width: 250,
        },
      }}
      drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen
        name={ROUTES.TabScreen}
        component={TabNavigator}
        options={{
          drawerIcon: () => <BlockMGraySVG />,
          drawerLabel: 'BLOCK M',
          drawerLabelStyle: {
            color: '#c7c6c6',
            backgroundColor: '#232323',
            fontSize: 14,
            fontFamily: FONTS.REGULAR,
          },
          drawerItemStyle: {
            padding: 0,
            backgroundColor: '#232323',
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
