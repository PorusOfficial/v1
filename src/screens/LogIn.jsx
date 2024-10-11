import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyle';
import InputBox from '../components/inputBox/InputBox';
import PrimaryButton from '../components/button/PrimaryButton';
import UserIcon from '../assets/icons/UserIcon';
import SecondaryButton from '../components/button/SecondaryButton';
import FbIcon from '../assets/icons/FbIcon';
import GIcon from '../assets/icons/GIcon';
const LogIn = () => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, gap: 30}}>
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
            Log in to
            <Text style={[GlobalStyles.InriaRegular, {fontSize: 36}]}>
              {' '}
              get alert...
            </Text>
          </Text>
        </View>

        <View style={{flex: 2, padding: 3, gap: 35, marginTop: 30}}>
          <InputBox placeholder={'mobile or email'} Icon={UserIcon} />
          <View style={{gap: 5}}>
            <PrimaryButton name={'Log in'} onPress={() => ' '} />
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
              don't have account? sign up
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
          <View style={{gap: 34}}>
            <SecondaryButton
              name={'Log in with google'}
              onPress={() => ' '}
              Icon={GIcon}
            />
            <SecondaryButton
              name={'Log in with facebook'}
              onPress={() => ' '}
              Icon={FbIcon}
            />
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

export default LogIn;

const styles = StyleSheet.create({
  main: {
    rowGap: 80,
  },
  header: {
    flex: 2,
    // borderWidth : 1,
    justifyContent: 'space-between',
  },
  line: {
    borderTopColor: '#000',
    borderTopWidth: 1,
    width: '40%',
    marginVertical: 10,
  },
});
