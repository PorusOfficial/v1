import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import GlobalStyles from '../styles/GlobalStyle';
import Theme from '../styles/theme';
import SecondaryButtonWithIcon from '../components/button/SecondaryButtonWithIcon';
import InputBox from '../components/inputBox/InputBox';
import PrimaryButton from '../components/button/PrimaryButton';

const ProfileSetups = () => {
   function emptyIcon(){
    return(<></>);
   }
  return (
        <View style={[GlobalStyles.body, {gap: 30, top: 70}]}>
          <Text style={[GlobalStyles.InriaBold, {fontSize: 38}]}>
            Setup your profile
          </Text>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              gap: 20,
            }}>
            <View style={styles.progressBox} />
            <View style={styles.progressBox} />
            <View style={[styles.progressBox]} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View style={styles.profileImg}>
              <Text
                style={[GlobalStyles.InriaBold, {color: Theme.colors.accent}]}>
                +
              </Text>
            </View>
            <View style={styles.header}>
              <Text
                style={[
                  GlobalStyles.InterRegular,
                  {fontWeight: '600', letterSpacing: 1, textAlign: 'left'},
                ]}>
                Set your profile picture
              </Text>
              <SecondaryButtonWithIcon
                name={'Upload'}
                onPress={() => ''}
                w={200}
                h={38}
              />
            </View>
          </View>
          <InputBox placeholder={'Enter Name'} Icon={emptyIcon} />
          <View>
            <InputBox placeholder={'Choose username'} Icon={emptyIcon} />
            <Text
              style={[
                GlobalStyles.InterRegular,
                {fontSize: 11, marginLeft: 10},
              ]}>
              *username already exits.
            </Text>
          </View>
          <PrimaryButton name={'Next'} onPress={() => ' '} />
        </View>
  );
};

export default ProfileSetups;

const styles = StyleSheet.create({
  progressBox: {
    width: 82,
    height: 12,
    backgroundColor: Theme.colors.accent,
    borderRadius: 2,
  },
  profileImg: {
    width: 86,
    height: 86,
    borderRadius: 50,
    backgroundColor: '#D9D9D9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {width: '70%', alignItems: 'center', gap: 5},
});
