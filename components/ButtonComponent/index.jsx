import React from 'react';
import {TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import styles from './styles';

export const PrimaryButton = ({label, onPress}) => (
  <TouchableOpacity
    style={{width: '100%'}}
    activeOpacity={0.8}
    onPress={onPress}>
    <LinearGradient
      style={[styles.container, {borderRadius: 40}]}
      colors={['#DC2366', '#4F5CAA']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      <Text style={styles.buttonText}>{label}</Text>
    </LinearGradient>
  </TouchableOpacity>
);

export const OutlinedButton = ({label, onPress}) => (
  <TouchableOpacity
    style={[
      styles.container,
      {width: '100%', borderWidth: 1, borderColor: 'white'},
    ]}
    activeOpacity={0.8}
    onPress={onPress}>
    <Text style={styles.buttonText}>{label}</Text>
  </TouchableOpacity>
);

export const SecondaryButton = ({children, onPress}) => (
  <TouchableOpacity
    style={{width: '100%'}}
    activeOpacity={0.8}
    onPress={onPress}>
    <LinearGradient
      style={[styles.container, {borderRadius: 40}]}
      colors={['#DC2366', '#4F5CAA']}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}>
      {children}
    </LinearGradient>
  </TouchableOpacity>
);

export const IconButton = ({children, buttonStyle, onPress}) => (
  <TouchableOpacity style={[buttonStyle]} activeOpacity={0.8} onPress={onPress}>
    {children}
  </TouchableOpacity>
);
