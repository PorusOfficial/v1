import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import PostDetailScreen from '../../screens/PostDetailsScreen';
import HomeScreen from '../../screens/home/HomeScreen';
import BellIcon from '../../assets/icons/BellIcon';
import TrendIcon from '../../assets/icons/TrendIcon';
import PostIcon from '../../assets/icons/PostIcon';
import HomeIcon from '../../assets/icons/HomeIcon';
import HeartIcon from '../../assets/icons/HeartIcon';
import Tranding from '../../screens/tranding/Tranding';



const BottomTabNav = () => {
    const Tab = createBottomTabNavigator();

  return (
   <Tab.Navigator screenOptions={{headerShown: false, tabBarShowLabel: false, tabBarStyle:{backgroundColor: '#F6F6F6'}}}>
     <Tab.Screen name='Home' component={HomeScreen} options={{tabBarIcon: ({focused, color, size})=>(<HomeIcon width={size*0.8} height={size} isActive={focused}/>)}} />
     <Tab.Screen name='Trand' component={Tranding} options={{tabBarIcon: ({focused, color, size})=>(<TrendIcon width={size*0.9} height={size*0.8} isActive={focused} />)}} />
     <Tab.Screen name='Post' component={PostDetailScreen} options={{tabBarIcon: ({focused, color, size})=>(<PostIcon width={size*1.5} height={size*1.5} isActive={focused} />)}} />
     <Tab.Screen name='Notification' component={PostDetailScreen} options={{tabBarIcon : ({focused, color, size})=>(<BellIcon width={size} height={size} isActive={focused} />)}} />
     <Tab.Screen name='SOS' component={PostDetailScreen} options={{tabBarIcon : ({focused, color, size})=>(<HeartIcon width={size} height={size} color='black'/>)}} />

   </Tab.Navigator>
  )
  
}

export default BottomTabNav;
