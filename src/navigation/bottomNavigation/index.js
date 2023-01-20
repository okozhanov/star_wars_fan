import React from 'react';
import {StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// libs
import {SvgXml} from 'react-native-svg';

// bottom tabs
import Home from '../../screens/Home';
import Favourites from '../../screens/Favourites';

// icons
import {ICONS, COLORS} from '../../assets';

const Tab = createBottomTabNavigator();

const styles = StyleSheet.create({
  tabContainer: {
    backgroundColor: COLORS.background,
    borderTopColor: COLORS.main,
  },
});

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        backBehavior: 'none',
        tabBarStyle: {...styles.tabContainer},
        tabBarShowLabel: false,
      }}
      initialRouteName="Home">
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgXml style={{}} xml={focused ? ICONS.r2d2 : ICONS.r2d2Empty} />
          ),
        }}
        name="Home"
        component={Home}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({focused}) => (
            <SvgXml style={{}} xml={focused ? ICONS.star : ICONS.starEmpty} />
          ),
        }}
        name="Favourites"
        component={Favourites}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
