import { Text, Pressable, StyleSheet,  Dimensions } from 'react-native';
import React from 'react';
import Theme from '../../styles/theme';

const { width } = Dimensions.get('window');

const SecondaryButtonWithIcon = ({ name, onPress, w = 0, h = 60 }) => {
  const fontSize = width * 0.05;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        { backgroundColor: pressed ? '#b5b5e3' : Theme.colors.secondary, width: w ? w : 'auto', height: h },
      ]}
    >
      <Text style={[styles.btnName, { fontSize }]}>{name}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    height: 60,
    borderRadius: 10,
    backgroundColor: Theme.colors.secondary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnName: {
    color: 'black',
    fontWeight: '600',
    letterSpacing: 1,
  },
});

export default SecondaryButtonWithIcon;
