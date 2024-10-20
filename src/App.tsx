import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
//import GlobalStyles from './styles/GlobalStyle';
//import OtpVerificationScreen from './screens/OtpVerificationScreen';
//import ProfileSetups from './screens/ProfileSetups';
//import BottomSheet from './components/bottomSheet/BottomSheet';
import PostDetailsScreen from './screens/PostDetailsScreen';

const App = ()=>{

  return(
    <GestureHandlerRootView style={{flex : 1}}>

    <View style={styles.container}>
       <StatusBar
        backgroundColor="#fff"
        barStyle={'dark-content'}
      />
      <PostDetailsScreen />
    </View>
    </GestureHandlerRootView>
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