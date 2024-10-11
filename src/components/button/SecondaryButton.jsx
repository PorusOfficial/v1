import {Text, Pressable, StyleSheet, View } from 'react-native';
import React, { useState } from 'react';
import Theme from '../../styles/theme';


const SecondaryButton = ({name, onPress , Icon = NaN}) => {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#b5b5e3' : Theme.colors.secondary },
      ]}
    >
      <Icon />
      <Text style={styles.btnName}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height : 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: Theme.colors.secondary,
    alignItems: 'center',
    flexDirection : 'row',
    columnGap: 35,
  },
  btnName: {
    color: 'black',
    fontSize: 20,
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default SecondaryButton;
