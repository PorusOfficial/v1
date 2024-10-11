import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';
//import OtpVerificationScreen from './screens/OtpVerificationScreen';
//import LogIn from './screens/LogIn';
import ProfileSetups from './screens/ProfileSetups';
const App = ()=>{

  return(
    <View style={[GlobalStyles.body,styles.container]}>
       <StatusBar
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      {/*<LogIn /> <OtpVerificationScreen /> */}
      <ProfileSetups />
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
