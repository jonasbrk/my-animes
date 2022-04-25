import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, List, Login, Search, SinglePage, User} from '../pages';

export type StackParams = {
  Login: undefined;
  Home: undefined;
  Search: undefined;
  List: undefined;
  User: undefined;
  SinglePage: undefined;
};

export const Routes = () => {
  const Stack = createNativeStackNavigator<StackParams>();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="List" component={List} />
      <Stack.Screen name="User" component={User} />
      <Stack.Screen name="SinglePage" component={SinglePage} />
    </Stack.Navigator>
  );
};
