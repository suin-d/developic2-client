import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import useFetchMore from '../../hooks/useFetchMore';
import { BlogPicstory } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import BlogPistoryCard from '../Card/BlogPistoryCard';
import { BlogPicstoryListContainer } from './styles';

import Incomplete from '../Result/Incomplete';

export default function BlogPicstoryList(): JSX.Element {
  const router = useRouter();
  const { loadBlogPicstoryListDispatch, loadBlogPicstoryList, hasMore } = useBlog();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (hasMore && page > 0) {
      loadBlogPicstoryListDispatch({
        userId: router.query.userId,
        limit: 12,
        offset: page * 12,
      });
    }
  }, [page]);

  if (loadBlogPicstoryList.data && loadBlogPicstoryList.data.length < 1)
    return <Incomplete type="notData" title="등록된 픽스토리가 없어요." />;

  return (
    <BlogPicstoryListContainer>
      {loadBlogPicstoryList.data?.map((picstoryItem: BlogPicstory) => (
        <BlogPistoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
      ))}
      <FetchMoreTrigger />
    </BlogPicstoryListContainer>
  );
}
