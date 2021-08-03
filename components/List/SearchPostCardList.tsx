import React from 'react';
import { SearchPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';
import CommonPostCard from '../Card/CommonPostCard';
import { PostSearchListContainer } from './styles';

export default function SearchPostCardList(): JSX.Element {
  const { pageData } = useList();

  return (
    <>
      <PostSearchListContainer>
        {(pageData as SearchPageDataType).post.length > 0 &&
          (pageData as SearchPageDataType).post.map(postItem => (
            <CommonPostCard key={postItem.id} postData={postItem} />
          ))}
      </PostSearchListContainer>
    </>
  );
}
