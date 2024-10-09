import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import Theme from '../../styles/theme';

const InputBox = ({placeholder, Icon, type = false}) => {
  return (
    <View style={styles.inputBox} >
      <Icon />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#5B5A5A'}
        style = {styles.input}
        secureTextEntry={type}
        numberOfLines={1}
        multiline={false}
      />
    </View>

  );
};

export default InputBox;

const styles = StyleSheet.create({
    inputBox: {
        height: 60,
        borderWidth: 1,
        borderRadius : 15,
        paddingHorizontal: 10,
        flexDirection : 'row',
        gap : 10,
        alignItems: 'center',
        borderColor : Theme.colors.secondaryTxtColor,
        overflow: 'scroll',
        backgroundColor: '#EEECEC',
      },
      input: {
        bordermWidth: 0,
        flex: 1,
        fontSize: 18,
        fontWeight: '500',
        color : 'black',
        letterSpacing: 0.5,
      },


});
