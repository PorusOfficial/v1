import React, { useMemo, forwardRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
} from 'react-native';
import { BottomSheetModal, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import InfoIcon from '../assets/icons/InfoIcon';
import { DummyComment } from './home/data';
import SendIcon from '../assets/icons/SendIcon';

const CommentScreen = forwardRef(({ children, bottomStyle, sheetRef }, ref) => {
  const [newComment, setNewComment] = useState('');
  const [comments, setComments] = useState(DummyComment);
  const snapPoints = useMemo(() => ['95%'], []);

  const handleAddComment = () => {
    if (newComment.trim()) {
      const NewComment = {
        username: 'You',
        time: 'Just now',
        comment: newComment.trim(),
        profileUrl: '../assets/img/avtar/pic1.jpg',
      };
      setComments([NewComment, ...comments]);
      setNewComment('');
    }
  };

  return (
    <BottomSheetModal
      ref={sheetRef}
      index={0}
      snapPoints={snapPoints}
      enableDynamicSizing={false}
      backgroundStyle={[{ backgroundColor: '#F1F1FA' }, styles.bottomSheetBackStyle]}
      style={styles.bottomSheetInside}
      handleComponent={null}
    >
      <View style={styles.line} />
      <View style={styles.header}>
        <Text style={styles.headerText}>Comments</Text>
        <TouchableOpacity onPress={() => alert('Info button clicked!')}>
          <InfoIcon width={25} height={25} />
        </TouchableOpacity>
      </View>
      <BottomSheetScrollView contentContainerStyle={styles.scrollContainer}>
        <FlatList
          data={comments}
          renderItem={({ item }) => <Comments item={item} />}
          keyExtractor={(item, index) => index.toString()} // Ensure unique keys
          nestedScrollEnabled={true}
        />
      </BottomSheetScrollView>
       <View style={{flexDirection: 'row', paddingVertical: 5, gap: '15%', alignContent: 'center'}}>
          <Image
            alt="user img"
            style={styles.avatar}
            source={require('../assets/img/avtar/pic4.jpg')}
            onError={(e) => console.error('Failed to load image', e.nativeEvent.error)}
          />
          <TextInput
              placeholder="Write somthing..."
              placeholderTextColor={'#5B5A5A'}
              numberOfLines={1}
              multiline={false}
              value={newComment}
              style={{color : 'black', flex: 1}}
              onChangeText={setNewComment}
          />
          <TouchableOpacity style={{justifyContent:'center', alignContent: 'center'}} onPress={handleAddComment}>
            <SendIcon width={30} height={29}/>
          </TouchableOpacity >
        </View>
    </BottomSheetModal>
  );
});
const profileImages = {
  pic1: require('../assets/img/avtar/pic1.jpg'),
  pic2: require('../assets/img/avtar/pic2.jpg'),
  pic3: require('../assets/img/avtar/pic3.jpg'),
  pic4: require('../assets/img/avtar/pic4.jpg'),
};
// comment box will be render in flatlist
const Comments = ({ item }) => {
  const { profileUrl } = item;
  const imageSource = profileImages[profileUrl] || profileImages.pic1;
  return (
    <View style={styles.commentContainer}>
      <Image
        style={styles.avatar}
        source={imageSource}
        onError={(e) => console.error('Failed to load image', e.nativeEvent.error)}
      />
      <View style={{ flex: 1 }}>
        <Text style={{ color: '#646363' }}>
          <Text style={styles.username}>{item.username}</Text>
          {` • ${item.time}`}
        </Text>
        <Text style={{ marginTop: 5 , color:'black', fontSize: 14}}>{item.comment}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomSheetBackStyle: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
  bottomSheetInside: {
    paddingHorizontal: 20,
  },
  line: {
    backgroundColor: 'lightgray',
    width: 45,
    height: 5,
    alignSelf: 'center',
    top: 15,
    borderRadius: 10,
    marginBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
  commentContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 35,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 25,
  },
  username: {
    fontSize: 13,
    fontWeight: '700',
    color: 'black',
  },
  sendButtonText: {
    color: 'white',
    fontWeight: '700',
  },
});

export default CommentScreen;
