import {Dimensions} from 'react-native';
import styled from 'styled-components/native';
import {colors} from '../../styles/colors';
import {ItemProps} from './Item';

const VIEW_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = (VIEW_WIDTH - 40) / 3;
const ITEM_HEIGHT = (ITEM_WIDTH * 1.4).toFixed(0);

export const ItemContainer = styled.View<Pick<ItemProps, 'viewType'>>`
  width: ${props => (props.viewType === 'table' ? ITEM_WIDTH + 'px' : 'auto')};
  height: ${props =>
    props.viewType === 'table' ? ITEM_HEIGHT + 'px' : 'auto'};
  background-color: ${colors.gray};
  padding: ${props => (props.viewType === 'list' ? '8px' : '0')};
  margin: 4px;
  box-sizing: border-box;
  flex-direction: row;
  position: relative;
`;

export const ItemImageContainer = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
`;

export const ItemInfoContainer = styled.View`
  flex: 3;
  margin-left: 16px;
  flex-direction: column;
  justify-content: space-between;
`;

export const ItemScoreContainer = styled.View`
  width: 100%;
  flex-direction: row;
  align-items: center;
`;

export const ItemImage = styled.Image<Pick<ItemProps, 'viewType'>>`
  flex: 1;
  top: 0;
  left: 0;
  height: ${props => (props.viewType === 'list' ? 130 : ITEM_HEIGHT)}px;
  width: ${props => (props.viewType === 'list' ? 'auto' : ITEM_WIDTH + 'px')};
`;

export const ItemImageTitleContainer = styled.View`
  width: 100%;
  height: 50%;
  padding: 8px;
`;
