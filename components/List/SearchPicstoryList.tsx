import React from 'react';
import { BlogPicstory } from '../../modules/blog';
import SearchPicstoryCard from '../Card/SearchPicstoryCard';
import { SearchPicstoryListContainer } from './styles';

type PicstoryListPropsType = {
  searchPicstoryData: BlogPicstory[];
};
export default function SearchPicstoryList({
  searchPicstoryData,
}: PicstoryListPropsType): JSX.Element {
  return (
    <SearchPicstoryListContainer>
      {searchPicstoryData.length >= 1 &&
        searchPicstoryData.map((picstoryItem: BlogPicstory) => (
          <SearchPicstoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
    </SearchPicstoryListContainer>
  );
}
