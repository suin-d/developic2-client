import React from 'react';
import { SearchPageData } from '../../modules/list';
import CommonPostCard from '../Card/CommonPostCard';
import { PostSearchListContainer } from './styles';

type PostCardListPropsType = {
  searchPostListData: SearchPageData['post'];
};

export default function SearchPostCardList({
  searchPostListData,
}: PostCardListPropsType): JSX.Element {
  return (
    <>
      <PostSearchListContainer>
        {searchPostListData.length > 0 &&
          searchPostListData.map(postItem => (
            <CommonPostCard key={postItem.id} postData={postItem} />
          ))}
      </PostSearchListContainer>
    </>
  );
}
