import React, {useEffect, useState} from 'react';
import {Item} from '../Item/Item';
import {ItemListContainer} from './ItemList.styles';
import {itemDataType} from '../../typings/data';
export interface ItemListProps {
  viewType: 'table' | 'list';
  data: itemDataType[] | undefined;
}

export const ItemList: React.FC<ItemListProps> = props => {
  const {viewType, data} = props;

  const RenderItens = ({item}: {item: itemDataType}) => (
    <Item data={item} viewType={viewType} />
  );

  return (
    <>
      {data && (
        <ItemListContainer<React.ElementType>
          data={data}
          renderItem={RenderItens}
          numColumns={viewType === 'list' ? 1 : 3}
          key={viewType === 'list' ? 1 : 3}
          // eslint-disable-next-line react-native/no-inline-styles
          contentContainerStyle={{paddingBottom: 16}}
        />
      )}
    </>
  );
};
