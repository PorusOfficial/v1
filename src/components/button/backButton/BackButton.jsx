import {Text, StyleSheet , View} from 'react-native';
import React from 'react';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import GlobalStyles from '../../../styles/GlobalStyle';
import Arrow from '../../../assets/icons/Arrow';


const BackButton = ({name, onPress}) => {

  return (
    <TouchableWithoutFeedback onPress={onPress} style={styles.button}>
      <View style={{ transform: [{ rotate: '180deg' }]}}>
        <Arrow color='black' width={24} height={24}/>
      </View>
      <Text style={[GlobalStyles.InriaBold,styles.btnName]}>{name.toUpperCase()}</Text>
    </TouchableWithoutFeedback>  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: '5%',
    },
    btnName: {
      color: 'black',
      fontSize: 20,
      fontWeight: '600',
      letterSpacing : 1,
      paddingBottom: 3
    },
  });
  export default BackButton;