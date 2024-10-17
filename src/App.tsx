import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';
//import OtpVerificationScreen from './screens/OtpVerificationScreen';
//import LogIn from './screens/LogIn';
//import ProfileSetups from './screens/ProfileSetups';
import BottomSheet from './components/bottomSheet/BottomSheet';
const App = ()=>{

  return(
    <View style={styles.container}>
       <StatusBar
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <BottomSheet />
    </View>
  );
};

const styles = StyleSheet.create({

  container :{

      flex : 1,
      backgroundColor : 'white',

  },
 
  txt : {
    fontSize : 30,
    fontWeight : '500',
    color : 'black',
  },
});

export default App;
