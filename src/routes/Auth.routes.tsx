import React, {useEffect, useState} from 'react';
import {Login} from '../pages';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

export type StackParams = {
  Login: undefined;
};

export const AuthRoutes = () => {
  const Stack = createNativeStackNavigator<StackParams>();

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};
