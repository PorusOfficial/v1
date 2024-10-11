import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyle';
import InputBox from '../components/inputBox/InputBox';
import PrimaryButton from '../components/button/PrimaryButton';

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

const OtpVerificationScreen = () => {
  return (
    <View style={[GlobalStyles.body, {gap: 36, top: 100}]}>
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
      <InputBox placeholder={'Enter OTP'} Icon={OTPicon} />
      <View>
        <PrimaryButton name={'Enter'} onPress={() => ''} />
        <Text
          style={[GlobalStyles.InterRegular, {fontSize: 11, marginLeft: 10}]}>
          NOTE: don’t share OTP with any one.
        </Text>
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
