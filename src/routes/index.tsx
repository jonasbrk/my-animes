import React from 'react';
import {AppRoutes} from './App.routes';
import {AuthRoutes} from './Auth.routes';

export const Routes = () => {
  const user = false;
  return user ? <AppRoutes /> : <AuthRoutes />;
};
