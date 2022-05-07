import React, {useEffect, useState} from 'react';
import {FilterIcon, ListFilterIcon, TableFilterIcon} from '../../assets/svg';
import {colors} from '../../styles/colors';
import {
  FilterButton,
  FilterButtonsContainer,
  FilterViewContainer,
} from './FilterButtons.styles';

interface FilterButtonsProps {
  onViewChange: (view: 'list' | 'table') => void;
  onPress: () => void;
  isActive: boolean;
}

export const FilterButtons: React.FC<FilterButtonsProps> = props => {
  const {onViewChange, onPress, isActive} = props;
  const [view, setView] = useState<'list' | 'table'>('list');

  useEffect(() => {
    onViewChange(view);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  return (
    <FilterButtonsContainer>
      <FilterViewContainer>
        <FilterButton onPress={() => setView('list')}>
          <ListFilterIcon
            fill={view === 'list' ? colors.primary : colors.white}
          />
        </FilterButton>
        <FilterButton onPress={() => setView('table')}>
          <TableFilterIcon
            fill={view === 'table' ? colors.primary : colors.white}
          />
        </FilterButton>
      </FilterViewContainer>
      <FilterButton onPress={() => onPress()}>
        <FilterIcon fill={isActive ? colors.primary : colors.white} />
      </FilterButton>
    </FilterButtonsContainer>
  );
};
