import React from 'react';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const FilterButtonsContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  margin-right: 16px;
  flex-direction: row;
  height: 40px;
  min-width: 40px;
  border-radius: 4px;
  background-color: #2f2f2f;
  padding-right: 8px;
`;

export const FilterViewContainer = styled.View`
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background-color: ${colors.gray};
  padding-right: 8px;
  border-radius: 4px;
`;

export const FilterButton = styled.Pressable`
  height: 30px;
  width: 30px;
  padding: 5px;
  margin-left: 8px;
  justify-content: center;
  align-items: center;
`;
