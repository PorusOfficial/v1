import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, { useState } from 'react';
import UpIcon from '../../assets/icons/UpIcon';
import DownVIcon from '../../assets/icons/DownVIcon';
import CommentIcon from '../../assets/icons/CommentIcon';
import ShareIcon from '../../assets/icons/ShareIcon';
import TimeIcon from '../../assets/icons/TimeIcon';

const EngageTab = ({ e ,data, isUpVoted = true}) => {
    const [isUpActive, setIsUpActive] = useState(isUpVoted);
    const [isDownActive, setIsDownActive] = useState(!isUpVoted);

    function handleUpPress(){
        if (!isUpActive) {
            setIsUpActive(true);
            setIsDownActive(false);
            e.handleUpVotePress(true); // Increment
          } else {
            setIsUpActive(false);
            e.handleUpVotePress(false); // Decrement
          }
    }
    function handleDownPress () {
        if (!isDownActive) {
            setIsDownActive(true);
            setIsUpActive(false);
            e.handleDownVotePress(true); // Increment
          } else {
            setIsDownActive(false);
            e.handleDownVotePress(false); // Decrement
          }
    }
  return (
    <View style={styles.container}>
      <View style={styles.btn}>
        <TouchableOpacity
            onPress={handleUpPress}
          activeOpacity={0.5}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <UpIcon height={22} width={22} isFill={isUpActive}/>
          <Text style={[styles.btn_val,isUpActive ? {color:'black'}:{}]}>{data.up}</Text>
        </TouchableOpacity>
        <Text style={{color: 'black'}}> |</Text>
        <TouchableOpacity
        onPress={handleDownPress}
          activeOpacity={0.5}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <DownVIcon width={22} height={22} isFill={isDownActive}/>
        </TouchableOpacity>
      </View>
      <TouchableOpacity activeOpacity={0.5} style={styles.btn} onPress={e.handleCommentPress}>
        <CommentIcon width={21} height={21} />
        <Text style={styles.btn_val}>{data.comment}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.6} style={styles.btn} onPress={e.handleSharePress}>
        <ShareIcon width={17} height={17} />
        <Text style={styles.btn_val}>{data.share}</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.5} style={styles.btn}>
        <TimeIcon height={19} width={19} />
        <Text style={styles.btn_val}>{data.time}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EngageTab;

const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    width: '100%',
    justifyContent:'space-between'  },
  btn: {
    flexDirection: 'row',
    backgroundColor: '#C5C5E9',
    justifyContent: 'center',
    gap: '5%',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2.5,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: '#D9D9D9',
  },
  btn_val: {
    color: '#525252',
    fontWeight: '700',
    fontSize: 12,
  },
});
