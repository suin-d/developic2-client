import React from 'react';
import { BlogPicstory } from '../../modules/blog';
import BlogPistoryCard from '../Card/BlogPistoryCard';
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
          <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
        ))}
    </BlogPicstoryListContainer>
  );
}
