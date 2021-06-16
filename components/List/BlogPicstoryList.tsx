import React from 'react';
import { BlogPicstory, BlogPicstoryListData } from '../../modules/blog';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';

type PicstoryListPropsType = {
  blogPicstoryListData?: BlogPicstoryListData['blogPicstories'];
  searchPicstoryData?: BlogPicstoryListData['blogPicstories'];
};
export default function BlogPicstoryList({
  blogPicstoryListData,
  searchPicstoryData,
}: PicstoryListPropsType): JSX.Element {
  return (
    <BlogPicstoryListContainer>
      {blogPicstoryListData && blogPicstoryListData.length < 1 && (
        <div className="empty_content">등록된 픽스토리가 없습니다.</div>
      )}
      {blogPicstoryListData?.map((picstoryItem: BlogPicstory) => (
        <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
      ))}
      {searchPicstoryData?.map((picstoryItem: BlogPicstory) => (
        <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
      ))}
    </BlogPicstoryListContainer>
  );
}
