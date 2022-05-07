import React, {useEffect, useState} from 'react';
import {SearchIcon, XmarkIcon} from '../../assets/svg';
import {colors} from '../../styles/colors';
import {
  SearchButton,
  SearchButtonLoading,
  SearchContainer,
  SearchIconContainer,
  SearchInput,
} from './SearchBar.styles';

interface SearchBarProps {
  onChange: (querry: string) => void;
  loading: boolean;
}

export const SearchBar: React.FC<SearchBarProps> = props => {
  const {onChange, loading = false} = props;
  const [query, setQuerry] = useState<string>('');

  const HandleQuerry = (text: string) => {
    setQuerry(text);
  };

  useEffect(() => {
    onChange(query);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query]);

  return (
    <SearchContainer>
      <SearchInput
        value={query}
        placeholder="Pesquise seu anime/manga"
        placeholderTextColor={colors.lightGray}
        selectionColor={colors.lightGray}
        onChangeText={text => {
          HandleQuerry(text);
        }}
      />
      <SearchIconContainer>
        <SearchIcon fill={colors.lightGray} />
      </SearchIconContainer>
      <SearchButton
        disabled={loading}
        loading={loading}
        visible={query.length > 0}
        onPress={() => setQuerry('')}>
        {loading ? (
          <SearchButtonLoading color={colors.lightGray} />
        ) : (
          <XmarkIcon fill={colors.lightGray} />
        )}
      </SearchButton>
    </SearchContainer>
  );
};
