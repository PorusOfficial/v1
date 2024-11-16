import {Text, Pressable, StyleSheet, Dimensions } from 'react-native';
import React, { useState } from 'react';
import Theme from '../../../styles/theme';


const { width } = Dimensions.get('window');


const SmallPrimaryButton = ({name, onPress, Icon, w = 180, h = 42}) => {
  const fontSize = 18;
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        {
          backgroundColor: pressed ? '#333333' :'rgba(0, 0, 0, 0.75)',//Theme.colors.primary,
          width: w !== 180 ? w : '180',
          height: h,
          flexDirection:'row',
        },
      ]}>
      <Icon />
      <Text style={[styles.btnName,{fontSize}]}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    flex:1,
        height : 60,
    //paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    backgroundColor: '#0a9396',
    alignItems: 'center',

    columnGap: 10,
  },
  btnName: {
    color: Theme.colors.text,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing : 1,
   
  },
});

export default SmallPrimaryButton;
