import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// screens
import HeroInfo from '../screens/HeroInfo';

// navigators
import BottomNavigation from './bottomNavigation';

const Stack = createNativeStackNavigator();

const RootNavigation = () => (
  <Stack.Navigator
    screenOptions={{headerShown: false}}
    initialRouteName="BottomNavigation">
    <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
    <Stack.Screen name="HeroInfo" component={HeroInfo} />
  </Stack.Navigator>
);

export default RootNavigation;
