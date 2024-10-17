import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyle';
import InputBox from '../components/inputBox/InputBox';
import PrimaryButton from '../components/button/PrimaryButton';
import SecondaryButton from '../components/button/SecondaryButton';
import GIcon from '../assets/icons/GIcon';
import LockIcon from '../assets/icons/LockIcon';
import EmailIcon from '../assets/icons/EmailIcon';
import PhoneIcon from '../assets/icons/PhoneIcon';


const SignUpScreen = () => {
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    //console.warn(`${email} ${mobile} ${pwd} ${confirmPwd}`)
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, gap: 50, paddingHorizontal: 10}}>
        <View style={styles.header}>
          <Text
            style={[
              GlobalStyles.InriaBold,
              {fontSize: 24, letterSpacing: 2, fontWeight: '700'},
            ]}>
            Porus{'\n'}
            <Text
              style={[
                GlobalStyles.InriaRegular,
                {fontSize: 13, lineHeight: 13, letterSpacing: 2},
              ]}>
              A sefty app
            </Text>
          </Text>
          <Text style={[GlobalStyles.InriaBold, {fontSize: 36}]}>
          Register
            <Text style={[GlobalStyles.InriaRegular, {fontSize: 36}]}>
              {' '}
             { `to know${'\n'}`}
            </Text>
            <Text style={[GlobalStyles.InriaRegular,{fontSize: 20 }]}> what’s Happing around you.</Text>
          </Text>
        </View>
        <View style={{gap : 50}}>
            <View style={{flex:2 , gap: 15}}>
                <InputBox placeholder={'Enter email'} Icon={EmailIcon} value={email} setValue={setEmail}/>
                <InputBox placeholder={'Enter Phone number'} Icon={PhoneIcon} value={mobile} setValue={setMobile}/>
                <InputBox placeholder={'Enter password'} Icon={LockIcon} type={true} value={pwd} setValue={setPwd}/>
                <InputBox placeholder={'Confirm password'} Icon={LockIcon} type={true} value={confirmPwd} setValue={setConfirmPwd}/>
            </View>
            <View style={{gap: 10}}>
                <View>
                <PrimaryButton name={'Register'} onPress={() => ' '} />
                <Text
                style={[
                    GlobalStyles.InterRegular,
                    {
                    color: '#2D2C2C',
                    marginLeft: 10,
                    letterSpacing: 1,
                    fontWeight: '600',
                    },
                ]}>
                already have account ? Login.
                </Text>
                </View>

                <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <View style={styles.line} />
                <Text
                style={[
                    GlobalStyles.InterRegular,
                    {fontWeight: '700', fontSize: 16},
                ]}>
                OR
                </Text>
                <View style={styles.line} />
            </View>
            <SecondaryButton name={'Sign up with google'} Icon={GIcon} onPress={()=>''} />
            </View>
        </View>
        <Text
          style={[
            GlobalStyles.InterRegular,
            {
              fontSize: 11,
              textAlign: 'center',
              letterSpacing: 1,
              fontWeight: '600',
              marginBottom: 10,
            },
          ]}>
          Terms & Policy
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  main: {
    rowGap: 80,
  },
  header: {
    justifyContent: 'space-between',
    gap : 30,
  },
  line: {
    borderTopColor: '#000',
    borderTopWidth: 1,
    width: '40%',
    marginVertical: 10,
  },
});
