import React from 'react';
import {View, StyleSheet} from 'react-native';
import GlobalStyles from './styles/GlobalStyle';
import CustomButton from './components/button/CustomButton';
import InputBox from './components/inputBox/InputBox';
import UserIcon from './assets/icons/UserIcon';
import LockIcon from './assets/icons/LockIcon';
const App = ()=>{

  return(
    <View style={[GlobalStyles.body,styles.container]}>
      <View style={{gap: 30}}>
        <InputBox placeholder={'Mobile or email'} Icon={UserIcon}/>
        <InputBox placeholder={'Enter password'} Icon={LockIcon} type={true}/>
      </View>
      <CustomButton name={'Log in'} onPress={()=>1}/>

    </View>
  );
};

const styles = StyleSheet.create({

  container :{
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
