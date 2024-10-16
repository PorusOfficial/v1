import { StyleSheet, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native';
import Theme from '../../styles/theme';
import GlobalStyles from '../../styles/GlobalStyle';

const InputBox = ({placeholder, Icon, type = false, value, setValue}) => {
  return (
    <View style={styles.inputBox} >
      <Icon />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={'#5B5A5A'}
        style = {[GlobalStyles.InterRegular, styles.input]}
        secureTextEntry={type}
        numberOfLines={1}
        multiline={false}
        value={value}
        onChangeText={setValue}
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
        color : 'black',
        letterSpacing: 0.5,
      },


});
