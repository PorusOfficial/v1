import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigations from './AppNavigations';

const App = () => {
  useEffect(() => {
    // Set the status bar to light content (dark background and light text)
    StatusBar.setBarStyle('dark-content');
    StatusBar.setBackgroundColor('#fff'); // You can change this to match your theme color
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <AppNavigations />
    </GestureHandlerRootView>
  );
};

export default App;
