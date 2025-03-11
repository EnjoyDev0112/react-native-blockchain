import AsyncStorage from '@react-native-async-storage/async-storage';

export const AUTH_TOKEN_KEY = 'auth_token';
export const DEVICE_ID = 'device_id';
export const APP_CHANNEL_KEY = 'app_channel';
export const APP_CHANNEL = 'd0b9465d852a16e4ce97586e69ede763';
export const APP_ID_KEY = 'app_id';
export const ROLE_ID_KEY = 'role_id';
export const ROLE_ID = '5ebd001991b7084528ebeb1a';
export const LOGGEDIN_USERID = 'user_id';
export const Is_PROFILE_COMPLETED = 'is_profile_completed';
export const REWARD_POINTS = 'REWARD_POINTS';
export const APP_ID = '5ebbd55ceac2970b388c3e50';

export default class CustomAsyncStorage {
  /**
   * @returns {Promise<string>}
   */

  static getAuthToken() {
    return AsyncStorage.getItem(AUTH_TOKEN_KEY);
  }

  static removeAuthToken() {
    return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
  }

  static setAuthToken(token) {
    AsyncStorage.setItem(AUTH_TOKEN_KEY, token);
  }

  static getDeviceId() {
    return AsyncStorage.getItem(DEVICE_ID);
  }

  static removeDeviceId() {
    return AsyncStorage.removeItem(DEVICE_ID);
  }

  static setDeviceId(token) {
    AsyncStorage.setItem(DEVICE_ID, token);
  }

  static setAppChannelKey() {
    AsyncStorage.setItem(APP_CHANNEL_KEY, 'd0b9465d852a16e4ce97586e69ede763');
  }

  static getAppChannelKey() {
    return AsyncStorage.getItem(APP_CHANNEL_KEY);
  }

  static getAppId() {
    return AsyncStorage.getItem(APP_ID_KEY);
  }

  static setAppId(token) {
    AsyncStorage.setItem(APP_ID_KEY, token);
  }

  static getRoleId() {
    return AsyncStorage.getItem(ROLE_ID_KEY);
  }

  static setRoleId() {
    AsyncStorage.setItem(ROLE_ID_KEY, '5ebd001991b7084528ebeb1a');
  }

  static getUserId() {
    return AsyncStorage.getItem(LOGGEDIN_USERID);
  }

  static setUserId(user_id) {
    AsyncStorage.setItem(LOGGEDIN_USERID, user_id);
  }

  static getIsProfileCompleted() {
    return AsyncStorage.getItem(Is_PROFILE_COMPLETED);
  }

  static setIsProfileCompleted(isProfileCompleted) {
    AsyncStorage.setItem(Is_PROFILE_COMPLETED, isProfileCompleted);
  }

  static getRewardPoints() {
    return AsyncStorage.getItem(REWARD_POINTS) == '' ||
      AsyncStorage.getItem(REWARD_POINTS) == null ||
      AsyncStorage.getItem(REWARD_POINTS) == undefined
      ? 0
      : AsyncStorage.getItem(REWARD_POINTS);
  }

  static setRewardPoints(rewardPoints) {
    AsyncStorage.setItem(REWARD_POINTS, rewardPoints);
  }
}
