import React, { useRef } from 'react';
import { Dimensions, StyleSheet, Text, View, Image } from 'react-native';
import UserIcon from '../../assets/icons/UserIcon';
import LocIcon from '../../assets/icons/LocIcon';
import EngageTab from '../../components/engageBox/EngageTab';
import { Data } from '../home/data';

const PostCard = ({post, openCommentList }) => {
  const { width } = Dimensions.get('window');

  // Event Handlers
  const handleUpVotePress = val => console.log('Upvoted:', val);
  const handleDownVotePress = val => console.log('Downvoted:', val);
  const handleSharePress = () => console.log('Share');
  const handleCommentPress = () => {
    console.log('Comment');
    openCommentList();
  };

  return (
    <View style={styles.cardContainer}>
      <Text style={styles.title}>
        {post.title}
      </Text>

      <View style={styles.infoRow}>
        <View style={styles.userInfo}>
          <UserIcon width={20} height={20} />
          <Text style={styles.userName}>{post?.userName}</Text>
        </View>

        <View style={styles.locationInfo}>
          <LocIcon width={17} height={17} />
          <Text style={styles.location} numberOfLines={1} ellipsizeMode="tail">
            {post?.location}
          </Text>
        </View>
      </View>

      <View style={[styles.imageContainer, { width: width * 0.92 }]}>
        <Image
          source={{ uri: post?.imageURI }}
          style={styles.image}
          resizeMode="cover"
          onError={() => console.log('Image failed to load.')}
        />
      </View>

      <EngageTab
        e={{
          handleUpVotePress,
          handleDownVotePress,
          handleSharePress,
          handleCommentPress,
        }}
        data={{
          up: post?.upvotes,
          down: post?.downvotes,
          comment: post?.comments,
          share: post?.shares,
          time: post?.time,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: 'rgba(197, 197, 233, 0.24)',
    padding: 10,
    borderRadius: 10,
    margin: 5,
    rowGap: 10,
  },
  title: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: '5%',
  },
  userName: {
    color: 'black',
    fontSize: 13
  },
  locationInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    paddingLeft: 10,
    gap: '5%'
  },
  location: {
    color: 'black',
    flex: 1,
    fontSize: 13,
  },
  imageContainer: {
    height: 210,
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
export default PostCard;