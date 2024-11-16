import {Text, Pressable, StyleSheet, View, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Theme from '../../../styles/theme';

const { width } = Dimensions.get('window');

const SmallSecondaryButton = ({name, onPress, Icon = NaN, w = 180, h = 42}) => {
  const fontSize = 18;

  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: pressed ? '#b5b5e3' : Theme.colors.secondary,
          width: w !== 180 ? w : '180',
          height: h,
        },
      ]}>
      <Icon />
      <Text style={[styles.btnName, {fontSize}]}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    flex:1,
    height: 60,
    //paddingVertical: 10,
   paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: Theme.colors.secondary,
    alignItems: 'center',
    flexDirection: 'row',
    columnGap: 10,
  },
  btnName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default SmallSecondaryButton;
