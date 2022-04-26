import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const LoginContainer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.darkerGray};
`;

export const LoginHeaderContainer = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 25%;
`;

export const LogoContainer = styled.View`
  width: 135px;
  height: 70px;
  justify-content: center;
  align-items: center;
`;

export const LoginSignInContainer = styled.View`
  flex-direction: column;
  align-items: center;
`;

export const LoginButtonContainer = styled.View`
  width: 150px;
  margin-top: 22px;
`;
