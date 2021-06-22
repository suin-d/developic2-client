import React from 'react';
import { BlogPicstory } from '../../modules/blog';
import BlogPicstoryCard from '../Card/BlogPicstoryCard';
import { BlogPicstoryListContainer } from './styles';

type PicstoryListPropsType = {
  searchPicstoryData: BlogPicstory[];
};
export default function SearchPicstoryList({
  searchPicstoryData,
}: PicstoryListPropsType): JSX.Element {
  return (
    <BlogPicstoryListContainer>
      {searchPicstoryData.length >= 1 &&
        searchPicstoryData.map((picstoryItem: BlogPicstory) => (
          <BlogPicstoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
    </BlogPicstoryListContainer>
  );
}
