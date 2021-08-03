import React from 'react';
import { SearchPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';
import SearchPicstoryCard from '../Card/SearchPicstoryCard';
import { SearchPicstoryListContainer } from './styles';

export default function SearchPicstoryList(): JSX.Element {
  const { pageData } = useList();

  return (
    <SearchPicstoryListContainer>
      {(pageData as SearchPageDataType).picstory.length > 0 &&
        (pageData as SearchPageDataType).picstory.map(picstoryItem => (
          <SearchPicstoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
    </SearchPicstoryListContainer>
  );
}
