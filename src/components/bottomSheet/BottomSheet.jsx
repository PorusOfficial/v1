import React, {useCallback, useRef, useMemo} from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import BottomSheet, {BottomSheetScrollView} from '@gorhom/bottom-sheet';


const CustomBottomSheet = ({ children, snapPoint }) => {
  const sheetRef = useRef(null);

  const snapPoints = useMemo(() => snapPoint , [snapPoint]);

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
          <View style={{ flex: 1}}>
            {children}
          </View>
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
    backgroundColor : 'lightgray',
    width : 80,
    height: 5,
    alignSelf: 'center',
    top : 15,
    borderRadius : 10,
    marginBottom : 30,
  }
});

export default CustomBottomSheet;
