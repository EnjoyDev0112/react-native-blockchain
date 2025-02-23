import React from 'react';
import {Switch, View, StyleSheet} from 'react-native';

const CustomSwitch = ({value, onValueChange}) => {
  return (
    <View style={styles.container}>
      <Switch
        value={value}
        onValueChange={onValueChange}
        trackColor={{false: 'transparent', true: '#F487B3'}}
        thumbColor={value ? '#DC2366' : '#A9AAA4'}
        thumbStyle={{width: 16, height: 16}}
        style={{transform: [{scaleX: 0.8}, {scaleY: 0.8}]}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CustomSwitch;
