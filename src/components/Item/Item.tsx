import React from 'react';
import {StarIcon} from '../../assets/svg';
import {colors} from '../../styles/colors';
import {Paragraph} from '../../styles/typography';
import LinearGradient from 'react-native-linear-gradient';

import {
  ItemContainer,
  ItemImage,
  ItemImageContainer,
  ItemImageTitleContainer,
  ItemInfoContainer,
  ItemScoreContainer,
} from './Item.styles';

import {itemDataType} from '../../typings/data';

export interface ItemProps {
  viewType: 'list' | 'table';
  data: itemDataType | undefined;
}

export const Item: React.FC<ItemProps> = props => {
  const {viewType, data} = props;

  const getNumberOfVolumes = (type: 'anime' | 'manga') => {
    const number = data!.num_episodes || data!.num_volumes;
    if (data && number) {
      return `${number} ${type === 'anime' ? 'episode' : 'volume'}${
        number > 1 ? 's' : ''
      }`;
    }
  };
  return (
    <>
      {data && (
        <ItemContainer viewType={viewType}>
          <ItemImageContainer>
            <ItemImage
              source={{uri: data.main_picture.medium}}
              resizeMode={'cover'}
              viewType={viewType}
            />
            {viewType !== 'list' && (
              <LinearGradient
                colors={[colors.transparent, colors.black]}
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  justifyContent: 'flex-end',
                }}>
                <ItemImageTitleContainer>
                  <Paragraph
                    marginBottom={16}
                    fontWeight="regular"
                    numberOfLines={3}
                    ellipsizeMode={'tail'}>
                    {data.title}
                  </Paragraph>
                </ItemImageTitleContainer>
              </LinearGradient>
            )}
          </ItemImageContainer>
          {viewType === 'list' && (
            <ItemInfoContainer>
              <Paragraph
                marginBottom={16}
                fontWeight="regular"
                numberOfLines={2}
                ellipsizeMode={'tail'}>
                {data.title}
              </Paragraph>
              <Paragraph fontWeight="regular" color={colors.lightGray}>
                {getNumberOfVolumes(data.type)}
              </Paragraph>
              <Paragraph fontWeight="regular" color={colors.lightGray}>
                {`${data.num_list_users} members`}
              </Paragraph>
              <ItemScoreContainer>
                <Paragraph fontWeight="regular">
                  Scored: <StarIcon fill={colors.yellow} /> {data.mean}
                </Paragraph>
                <Paragraph fontWeight="regular" />
              </ItemScoreContainer>
            </ItemInfoContainer>
          )}
        </ItemContainer>
      )}
    </>
  );
};
