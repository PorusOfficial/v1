import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, { useState } from 'react';
import GlobalStyles from '../styles/GlobalStyle';
import InputBox from '../components/inputBox/InputBox';
import PrimaryButton from '../components/button/PrimaryButton';
import SecondaryButtonWithIcon from '../components/button/SecondaryButtonWithIcon';

const OTPicon = () => {
  return (
    <Text
      style={[
        GlobalStyles.InterRegular,
        {fontWeight: '700', letterSpacing: 2},
      ]}>
      ***
    </Text>
  );
};

const OtpVerificationScreen = ({navigation}) => {
  const [otp, setOtp] = useState('');

  const handleOtpSubmit = () =>{

    console.log(otp);

    navigation.navigate('SetupProfile');
  };

  return (
    <View style={[GlobalStyles.body, {gap: 36, paddingTop: '15%'}]}>
      <Text style={GlobalStyles.InriaBold}>Verify OTP</Text>

      <View
        style={{flexDirection: 'row', justifyContent: 'flex-start', gap: 20}}>
        <View style={styles.progressBox} />
        <View style={styles.progressBox} />
        <View style={[styles.progressBox, {backgroundColor: '#D9D9D9'}]} />
      </View>
      <Text style={[GlobalStyles.InterRegular]}>
        Enter the One-Time Password (OTP) sent to your registered mobile number
        and email address to complete the verification.
      </Text>
      <InputBox placeholder={'Enter OTP'} Icon={OTPicon} value={otp} setValue={setOtp}/>
      <View>
        <PrimaryButton name={'Enter'} onPress={handleOtpSubmit} />
        <Text
          style={[GlobalStyles.InterRegular, {fontSize: 11, marginLeft: 10}]}>
          NOTE: don’t share OTP with any one.
        </Text>
        <Text>{'\n'}</Text>
        <SecondaryButtonWithIcon name={'Re-send'} onPress={()=> " "} />
      </View>
    </View>
  );
};

export default OtpVerificationScreen;

const styles = StyleSheet.create({
  progressBox: {
    width: 82,
    height: 12,
    backgroundColor: '#1266ED',
    borderRadius: 2,
  },
});
