import {
  Dimensions,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useRef, useState} from 'react';
import DropdownMenu from '../../components/dropdownMenu/DropdownMenu';
import {MenuOption} from '../../components/dropdownMenu/MenuOption';
import DropdownIcon from '../../assets/icons/DropdownIcon';
import {FeedData} from '../home/data';
import CommentScreen from '../CommentScreen';
import PostCard from './PostCard';
import SearchIcon from '../../assets/icons/SearchIcon';

const {width} = Dimensions.get('window');

const Tranding = ({openCommentList, navigation}) => {
  const [visible, setVisible] = useState(false);
  //const [selectedMenuItem, setSelectedMenuItem] = useState('');

  const sheetRef = useRef(null);
  function openCommentList() {
    console.log('commment');
    sheetRef.current?.present();
  }
  //const {dismiss} = useBottomSheetModal();
  return (
    <ScrollView style={{backgroundColor: 'white', flex: 1}}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Image
            source={require('../../assets/img/avtar/pic2.jpg')}
            style={{width: 40, height: 40, borderRadius: 25}}
          />
        </TouchableOpacity>

        {/* <DropdownMenu
          visible={visible}
          handleClose={() => setVisible(false)}
          handleOpen={() => setVisible(true)}
          trigger={
            <View style={styles.triggerStyle}>
              <Text style={styles.triggerText}>Actionsjjjj</Text>
              <DropdownIcon />
            </View>
          }>
          <MenuOption onSelect={() => setVisible(false)}>
            <Text>HElwo</Text>
          </MenuOption>
        </DropdownMenu> */}
      </View>
       <FlatList
          data={FeedData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => <PostCard post={item} openCommentList={openCommentList}/>}
          nestedScrollEnabled = {true}
          scrollEnabled={false}
      />
      <CommentScreen sheetRef={sheetRef} />
    </ScrollView>
  );
};

export default Tranding;

const styles = StyleSheet.create({
  header: {
    height: 'auto',
    borderBottomWidth: 0.5,
    borderColor: '#AEAEAE',
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: width / 5,
    position: 'relative',
    top: '0',
  },
  triggerStyle: {
    height: 35,
    width: 150,
    backgroundColor: 'rgba(247, 247, 247, 0.82)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 2,
    borderRadius: 10,
    gap: '10%',
    paddingHorizontal: 10,
  },
  triggerText: {
    fontSize: 14,
    color: '#3A3939',
    //fontWeight: '700',
  },
});