import React, { useCallback, useMemo } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CustomBottomSheet from '../components/bottomSheet/BottomSheet';

const PostDetailScreen = () => {
  // Generate dummy data
  const data = useMemo(
    () =>
      Array(50)
        .fill(0)
        .map((_, index) => `index-${index}`),
    [],
  );

  // Render each item
  const renderItem = useCallback(
    (item) => (
      <View key={item} style={styles.itemContainer}>
        <Text style={styles.itemText}>{item}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={styles.container}>
      {/* CustomBottomSheet should handle scrolling internally */}
      <CustomBottomSheet>
        {data.map(renderItem)}
      </CustomBottomSheet>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  },
  itemContainer: {
    backgroundColor: '#f0f0f0', // Use backgroundColor for the view container
    padding: 10,
    marginVertical: 5,
    borderRadius: 8,
  },
  itemText: {
    color: 'black', // Text color should be applied here
    fontSize: 16,
  },
});

export default PostDetailScreen;
