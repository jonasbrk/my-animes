import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, List, Search, SinglePage, User} from '../pages';

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
    <Tabs.Navigator>
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="List" component={List} />
      <Tabs.Screen name="User" component={User} />
    </Tabs.Navigator>
  );
};
