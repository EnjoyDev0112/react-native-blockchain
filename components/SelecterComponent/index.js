import React from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {RadioSVG, RadioFilledSVG} from '../../assets/icons';
import {FONTS} from '../../theme/font';

export const CustomSelectList = ({dataList, value, setValue}) => {
  return (
    <View style={styles.container}>
      {dataList.map((item, index) => (
        <View
          key={index}
          style={{
            display: 'flex',
            width: '100%',
            borderBottomWidth: index === dataList.length - 1 ? 0 : 1,
            borderColor: '#4A4A4A',
          }}>
          <TouchableOpacity
            style={styles.item}
            key={index}
            onPress={() => setValue(item.value)}>
            <Text style={styles.label}>{item.label}</Text>
            {item.value === value ? <RadioFilledSVG /> : <RadioSVG />}
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%',
    backgroundColor: '#171717',
    rowGap: 8,
  },
  item: {
    paddingVertical: 16,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  label: {
    color: 'white',
    fontSize: 16,
    fontFamily: FONTS.REGULAR,
  },
});
