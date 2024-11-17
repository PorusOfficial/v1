import React, {useState} from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import CustomBottomSheet from '../components/bottomSheet/BottomSheet';
import UserIcon from '../assets/icons/UserIcon';
import MenuIcon from '../assets/icons/MenuIcon';
import GlobalStyles from '../styles/GlobalStyle';
import FbIcon from '../assets/icons/FbIcon';
import Arrow from '../assets/icons/Arrow';
import HeartIcon from '../assets/icons/HeartIcon';

const HomeScreen = () => {
  // Sample data array
  const data = Array.from({length: 12}, (_, index) => index + 1); // [1, 2, ..., 12]

  function newsBox({item}) {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          height: 108,
          borderTopWidth: 5,
          borderColor: 'white',
        }}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <View
            style={{
              width: 15,
              height: 15,
              backgroundColor: 'red',
              borderRadius: 3,
            }}
          />
        </View>

        <View style={{flex: 6, paddingVertical: 5, paddingHorizontal: 5}}>
        <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => {
        console.log('NewsBox touched:', item);
      }}
      style={{flex: 1, height: 30, flexDirection: 'row'}}>
            <View style={{flex: 2}}>
              <Text
                style={[
                  GlobalStyles.InriaLight,
                  {fontSize: 20, fontWeight: '700'},
                ]}
                numberOfLines={1}>
                fire catch in a car
              </Text>
              <Text
                style={[
                  GlobalStyles.InriaLight,
                  {fontSize: 14, fontWeight: '700', color: '#545252'},
                ]}
                numberOfLines={1}>
                Main road, sant nagar
              </Text>
            </View>

            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
              }}>
              <Text
                style={[
                  GlobalStyles.InriaLight,
                  {fontSize: 14, fontWeight: '700', color: '#1266ED'},
                ]}>
                500m
              </Text>
              <Arrow height={20} width={20} />
            </View>
          </TouchableOpacity>
          <View style={{flex: 1, height: 30}}>
            <FbIcon />
          </View>
        </View>
      </View>
    );
  }
  const i = () => {
    return <></>;
  };

  return (
    <>
      <ImageBackground
        source={require('../assets/img/map.png')}
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
            renderItem={newsBox}
            keyExtractor={(item, index) => index.toString()} // Use index as the key
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
