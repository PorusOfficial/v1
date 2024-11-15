// LikeDislikeFeature.jsx
import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import Comment from '../../assets/icons/Comment';
import UploadIcon from '../../assets/icons/UploadIcon';
import TimeIcon from '../../assets/icons/TimeIcon';

const LikeDislikeFeature = ({ initialLikes = 0, initialDislikes = 0, onLike, onDislike }) => {
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);
  const [likeCount, setLikeCount] = useState(initialLikes);
  const [dislikeCount, setDislikeCount] = useState(initialDislikes);

  

  const handleLike = () => {
    if (liked) {
      setLiked(false);
      setLikeCount(likeCount - 1);
    } else {
      setLiked(true);
      setLikeCount(likeCount + 1);
      if (disliked) {
        setDisliked(false);
        setDislikeCount(dislikeCount - 1);
      }
    }
    if (onLike) onLike(liked ? -1 : 1); // Calls the onLike callback if provided
  };

  const handleDislike = () => {
    if (disliked) {
      setDisliked(false);
      setDislikeCount(dislikeCount - 1);
    } else {
      setDisliked(true);
      setDislikeCount(dislikeCount + 1);
      if (liked) {
        setLiked(false);
        setLikeCount(likeCount - 1);
      }
    }
    if (onDislike) onDislike(disliked ? -1 : 1); // Calls the onDislike callback if provided
  };

  return (
    <>
    <View style={styles.container}>
        <View style={{
            flexDirection: 'row',
            backgroundColor: '#C5C5E9',
            borderRadius: 30,
            height: 22,
            width: 90,
            left: 4,
            top: 2,
            alignContent:'center',
            justifyContent: 'center'
        }}>
      <TouchableOpacity onPress={handleLike} style={styles.button}>
        <Text style={[styles.likeText, liked && styles.activeText]}>👍{likeCount}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleDislike} style={styles.button}>
        <Text style={[styles.dislikeText, disliked && styles.activeText]}>👎{dislikeCount}</Text>
      </TouchableOpacity>
        </View>
      <View style={{
        backgroundColor: '#D9D9D9',
        left: 20,
        width: 62,
        height: 20,
        borderRadius: 30,
        top: 1
      }}>
      <View style={{
        backgroundColor: '#D9D9D9',
        width: 60,
        height: 24,
        left: 1,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 30,
        top: 1
    }}>
        <View style={{
            backgroundColor: '#C5C5E9',
            borderRadius: 30,
            width: 58,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            top: 1,
            flexDirection: 'row',
        }}>
        <Comment /> 
        <Text style={{
            fontSize: 20,
            color: 'black',
            bottom: 4,
            borderRadius: 30,
            width: 30,
            height: 22,
            alignItems: 'center',
            justifyContent: 'center',
        }}>3k</Text>
        </View>
      </View>
      </View>
      <View style={{
        backgroundColor: '#D9D9D9',
        width: 40,
        height: 25,
        left: 30,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    }}>
        <View style={{
            backgroundColor: '#C5C5E9',
            borderRadius: 30,
            width: 36,
            height: 20,
            alignItems: 'center',
            justifyContent: 'center',
            top: 2
        }}>
        <UploadIcon />
        </View>
      </View>
      <View style={{
        backgroundColor: '#D9D9D9',
        width: 74,
        height: 25,
        left: 60,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'start',
        borderRadius: 30,
    }}>
        <View style={{
        backgroundColor: '#C5C5E9',
        width: 70,
        height: 25,
        left: 2,
        flexDirection: 'row',
        alignContent: 'center',
        justifyContent: 'center',
        borderRadius: 30,
    }}>
        <TimeIcon />
        <Text style={{
            color: 'black',
            fontSize: 18
        }}>30s</Text>
        </View>
      </View>
    </View>
    </>
  );
};

export default LikeDislikeFeature;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'start',
    // justifyContent: 'start',
    marginTop: 1,
    left: 0,
    justifyContent: 'space-between',
    backgroundColor: '#D9D9D9',
    borderRadius: 30,
    width: 98,
    height: 26
  },
  button: {
    marginHorizontal: 3,
  },
  likeText: {
    fontSize: 18,
    color: 'black',
  },
  dislikeText: {
    fontSize: 18,
    color: 'black',
  },
  activeText: {
    color: 'blue',
  },
});
