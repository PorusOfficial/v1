import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import GetStartedScreen from './screens/GetStart';
import LogInScreen from './screens/LogInScreen';
import SignUpScreen from './screens/SignUpScreen';
import OtpVerificationScreen from './screens/OtpVerificationScreen';
import ProfileSetups from './screens/ProfileSetups';
import BottomTabNav from './navigation/bottomTab/BottomTabNav';
import PostDetailScreen from './screens/PostDetailsScreen';
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import Profile from './screens/profile/Profile';


const AppNavigations = () => {

  const Stack = createNativeStackNavigator();
  return (
    <BottomSheetModalProvider>
    <NavigationContainer >
      <Stack.Navigator initialRouteName='Hometab' screenOptions={{ headerShown: false }} >
        <Stack.Screen  name='OnBoard' component={GetStartedScreen}/>
        <Stack.Screen name='Login' component={LogInScreen} />
        <Stack.Screen name='Register' component={SignUpScreen} />
        <Stack.Screen name='Otp' component={OtpVerificationScreen} />
        <Stack.Screen name='SetupProfile' component={ProfileSetups} />
        <Stack.Screen name='Hometab' component={BottomTabNav} />
        <Stack.Screen name='PostDetails' component={PostDetailScreen} />
        <Stack.Screen name='Profile' component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
    </BottomSheetModalProvider>
  )
}

export default AppNavigations
