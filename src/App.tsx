import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';

import LogIn from './screens/LogIn';
const App = ()=>{

  return(
    <View style={[GlobalStyles.body,styles.container]}>
       <StatusBar
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <LogIn />
    </View>
  );
};

const styles = StyleSheet.create({

  container :{
   // paddingTop: StatusBar.currentHeight,
    flex : 1,
  },
  txt : {
    fontSize : 30,
    fontWeight : '500',
    color : 'black',
  },
});

export default App;
