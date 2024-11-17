import React, {useState} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import CustomBottomSheet from '../../components/bottomSheet/BottomSheet';
import UserIcon from '../../assets/icons/UserIcon';
import MenuIcon from '../../assets/icons/MenuIcon';
import GlobalStyles from '../../styles/GlobalStyle';

import HeartIcon from '../../assets/icons/HeartIcon';
import data from './data';
import NewsScreen from './NewsScreen';

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
        <View style={styles.header}>
          <View style={{flex: 1}}>
            <UserIcon />
          </View>
          <View style={{flex: 1, alignItems: 'flex-end'}}>
            <MenuIcon />
          </View>
        </View>
        <CustomBottomSheet snapPoint={['40%', '60%', '90%']}>
          <View
            style={{
              marginBottom: 20,
            }}>
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
          <View  style={{width: '100%', borderWidth: 2, borderColor: 'white'}} />
           <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 5,
              margin: 10,
            }}>
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
  },

  itemContainer: {},
  itemText: {
    fontSize: 16,
    color: 'black',
    textAlign: 'center',
  },
});
