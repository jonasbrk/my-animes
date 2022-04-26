import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, List, Search, SinglePage, User} from '../pages';
import {HomeIcon, ListIcon, SearchIcon, UserIcon} from '../assets/svg';
import {colors} from '../styles/colors';
import {Text} from 'react-native-svg';

export type TabsParams = {
  Login: undefined;
  Home: undefined;
  Search: undefined;
  List: undefined;
  User: undefined;
  SinglePage: undefined;
};

export const AppRoutes = () => {
  const Tabs = createBottomTabNavigator<TabsParams>();
  return (
    <Tabs.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarActiveTintColor: colors.white,
        tabBarInactiveTintColor: colors.gray,
        tabBarStyle: {
          backgroundColor: colors.black,
        },
      }}
      sceneContainerStyle={{
        backgroundColor: colors.darkerGray,
      }}>
      <Tabs.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({color}) => <HomeIcon fill={color} />,
        }}
      />
      <Tabs.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({color}) => <SearchIcon fill={color} />,
        }}
      />
      <Tabs.Screen
        name="List"
        component={List}
        options={{
          tabBarIcon: ({color}) => <ListIcon fill={color} />,
        }}
      />
      <Tabs.Screen
        name="User"
        component={User}
        options={{
          tabBarIcon: ({color}) => <UserIcon fill={color} />,
        }}
      />
    </Tabs.Navigator>
  );
};
