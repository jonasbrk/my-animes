import styled from 'styled-components/native';
import {colors} from './colors';

interface TypographyProps {
  color?: string;
  fontWeight: 'bold' | 'regular' | 'light';
  marginTop?: number;
  marginBottom?: number;
  fontSize?: number;
  width?: string;
  textAlign?: 'left' | 'center' | 'right';
}

const fontWeight: Record<TypographyProps['fontWeight'], number> = {
  bold: 700,
  regular: 400,
  light: 100,
};

export const Title = styled.Text<TypographyProps>`
  color: ${props => (props.color ? props.color : colors.white)};
  font-size: 32px;
  font-weight: ${props => fontWeight[props.fontWeight]};
  text-align: ${props => props.textAlign || 'left'};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const TitleSmall = styled.Text<TypographyProps>`
  color: ${props => (props.color ? props.color : colors.white)};
  width: ${props => props.width || 'auto'};
  font-size: 24px;
  font-weight: ${props => fontWeight[props.fontWeight]};
  text-align: ${props => props.textAlign || 'left'};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const Paragraph = styled.Text<TypographyProps>`
  color: ${props => (props.color ? props.color : colors.white)};
  width: ${props => props.width || 'auto'};
  font-size: 16px;
  font-weight: ${props => fontWeight[props.fontWeight]};
  text-align: ${props => props.textAlign || 'left'};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;

export const TextSmall = styled.Text<TypographyProps>`
  color: ${props => (props.color ? props.color : colors.white)};
  width: ${props => props.width || 'auto'};
  font-size: 12px;
  font-weight: ${props => fontWeight[props.fontWeight]};
  text-align: ${props => props.textAlign || 'left'};
  margin-top: ${props => props.marginTop || 0}px;
  margin-bottom: ${props => props.marginBottom || 0}px;
`;
