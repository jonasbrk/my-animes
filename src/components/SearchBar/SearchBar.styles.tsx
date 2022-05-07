import React from 'react';
import {TouchableOpacityProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const SearchContainer = styled.View`
  width: 100%;
  height: 35px;
  background-color: ${colors.darkerGray};
  border-radius: 4px;
`;

export const SearchIconContainer = styled.View`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 35px;
  align-items: center;
  justify-content: center;
`;

export const SearchInput = styled.TextInput`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  color: ${colors.lightGray};
`;

interface SearchButtonProps extends TouchableOpacityProps {
  loading?: boolean;
  visible?: boolean;
}

export const SearchButton = styled.TouchableOpacity<SearchButtonProps>`
  height: 100%;
  width: 35px;
  display: ${props => (props.visible ? 'flex' : 'none')};
  position: absolute;
  right: 0;
  top: 0;
  justify-content: center;
  align-items: center;
`;

export const SearchButtonLoading = styled.ActivityIndicator`
  height: 15px;
  width: 15px;
`;
