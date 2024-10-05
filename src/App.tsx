import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';
import CustomButton from './components/button/CustomButton';
const App = ()=>{

  return(
    <View style={[GlobalStyles.body,styles.container]}>

      <CustomButton name={'Log in'}/>
    </View>
  );
};

const styles = StyleSheet.create({

  container :{
    flex : 1,
    justifyContent : 'center',
    alignItems: 'center',
  },
  txt : {
    fontSize : 30,
    fontWeight : '500',
    color : 'black',
  },
});

export default App;
