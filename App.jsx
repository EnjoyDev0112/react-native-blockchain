/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from "@react-navigation/native"

import { View } from "react-native"
import SplashScreen from "./screens/SplashScreen"
import { setCustomText } from "react-native-global-props";
import { FONTS } from "./theme/font";

// Define global props for Text components
const customTextProps = {
  style: {
    fontFamily: FONTS.REGULAR,
  },
};

// Set global Text props
setCustomText(customTextProps);

function App() {
  return (
      <View style={{ flex: 1}}>
          <NavigationContainer>
            <SplashScreen />
          </NavigationContainer>
      </View>
  )
}

export default App