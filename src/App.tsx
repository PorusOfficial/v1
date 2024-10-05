import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';
import CustomButton from './components/button/CustomButton';
import InputBox from './components/inputBox/InputBox';
const App = ()=>{

  return(
    <View style={[GlobalStyles.body,styles.container]}>

      <CustomButton name={'Log in'} onPress={()=>1}/>
      <InputBox />
    </View>
  );
};

const styles = StyleSheet.create({

  container :{
    flex : 1,
    justifyContent : 'center',
    //alignItems: 'center',
    gap : 10,
  },
  txt : {
    fontSize : 30,
    fontWeight : '500',
    color : 'black',
  },
});

export default App;
