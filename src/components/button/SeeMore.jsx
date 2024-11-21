// SeeMore.js or SeeMore.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import SeemoreArrow from '../../assets/icons/SeemoreArrow';

const SeeMore = ({ title, onPress, textColor = "#1266ED", backgroundColor = "#C5C5E9", style }) => {
  return (

<TouchableOpacity 
      style={[styles.button, { backgroundColor }, style]} 
      onPress={onPress}
    >
      <View style={{
        flexDirection: 'row'
      }}>
      <View style={{
        top: 10,
        width: 90      
        }}><Text style={[styles.buttonText, { color: textColor }]}>{title}</Text></View> 
      <View style={{
        left: 0
      }}><SeemoreArrow width={25} height={25}/></View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,

  },
  buttonText: {
    fontSize: 18,
    textAlign: 'center',
    bottom: 10
  },
});

export default SeeMore;