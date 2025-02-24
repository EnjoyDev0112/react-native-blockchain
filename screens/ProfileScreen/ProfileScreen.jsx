import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {FONTS} from '../../theme/font';
import {MainHeader} from '../../components/HeaderComponent/MainHeader';
import {DefaultAvatarSVG} from '../../assets/images';
import {
  ArrowLeftSVG,
  EditSVG,
  Notify2SVG,
  ProfileSVG,
  LanguageSVG,
  LockSVG,
  QRCodeSVG,
  CopySVG,
  ArrowRight2SVG,
} from '../../assets/icons';
import {ROUTES} from '../../navigation/routes';
import CustomSwitch from '../../components/SwitchComponent';
import {useTheme} from '../../context/ThemeContext';

const ProfileScreen = ({navigation}) => {
  const {theme, toggleTheme} = useTheme();
  const [allowNotify, setAllowNotify] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(theme.name === 'dark');

  useEffect(() => {
    if (isDarkMode) {
      toggleTheme('dark');
    } else {
      toggleTheme('light');
    }
  }, [isDarkMode]);

  return (
    <View style={styles.container}>
      <MainHeader
        title="My Settings"
        navigation={navigation}
        showQRCode={true}
      />
      <View style={styles.profileContainer}>
        <View style={styles.profileAvatarContainer}>
          <DefaultAvatarSVG width={120} height={120} />
          <View style={styles.profileEditContainer}>
            <EditSVG width={24} height={24} />
          </View>
        </View>
        <Text style={styles.profileName}>Puerto Rico</Text>
        <Text style={styles.profileEmail}>
          puerto@gmail.com | +01 234 567 89
        </Text>
      </View>
      <View style={styles.settingsContainer}>
        <View style={styles.groupContainer}>
          <View style={styles.settingItem}>
            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                navigation.navigate(ROUTES.EditProfileScreen);
              }}>
              <View style={styles.settingDescription}>
                <ProfileSVG width={16} height={16} />
                <Text style={styles.text}>Edit Profile</Text>
              </View>
              <ArrowRight2SVG width={16} height={16} />
            </TouchableOpacity>
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingDescription}>
              <Notify2SVG width={16} height={16} />
              <Text style={styles.text}>Notifications</Text>
            </View>
            <CustomSwitch value={allowNotify} onValueChange={setAllowNotify} />
          </View>
          <View style={styles.settingItem}>
            <TouchableOpacity
              style={styles.settingItem}
              onPress={() => {
                navigation.navigate(ROUTES.LanguageScreen);
              }}>
              <View style={styles.settingDescription}>
                <LanguageSVG width={16} height={16} />
                <Text style={styles.text}>Language</Text>
              </View>
              <Text style={styles.pinkText}>English</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.settingItem}>
            <View style={styles.settingDescription}>
              <Notify2SVG width={16} height={16} />
              <Text style={styles.text}>Dark Mode</Text>
            </View>
            <CustomSwitch value={isDarkMode} onValueChange={setIsDarkMode} />
          </View>
          <View style={styles.settingItem}>
            <View style={styles.settingDescription}>
              <LockSVG width={16} height={16} />
              <Text style={styles.text}>Privacy Policy</Text>
            </View>
            <ArrowRight2SVG width={16} height={16} />
          </View>
        </View>
        <View style={styles.groupContainer}>
          <View style={styles.settingDescription}>
            <QRCodeSVG width={24} height={24} />
            <View style={styles.textContainer}>
              <Text style={styles.text}>Wallet Address</Text>
              <View style={styles.walletContainer}>
                <Text style={styles.grayText}>0x32Be343B94f860124dC4fEe</Text>
                <CopySVG width={16} height={16} />
              </View>
            </View>
          </View>
        </View>
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
  profileContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
    marginBottom: 34,
  },
  profileAvatarContainer: {
    width: 120,
    height: 120,
    display: 'flex',
    alignItems: 'flex-end',
  },
  profileEditContainer: {
    width: 46,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    borderWidth: 5,
    borderColor: 'white',
    marginTop: -32,
  },
  profileName: {
    color: 'white',
    fontSize: 22,
    fontFamily: FONTS.BOLD,
    textAlign: 'center',
    marginTop: 20,
  },
  profileEmail: {
    color: '#848383',
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
    textAlign: 'center',
  },
  settingsContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
  },
  groupContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 16,
    width: '100%',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#4A4A4A',
    padding: 8,
  },
  settingItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  settingDescription: {
    display: 'flex',
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
  },
  textContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2,
  },
  walletContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 13,
    alignItems: 'center',
  },
  grayText: {
    color: '#8E8D8D',
    fontSize: 12,
    fontFamily: FONTS.REGULAR,
    gap: 13,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  pinkText: {
    color: '#CC296D',
    fontSize: 14,
    fontFamily: FONTS.REGULAR,
  },
});

export default ProfileScreen;
