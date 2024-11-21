import React, {useState} from 'react';
import {Alert, FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomBottomSheet from '../../components/bottomSheet/BottomSheet';
import UserIcon from '../../assets/icons/UserIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import GlobalStyles from '../../styles/GlobalStyle';

import HeartIcon from '../../assets/icons/HeartIcon';
import data from './data';
import NewsScreen from './NewsScreen';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

const HomeScreen = () => {

  const i = () => {
    return <></>;
  };

  return (
    <>
      <ImageBackground
        source={require('../../assets/img/map.png')}
        resizeMode="cover"
        style={{flex: 1}}>
        <View style={{flex: 1, justifyContent: 'space-between'}}>
          <View style={styles.header}>
            <TouchableWithoutFeedback style={{flex: 1}} onPress={()=> Alert.alert("profile icon press")}>
              <UserIcon />
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback style={{flex: 1, alignItems: 'flex-end'}} onPress={()=> Alert.alert("menu press")}>
              <MenuIcon />
            </TouchableWithoutFeedback>
          </View>

          <CustomBottomSheet snapPoint={['40%', '60%', '90%']} bottomStyle={styles.bottomStyle}>
            <View style={{marginBottom: 10, paddingHorizontal: 15}}>
              <Text style={{color: 'black', fontSize: 24}}>Arround you</Text>
              <Text
                style={[
                  GlobalStyles.InriaRegular,
                  {
                    color: 'rgba(64, 64, 64, 1)',
                    fontWeight: '700',
                    fontSize: 14,
                    marginBottom: 20,
                  },
                ]}>
                1 new incident | 10 past incident
              </Text>
              <Text
                style={{
                  color: 'black',
                  fontWeight: '700',
                  fontSize: 16,
                  letterSpacing: 1,
                }}>
                Incidents
              </Text>
            </View>
            <FlatList
              scrollEnabled={false}
              data={data}
              renderItem={({item})=>(<NewsScreen item={item} />)}
              keyExtractor={(item) => item.id.toString()}
              nestedScrollEnabled={true}
            />
            <View style={{borderWidth:2, borderColor:'white'}} />
          <View
            style={styles.footer}>
            <HeartIcon color="#1266ED" />
            <Text
              style={[
                GlobalStyles.InriaRegular,
                {fontSize: 11, fontWeight: '700', color: 'rgba(0, 0, 0, 0.75)'},
              ]}>
              Contrinute to community
            </Text>
          </View>
          </CustomBottomSheet>
        </View>
      </ImageBackground>
    </>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 'auto',
    paddingHorizontal: 20,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  itemContainer: {},
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5,
    paddingVertical: 5,
    width: '100%',
    position: 'relative',
    bottom:0,
    top: 100
  }
});
