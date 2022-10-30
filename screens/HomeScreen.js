import React from 'react'
import { auth } from '../firebase'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ProfileScreen from './ProfileScreen';
import CalculateScreen from './CalculateScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator();

const HomeScreen = ({navigation}) => {

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Calculate') {
            iconName = 'calculator'
          } else if (route.name === 'Profile') {
            iconName = 'pencil'

          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4DBA8D',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Calculate" component={CalculateScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  )
}
export default HomeScreen