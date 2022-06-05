import React, {createContext} from 'react';
import {tokenProps} from '../typings/token';

interface tokenContextProps {
  token: tokenProps | undefined;
  setToken: React.Dispatch<tokenProps>;
}

export const tokenContext = createContext<tokenContextProps>(
  {} as tokenContextProps,
);
