import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';
import CustomButton from './components/button/CustomButton';
import InputBox from './components/inputBox/InputBox';
import UserIcon from './assets/icons/UserIcon';
import LockIcon from './assets/icons/LockIcon';
const App = ()=>{

  return(
    <View style={[GlobalStyles.body,styles.container]}>
       <View style={{flex:1 }}>
          <Text style={GlobalStyles.InriaBold}>Log in
          <Text style={GlobalStyles.InriaRegular}> to get alert</Text>
          </Text>
        </View>
      <View style={{gap: 30, flex:2}}>
        <InputBox placeholder={'Mobile or email'} Icon={UserIcon}/>
        <InputBox placeholder={'Enter password'} Icon={LockIcon} type={true}/>
      </View>
      <View style={{flex: 1}}>
      <CustomButton name={'Log in'} onPress={()=>1}/>


      </View>
       
    </View>
  );
};

const styles = StyleSheet.create({

  container :{
    paddingTop: 100,
    flex : 1,
    justifyContent : 'center',
    //alignItems: 'center',
    gap : 50,
  },
  txt : {
    fontSize : 30,
    fontWeight : '500',
    color : 'black',
  },
});

export default App;
