import React from 'react';
import {PressableProps, TouchableWithoutFeedbackProps} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';

export const SwitchContainer = styled.View`
  flex-direction: row;
  height: 30px;
  width: 100%;
  margin: 16px 0;
`;

interface SwitchButtonProps extends PressableProps {
  active: boolean;
}

export const SwitchButton = styled.Pressable<SwitchButtonProps>`
  height: 100%;
  width: 50%;
  justify-content: space-between;
  align-items: center;
  border-bottom-width: 5px;
  border-bottom-color: ${props =>
    props.active ? colors.primary : colors.white};
`;
