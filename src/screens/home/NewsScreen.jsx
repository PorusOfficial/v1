import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyle';
import EngageTab from '../../components/engageBox/EngageTab';
import Arrow from '../../assets/icons/Arrow';

const NewsScreen = ({item, navigation, openCommentList}) => {
  function handleUpVotePress(val) {
    console.log('u', val);
  }
  function handleDownVotePress(val) {
    console.log('d', val);
  }
  function handleCommentPress() {
    console.log('commment');
    openCommentList();
  }
  function handleSharePress() {
    console.log('share');
  }
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        height: 108,
        borderTopWidth: 3,
        borderColor: 'white',
      }}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <View
          style={[
            {
              backgroundColor: item.type,
              width: 10,
              height: 10,
              borderRadius: 2,
            },
          ]}
        />
      </View>

      <View style={{flex: 7, padding: 5}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            console.log('NewsBox touched:', item);
            navigation.navigate('Post', {id: item.id});
          }}
          style={{flex: 1, height: 30, flexDirection: 'row'}}>
          <View
            style={{
              flex: 2,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                width: '80%',
              }}>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  color: 'black',
                  marginLeft: 5,
                }}>
                {item.title}
              </Text>
            </View>
            {/*
            // might change
            <Text
               numberOfLines={1}
              style={[
                GlobalStyles.InriaLight,
                {fontSize: 13, fontWeight: '700', color: '#1266ED', marginRight: 5},
              ]}>
              {item.distance}
            </Text> */}
            <Arrow height={20} width={20} />
          </View>
        </TouchableOpacity>
        <View style={{flex: 1}}>
          <Text
            style={[
              GlobalStyles.InriaLight,
              {
                fontSize: 13,
                fontWeight: '700',
                color: '#1266ED',
                marginLeft: 5,
                letterSpacing: 1,
              },
            ]}
            numberOfLines={1}>
            {`${item.distance} meter from you`}
          </Text>
        </View>
        <View style={{flex: 1, justifyContent: 'center', width: '100%'}}>
          <EngageTab
            e={{
              handleCommentPress,
              handleDownVotePress,
              handleUpVotePress,
              handleSharePress,
            }}
            data={{
              up: item.upvotes,
              down: item.downvotes,
              comment: item.comments,
              share: item.shares,
              time: item.time,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NewsScreen;

const styles = StyleSheet.create({});
