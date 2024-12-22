import React from 'react';
import { View, Text, SectionList, StyleSheet } from 'react-native';
import UserIcon1 from '../../assets/icons/UserIcon1';

const notifications = [
  {
    title: 'Today',
    data: [
      { id: '1', message: 'Kallu posted about an incident.', icon: <UserIcon1 width={40} height={40} color="#FF4500" /> },
      { id: '2', message: 'Billu sent SOS request.', icon: <UserIcon1 width={40} height={40} color="#00BFFF" /> },
      { id: '3', message: 'Billu badmos started following you.', icon: <UserIcon1 width={40} height={40} color="#00BFFF" /> },
    ],
  },
  {
    title: 'Yesterday',
    data: [{ id: '4', message: 'Munni commented on your photo.', icon: <UserIcon1 width={40} height={40} color="#32CD32" /> },
    { id: '5', message: 'Munni reported Bypass Jam .', icon: <UserIcon1 width={40} height={40} color="#32CD32" /> }],
  },
  {
    title: 'A Week Ago',
    data: [
      { id: '6', message: 'Lana Rhodes reported fire alert.', icon: <UserIcon1 width={40} height={40} color="#FFD700" /> },
      { id: '7', message: 'Batla sent you a message request.', icon: <UserIcon1 width={40} height={40} color="#DC143C" /> },
      { id: '8', message: 'Bobita sent you a message.', icon: <UserIcon1 width={40} height={40} color="#DC143C" /> },
      { id: '9', message: 'Kamla sent SOS request.', icon: <UserIcon1 width={40} height={40} color="#DC143C" /> },
    ],
  },
  {
    title: 'Older',
    data: [
      { id: '10', message: 'You have a new follower.', icon: <UserIcon1 width={40} height={40} color="#8A2BE2" /> },
      { id: '11', message: 'Road Riot near you.', icon: <UserIcon1 width={40} height={40} color="#FF69B4" /> },
      { id: '12', message: 'Road Riot near you.', icon: <UserIcon1 width={40} height={40} color="#FF69B4" /> },
      { id: '13', message: 'Sammy reported FLood near you.', icon: <UserIcon1 width={40} height={40} color="#FF69B4" /> },
      { id: '14', message: 'Badmos posted about an incident.', icon: <UserIcon1 width={40} height={40} color="#FF69B4" /> },
    ],
  },
];

const Notification = () => {
  const renderItem = ({ item }) => (
    <View style={styles.notificationItem}>
      <View style={styles.iconContainer}>{item.icon}</View>
      <Text style={styles.notificationText}>{item.message}</Text>
    </View>
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionTitle}>{section.title}</Text>
  );

  return (
    <View style={styles.container}>
      {/* Top Heading */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Notifications</Text>
      </View>
      
      <SectionList
        sections={notifications}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContent} // Added consistent padding
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(197, 197, 233, 0.30)',
  },
  header: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED', // Light border like Instagram
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#262626',
  },
  listContent: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
    color: '#262626',
    letterSpacing: 1,
  },
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  iconContainer: {
    width: 40,
    height: 40,
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationText: {
    fontSize: 16,
    color: '#262626',
    left: '2%'
  },
});

export default Notification;
