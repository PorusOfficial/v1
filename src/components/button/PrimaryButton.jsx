import {Text, Pressable, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Theme from '../../styles/theme';


const PrimaryButton = ({name, onPress}) => {

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#333333' : Theme.colors.primary },
      ]}
    >
      <Text style={styles.btnName}>{name}</Text>
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
    height : 60,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: '#0a9396',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnName: {
    color: Theme.colors.text,
    fontSize: 20,
    fontWeight: '600',
    letterSpacing : 1,
  },
});

export default PrimaryButton;
