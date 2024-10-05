import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
const InputBox = () => {
  return (
    <View>
      <TextInput placeholder="Enter somethings..." placeholderTextColor={'black'} style = {styles.input} />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
    input: {
        height: 60,
        borderWidth: 1,
        borderRadius : 15,
        padding: 10,
        fontSize: 20,
        fontWeight: '500'
      },


});
