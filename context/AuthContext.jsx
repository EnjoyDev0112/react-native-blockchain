import {createContext, useContext, useReducer, useEffect} from 'react';
import {Alert} from 'react-native';
// import * as Notifications from 'expo-notifications';

import {endPoints} from '../services/ApiConstants';
import CustomAsyncStorage from '../services/AsyncStorage';
import {BaseUrl} from '../common/Constants.json';

const HANDLERS = {
  SIGN_UP_USER: 'SIGN_UP_USER',
  VERIFIY_USER: 'VERIFIY_USER',
  SET_USER: 'SET_USER',
  LOGIN_USER: 'LOGIN_USER',
  SUBMIT_QUESTION_1: 'SUBMIT_QUESTION_1',
  SUBMIT_QUESTIONS: 'SUBMIT_QUESTIONS',
};

const initialState = {
  isAuthenticated: false,
  user: null,
  registrationInfo: null,
  verificationInfo: null,
  questionnaireAnswers: null,
  isRegistering: false,
};

const handlers = {
  [HANDLERS.SIGN_UP_USER]: (state, action) => {
    console.log('SignUp Info: ', action.payload);
    return {
      ...state,
      verificationInfo: action.payload,
      registrationInfo: action.payload,
      isRegistering: true,
    };
  },
  [HANDLERS.VERIFIY_USER]: (state, action) => {
    console.log('verificationInfo: ', action.payload);
    return {...state, verificationInfo: action.payload};
  },
  [HANDLERS.SET_USER]: (state, action) => {
    console.log('SET USER INFO: ', action.payload);
    return {...state, user: action.payload};
  },
  [HANDLERS.LOGIN_USER]: (state, action) => {
    console.log('SET USER INFO: ', action.payload);
    return {...state, user: action.payload, isAuthenticated: true};
  },
  [HANDLERS.SUBMIT_QUESTION_1]: (state, action) => {
    console.log('QUESTION 1 INFO: ', action.payload);
    return {
      ...state,
      questionnaireAnswers: action.payload,
      user: {
        ...state.user,
        profile: {...state.user.profile, ...action.payload},
      },
    };
  },
  [HANDLERS.SUBMIT_QUESTIONS]: (state, action) => {
    console.log('QUESTIONS FINAL INFO: ', action.payload);
    return {
      ...state,
      user: {
        ...state.user,
        profile: {...state.user.profile, ...action.payload},
        isRegistering: false,
      },
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // async function registerForPushNotificationsAsync() {
  //   let token;

  //   const {status: existingStatus} = await Notifications.getPermissionsAsync();
  //   let finalStatus = existingStatus;

  //   if (existingStatus !== 'granted') {
  //     const {status} = await Notifications.requestPermissionsAsync();
  //     finalStatus = status;
  //   }
  //   if (finalStatus !== 'granted') {
  //     alert('Failed to get push token for push notification!');
  //     return;
  //   }
  //   token = (await Notifications.getExpoPushTokenAsync()).data;
  //   console.log('DEVICE Token is:', token);

  //   CustomAsyncStorage.setDeviceId(token);
  //   return token;
  // }

  const initialize = async () => {
    console.log('initialising...');

    try {
      const token = await CustomAsyncStorage.getAuthToken();
      console.log('Token is: ', token);

      if (!token.length) {
        return;
      }

      // registerForPushNotificationsAsync();

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token}`);

      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(
        `${BaseUrl + endPoints.getMe}`,
        requestOptions,
      );

      const json = await response.json();
      console.log('JSON: ', json);

      if (json.success) {
        dispatch({
          type: HANDLERS.LOGIN_USER,
          payload: json.data,
        });
      } else {
        return;
      }

      // CustomAsyncStorage.removeAuthToken();
    } catch {
      error => {
        // console.log('CATCH ERROR IS: ', error);
        return;
      };
    }
  };

  const verifyOTP = async (body, navigation, nextPage) => {
    console.log('BODY::: - verify otp ', body);
    navigation.navigate(nextPage);

    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        phone: body.phone,
        otp: body.otp,
        type: 'reverse_cli',
        platform: 'android',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const response = await fetch(
        `${BaseUrl + endPoints.verifyOtp}`,
        requestOptions,
      );

      if (!response.ok) {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      }

      const json = await response.json();
      console.log('JSON: ', json);

      if (json.success) {
        CustomAsyncStorage.setAuthToken(json.token);

        await initialize();

        Alert.alert('Success', ``, [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate(nextPage);
            },
          },
        ]);
      } else {
        Alert.alert('Error', `${json.error}. Please try again.`, [
          {text: 'OK'},
        ]);
      }
    } catch {
      error => {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      };
    }
  };

  const regenerateOtp = async body => {
    console.log('BODY - regenerate::: ', body);
    try {
      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        ...body,
      });

      console.log('RAW: ', raw);

      var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      console.log('REQUEST OPTIONS: ', requestOptions);

      const response = await fetch(
        `${BaseUrl + endPoints.regenerateOtp}`,
        requestOptions,
      );

      if (!response.ok) {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      }

      const json = await response.json();
      console.log('JSON: ', json);

      if (json.success) {
        Alert.alert('Success', `${json.message}`, [
          {
            text: 'OK',
            onPress: () => {},
          },
        ]);
      } else {
        Alert.alert('Error', `${json.error}. Please try again.`, [
          {text: 'OK'},
        ]);
      }
    } catch {
      error => {
        console.log('CATCH ERROR: ', error);
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      };
    }
  };

  const saveUserDetails = body => {
    dispatch({
      type: HANDLERS.SIGN_UP_USER,
      payload: body,
    });
  };

  const registerUser = async (body, navigation) => {
    console.log('BODY is: ', body);
    try {
      const deviceToken = await CustomAsyncStorage.getDeviceId();

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        ...body,
        deviceId: deviceToken,
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const response = await fetch(
        `${BaseUrl + endPoints.registerUser}`,
        requestOptions,
      );

      if (!response.ok) {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      }

      const json = await response.json();
      console.log('JSON: ', json);

      if (json.success) {
        dispatch({
          // type: HANDLERS.VERIFIY_USER,
          type: HANDLERS.SIGN_UP_USER,
          payload: json.data,
        });

        Alert.alert('Success', `${json.message}`, [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Phone Verification Sign Up');
            },
          },
        ]);
      } else {
        Alert.alert('Error', `${json.error}. Please try again.`, [
          {text: 'OK'},
        ]);
      }
    } catch {
      error => {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      };
    }
  };

  const submitQuestions1 = async (body, navigation) => {
    dispatch({
      type: HANDLERS.SUBMIT_QUESTION_1,
      payload: body,
    });
    navigation.navigate('Block M 2');
  };

  const submitQuestionaire = async (body, navigation) => {
    console.log('BODY is: ', body);
    console.log('user ID ', state.user);
    const id = state.user.profile.id;
    try {
      const token = await CustomAsyncStorage.getAuthToken();
      console.log('Token is: ', token);

      if (!token.length) {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      }

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');
      myHeaders.append('Authorization', `Bearer ${token}`);
      var raw = JSON.stringify({
        ...body,
      });

      var requestOptions = {
        method: 'PUT',
        body: raw,
        headers: myHeaders,
        redirect: 'follow',
      };

      const response = await fetch(
        `${BaseUrl + endPoints.updateProfile + id}`,
        requestOptions,
      );

      if (!response.ok) {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      }

      const json = await response.json();
      console.log('JSON: ', json);

      if (json.success) {
        dispatch({
          type: HANDLERS.SIGN_UP_USER,
          payload: json.data,
        });
        Alert.alert('Success', ``, [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Block M 3');
            },
          },
        ]);
      } else {
        Alert.alert('Error', `${json.error}. Please try again.`, [
          {text: 'OK'},
        ]);
      }
    } catch {
      error => {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      };
    }
  };

  const loginUserWithPhone = async (body, navigation) => {
    console.log('BODY is: ', body);

    try {
      const deviceToken = await CustomAsyncStorage.getDeviceId();

      var myHeaders = new Headers();
      myHeaders.append('Content-Type', 'application/json');

      var raw = JSON.stringify({
        number: body.number,
        deviceId: deviceToken,
        type: 'reverse_cli',
        platform: 'android',
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow',
      };

      const response = await fetch(
        `${BaseUrl + endPoints.phoneLogin}`,
        requestOptions,
      );

      if (!response.ok) {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      }

      const json = await response.json();
      console.log('JSON: ', json);

      if (json.success) {
        dispatch({
          type: HANDLERS.VERIFIY_USER,
          payload: json.data,
        });
        Alert.alert('Success', `${json.message}`, [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('Phone Verification Sign In');
            },
          },
        ]);
      } else {
        Alert.alert('Error', `${json.message}. Please try again.`, [
          {text: 'OK'},
        ]);
      }
    } catch {
      error => {
        Alert.alert('Error', `Please try again.`, [{text: 'OK'}]);
      };
    }
  };

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        registerUser,
        verifyOTP,
        saveUserDetails,
        regenerateOtp,
        loginUserWithPhone,
        submitQuestionaire,
        submitQuestions1,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const AuthConsumer = AuthContext.Consumer;

export const useAuth = () => {
  return useContext(AuthContext);
};
