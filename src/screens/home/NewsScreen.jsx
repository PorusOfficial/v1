import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import GlobalStyles from '../../styles/GlobalStyle';
import EngageTab from '../../components/engageBox/EngageTab';
import Arrow from '../../assets/icons/Arrow';

const NewsScreen = ({item}) => {
  function handleUpVotePress(val) {
    console.warn('u', val);
  }
  function handleDownVotePress(val) {
    console.warn('d', val);
  }
  function handleCommentPress() {
    console.warn('commment');
  }
  function handleSharePress() {
    console.warn('share');
  }
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
      <View style={{flex: 9, paddingVertical: 5}}>
        <TouchableOpacity
          activeOpacity={0.6}
          onPress={() => {
            console.log('NewsBox touched:', item);
          }}
          style={{flex: 1, height: 30, flexDirection: 'row'}}>
          <View style={{flex: 2}}>
            <Text
              style={{
                fontSize: 20,
                color: 'black',
              }}
              numberOfLines={1}>
              {item.title}
            </Text>
            <Text
              style={[
                GlobalStyles.InriaLight,
                {fontSize: 14, fontWeight: '700', color: '#545252', marginLeft:5},
              ]}
              numberOfLines={1}>
              {item.location}
            </Text>
          </View>

          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Text
              style={[
                GlobalStyles.InriaLight,
                {fontSize: 14, fontWeight: '700', color: '#1266ED'},
              ]}>
              {item.distance}
            </Text>
            <Arrow height={20} width={20} />
          </View>
        </TouchableOpacity>
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
