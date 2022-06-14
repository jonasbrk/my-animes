import React, {useContext} from 'react';
import {Button} from '../../components/Button';
import {colors} from '../../styles/colors';
import {Title, TitleSmall} from '../../styles/typography';
import {Logo} from '../../assets/svg';
import queryString from 'query-string';
import pkceChallenge from 'pkce-challenge';
import EncryptedStorage from 'react-native-encrypted-storage';

import {
  LoginButtonContainer,
  LoginContainer,
  LoginHeaderContainer,
  LoginSignInContainer,
  LogoContainer,
} from './Login.styles';
import {Linking} from 'react-native';
import axios from 'axios';
import {tokenContext} from '../../utils/context';
import {API_CONFIG} from '../../config/env';

export const Login = () => {
  const {setToken} = useContext(tokenContext);

  const pkce = pkceChallenge();

  const config = {
    response_type: 'code',
    client_id: API_CONFIG.CLIENT_ID,
    redirect_uri: API_CONFIG.REDIRECT_URI,
    code_challenge: pkce.code_verifier,
  };

  const authorize = () => {
    Linking.openURL(
      'https://myanimelist.net/v1/oauth2/authorize?' +
        queryString.stringify(config),
    );
    Linking.addEventListener('url', ({url}) => {
      const url_parsed = queryString.parseUrl(url);
      if (url_parsed.query.code) {
        const getaccess = async () => {
          try {
            const token = await axios(
              'https://myanimelist.net/v1/oauth2/token?',
              {
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded',
                },
                data: queryString.stringify({
                  client_id: API_CONFIG.CLIENT_ID,
                  grant_type: 'authorization_code',
                  code: url_parsed.query.code,
                  redirect_uri: API_CONFIG.REDIRECT_URI,
                  code_verifier: pkce.code_verifier,
                }),
                method: 'POST',
              },
            );

            if (token.status === 200) {
              await EncryptedStorage.setItem(
                'token',
                queryString.stringify(token.data),
              );
              setToken(token.data);
              console.log(token.data);
            } else {
              console.log('something goes wrong');
            }
          } catch (error) {
            console.log(error);
          }
        };
        getaccess();
      }
    });
  };

  return (
    <LoginContainer>
      <LoginHeaderContainer>
        <LogoContainer>
          <Logo />
        </LogoContainer>
        <TitleSmall fontWeight="regular">welcome to</TitleSmall>
        <Title fontWeight="bold" color={colors.primary}>
          MyAnimes
        </Title>
      </LoginHeaderContainer>

      <LoginSignInContainer>
        <TitleSmall fontWeight="regular">Sign in to continue</TitleSmall>
        <LoginButtonContainer>
          <Button type="secondary" title="Login" onPress={() => authorize()} />
        </LoginButtonContainer>
      </LoginSignInContainer>
    </LoginContainer>
  );
};
