import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';


const CustomBottomSheet = ({ children }) => {
  const sheetRef = useRef(null);


  const snapPoints = useMemo(() => ['40%', '50%', '70%'], []);

  return (
      <BottomSheet
        ref={sheetRef}
        index={0}
        snapPoints={snapPoints}
        enableDynamicSizing={false}
        backgroundStyle={[{backgroundColor: '#F1F1FA'}, styles.bottomSheet]}
        style={{ paddingHorizontal : 10,}}
        handleComponent={null}
      >
          <View style={styles.line} />
        <BottomSheetScrollView contentContainerStyle={styles.contentContainer}>
          {children}
        </BottomSheetScrollView>
      </BottomSheet>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    position : 'absolute',
  },
  bottomSheet: {
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingTop : 20,
  },
  contentContainer: {},
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: '#eee',
  },
  line :{
    backgroundColor : 'grey',
    width : 80,
    height: 10,
    alignSelf: 'center',
    top : 10,
    borderRadius : 10,
    marginBottom : 30,
  }
});

export default CustomBottomSheet;
