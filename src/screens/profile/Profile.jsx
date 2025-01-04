import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import Arrow from '../../assets/icons/Arrow';
import SettingsIcon from '../../assets/icons/SettingsIcon';
import UserIcon from '../../assets/icons/UserIcon';
import EditUserIcon from '../../assets/icons/EditUserIcon';
import AddUserIcon from '../../assets/icons/AddUserIcon';
import PostLIcon from '../../assets/icons/PostLIcon';
import Bookmark from '../../assets/icons/Bookmark';
import { RoundBtn } from '../../components/button/roundBtn/RoundBtn';

const Profile = ({ navigation, route }) => {
  const [headerText, setHeaderText] = useState('Profile'); // To dynamically update the header text
  const scrollY = useRef(new Animated.Value(0)).current;

  console.log('Profile Screen', route.params);


  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 100) {
      setHeaderText('Katiya');
    } else {
      setHeaderText('Profile');
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white',paddingHorizontal: 10 }}>
      {/* Header */}
      <View style={styles.header} >
        <View style={{flexDirection:'row', alignContent:'center', gap: '5%'}}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={{padding:0, margin:0}}>
            <Arrow color='black' left={true} width={25} height={25} />
          </TouchableOpacity>
          <Text style={{color:'black', fontSize:18, letterSpacing: 1}}>{headerText}</Text>
        </View>
        <TouchableOpacity onPress={()=>{console.log('Settings click')}} >
         <SettingsIcon w={20} h={20} />
        </TouchableOpacity>
      </View>
      <Animated.ScrollView
        style={styles.scrollView}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          {
            useNativeDriver: false, // Set to true if no layout-based animations are used
            listener: handleScroll,
          }
        )}
        scrollEventThrottle={16} // To ensure smooth updates
      >
        {/* Avatar and Bio */}
        <View style={{height: '5%', marginTop: '5%', flexDirection:'row'}}>
          <View style={{ flex: 1.4 }}>
            {/* Avatar */}
            <View style={{ width: '100%', height: '100%' }}>
              <Image
                source={require('../../assets/img/avtar/pic2.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>
          </View>
          <View style={{ flex: 3.5, padding: '3%' }}>
            {/* name bio and all */}
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
              <Text style={{color: 'black', fontSize: 18, fontWeight: 700, letterSpacing: 0.5}}>{'Katiya'}</Text>
              <TouchableOpacity onPress={()=>{console.log('Edit Profile')}} style={{flexDirection: 'row', gap: '5%', alignItems: 'center',}}>
                <UserIcon width={20} height={20} />
                <Text style={{color: '#1266ED', fontSize: 14, lineHeight: 15}}>{'25 contact'}</Text>
              </TouchableOpacity>
            </View>
            <Text style={{color: 'black', fontSize: 14, lineHeight: 14}}>{'@Katiya'}</Text>
            <Text style={{color: 'black', fontSize: 14, lineHeight: 20, letterSpacing: 0.5}}>{'20 Jan 2024 | Burari, Delhi'}</Text>

            <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 15, gap:5}}>
              {/* edit profile */}
              <RoundBtn name="Edit Profile" onPress={() => console.log('Pressed')} Icon={EditUserIcon} style={ {main : null, text : {fontSize: 12}}} iconH={17} iconW={17}/>
              <RoundBtn name="Add User" onPress={() => console.log('Pressed')} Icon={AddUserIcon} style={ {main : null, text : {fontSize: 12}}} iconH={17} iconW={17} />
            </View>
          </View>
      </View>

        {/* Posts and Bookmark Section */}
        <View style={{ flexDirection:'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
        <RoundBtn name="Posts" onPress={() => console.log('Pressed')} Icon={PostLIcon} iconH={20} iconW={20} style={ {main : {flex: 1,  paddingVertical: 10}, text : null}}/>
        <RoundBtn name="Bookmark" onPress={() => console.log('Pressed')} Icon={Bookmark} iconW={20}  iconH={20} style={ {main : {flex: 1,  paddingVertical: 10, text : null}}}/>
      </View>


        <View style={styles.dummyPosts}>
          {[...Array(50)].map((_, index) => (
            <View key={index} style={styles.postContainer}>
              <Text style={styles.postText}>{`Post ${index + 1}`}</Text>
            </View>
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  header: {
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#ddd',
  },
  dummyPosts: {
    marginTop: 20,
  },
  postContainer: {
    backgroundColor: '#f2f2f2',
    marginBottom: 10,
    padding: 15,
    borderRadius: 8,
  },
  postText: {
    color: '#333',
    fontSize: 14,
  },

  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 100,
  },
 

});
