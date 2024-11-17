import React, {useCallback, useMemo} from 'react';
import {StyleSheet, View, Text, FlatList, ImageBackground} from 'react-native';
import CustomBottomSheet from '../components/bottomSheet/BottomSheet';
import SmallPrimaryButton from '../components/button/smallBtn/SmallPrimaryButton';
import CameraIcon from '../assets/icons/CameraIcon';
import LiveIcon from '../assets/icons/LiveIcon';
import SmallSecondaryButton from '../components/button/smallBtn/SmallSecondaryButton';
import GlobalStyles from '../styles/GlobalStyle';
import TimeIcon from '../assets/icons/TimeIcon';
import LocIcon from '../assets/icons/LocIcon';
import UserIcon from '../assets/icons/UserIcon';
import HeartIcon from '../assets/icons/HeartIcon';
import {Image} from 'react-native-svg';
import EngageTab from '../components/engageBox/EngageTab';

const PostDetailScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/img/map.png')}
        resizeMode="cover"
        style={styles.back}>
        <CustomBottomSheet snapPoint={['30%', '50%', '60%']}>
          <View style={{paddingHorizontal: 10, marginTop: 5}}>
            <View style={{flexDirection: 'row', gap: 10}}>
              <SmallPrimaryButton
                name="Broadcast"
                onPress={() => {}}
                Icon={CameraIcon}
                w="47%"
              />
              <SmallSecondaryButton
                name="Watch live"
                onPress={() => {}}
                Icon={LiveIcon}
                w="47%"
              />
            </View>

            {/* News Headline and address*/}
            <View style={{padding: 11}}>
              <Text
                style={[
                  GlobalStyles.InterMedium,
                  {
                    fontSize: 22,
                    fontWeight: '650',
                    fontFamily: "'Inter', sans-serif",
                  },
                ]}>{`Fire breaks out in a vehicle.`}</Text>

              <View style={{flexDirection: 'row', gap: 25, paddingLeft: 2}}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                    flex: 1,
                  }}>
                  <LocIcon width={21} height={24} />
                  <Text
                    style={[
                      GlobalStyles.InterRegular,
                      {color: '#434040', fontSize: 13},
                    ]}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {`Burari, Delhi, india`}
                  </Text>
                </View>

                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    gap: 2,
                    flex: 2,
                  }}>
                  <TimeIcon width={18} height={18} />
                  <Text
                    style={[
                      GlobalStyles.InterRegular,
                      {color: '#434040', fontSize: 13},
                    ]}>
                    {`30m`}
                  </Text>
                </View>

                {/*   <View
                style={{flexDirection: 'row', alignItems: 'center', gap: 2}}>
                <UserIcon width={18} height={18} />
                <Text style={[GlobalStyles.InterRegular, {color: '#434040'}]}>
                  {`by Rupesh`}
                </Text>
              </View> */}
              </View>
            </View>
          </View>

          <View
            style={{
              borderBottomWidth: 8,
              borderColor: 'rgba(255, 255, 255, 0.9)',
              width: '100%',
              alignSelf: 'center',
            }}
          />

          <Description />
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
    </View>
  );
};

// des of incident
const Description = () => {
  const data = [
    {
      time: '02:00 AM',
      event:
        'Fire started on the third floor. one person got injurged other srurivieed na d thesre is tense bte the whrj',
    },
    {time: '02:15 AM', event: 'Residents called the fire department.'},
    {time: '02:30 AM', event: 'Fire trucks arrived at the location.'},
    {time: '03:00 AM', event: 'Fire brought under control by firefighters.'},
    {
      time: '03:15 AM',
      event: 'One resident taken to hospital due to smoke inhalation.',
    },
    {
      time: '04:00 AM',
      event: 'Authorities declared the building safe for re-entry.',
    },
  ];

  const renderItem = ({item}) => (
    <View
      style={{
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#E9EBF9',
        marginVertical: 2,
        width: '100%',
        borderRadius: 10,
      }}>
      <Text style={styles.bullet}>•</Text>
      <Text
        style={[
          GlobalStyles.InterBold,
          {
            fontSize: 14,
            color: 'rgba(0, 0, 0, 0.80)',
            fontWeight: 'semibold',
            letterSpacing: 0.7,
          },
        ]}>
        {item.event}
      </Text>
    </View>
  );

  return (
    <View style={{gap: 5, margin: 10}}>
      <Text
        style={[
          GlobalStyles.InterBold,
          {fontWeight: 'bold', color: 'rgba(0, 0, 0, 0.75)', marginLeft: 10},
        ]}>
        {`More Details`}
      </Text>

      <FlatList
        scrollEnabled={false}
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.time}
        nestedScrollEnabled={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  back: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bullet: {
    fontSize: 30,
    color: 'rgba(0, 0, 0, 0.60)',
    marginRight: 8,
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});

export default PostDetailScreen;
