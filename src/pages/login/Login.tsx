import React from 'react';
import {Button} from '../../components/Button';
import {colors} from '../../styles/colors';
import {Title, TitleSmall} from '../../styles/typography';
import {Logo} from '../../assets/svg';
import {
  LoginButtonContainer,
  LoginContainer,
  LoginHeaderContainer,
  LoginSignInContainer,
  LogoContainer,
} from './Login.styles';

export const Login = () => {
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
          <Button type="secondary" title="Login" />
        </LoginButtonContainer>
      </LoginSignInContainer>
    </LoginContainer>
  );
};
