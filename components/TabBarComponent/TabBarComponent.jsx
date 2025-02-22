import React from 'react';
import {Text, Pressable, SafeAreaView, View} from 'react-native';

import styles from './style';

const TabBarComponent = ({state, descriptors, navigation, ...rest}) => {
  const currentRoute = state?.routes[state.index];
  const {options} = descriptors[currentRoute?.key];

  return (
    <View
      style={[
        styles.container,
        {display: options?.tabBarVisible ? 'flex' : 'none'},
      ]}>
      {state.routes.map((route, index) => {
        let {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;
        const iconProps = {
          focused: isFocused,
          size: 20,
        };
        const icon =
          typeof options.tabBarIcon === 'function' ? (
            options.tabBarIcon(iconProps)
          ) : (
            <options.tabBarIcon {...iconProps} />
          );

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            style={[styles.tabBarItemStyle]}>
            {icon}
            <Text
              style={[
                styles.tabBarText,
                isFocused ? {color: '#D1276B'} : {color: '#ACB1B5'},
              ]}>
              {label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default TabBarComponent;
