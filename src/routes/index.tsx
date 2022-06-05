import React, {useEffect, useState} from 'react';
import {AppRoutes} from './App.routes';
import {AuthRoutes} from './Auth.routes';
import {tokenContext} from '../utils/context';
import EncryptedStorage from 'react-native-encrypted-storage';
import queryString from 'query-string';
import {tokenProps} from '../typings/token';
import axios from 'axios';

export const Routes = () => {
  const [token, setToken] = useState<tokenProps>();

  const defineInterceptors = () => {
    axios.interceptors.response.use(
      response => {
        return response;
      },
      err => {
        return new Promise((resolve, reject) => {
          const originalReq = err.config;
          if (err.response.status === 401 && err.config && !err.config._retry) {
            originalReq._retry = true;
            EncryptedStorage.getItem('token').then(tokenString => {
              if (tokenString) {
                const tokenParsed = queryString.parse(tokenString, {
                  parseBooleans: true,
                  parseNumbers: true,
                });

                const request = axios(
                  'https://myanimelist.net/v1/oauth2/token?',
                  {
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    data: queryString.stringify({
                      grant_type: 'refresh_token',
                      refresh_token: tokenParsed.refresh_token,
                    }),
                    method: 'POST',
                  },
                ).then(response => {
                  EncryptedStorage.setItem(
                    'token',
                    queryString.stringify(response.data),
                  );
                  setToken(response.data);
                  originalReq.headers.Authorization = `Bearer ${response.data.access_token}`;
                  return axios(originalReq);
                });
                resolve(request);
              }
            });
          } else {
            reject(err);
          }
        });
      },
    );
  };

  useEffect(() => {
    const checkSession = async () => {
      const newToken = await EncryptedStorage.getItem('token').then(
        tokenString => {
          if (tokenString) {
            const tokenParsed = queryString.parse(tokenString, {
              parseBooleans: true,
              parseNumbers: true,
            });

            const {access_token, expires_in, refresh_token, token_type} =
              tokenParsed;

            const newObj = {
              access_token: String(access_token),
              expires_in: Number(expires_in),
              refresh_token: String(refresh_token),
              token_type: String(token_type),
            };

            return newObj;
          }
        },
      );

      setToken(newToken);
      defineInterceptors();
    };

    checkSession();
  }, []);

  return (
    <tokenContext.Provider value={{token, setToken}}>
      {token ? <AppRoutes /> : <AuthRoutes />}
    </tokenContext.Provider>
  );
};
