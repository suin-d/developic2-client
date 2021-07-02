import { useRouter } from 'next/router';
import React from 'react';
import { useEffect } from 'react';
import useFetchMore from '../../hooks/useFetchMore';
import { BlogPicstory } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import BlogPicstoryCard from '../Card/BlogPicstoryCard';
import { BlogPicstoryListContainer } from './styles';

export default function BlogPicstoryList(): JSX.Element {
  const router = useRouter();
  const { loadBlogPicstoryListDispatch, loadBlogPicstoryList, hasMore } = useBlog();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);

  useEffect(() => {
    if (hasMore && page > 0) {
      loadBlogPicstoryListDispatch({
        userId: +(router.query.userId as string),
        limit: 12,
        offset: page * 12,
      });
    }
  }, [hasMore, loadBlogPicstoryListDispatch, page, router.query.userId]);

  if (!loadBlogPicstoryList.data) return <></>;

  return (
    <BlogPicstoryListContainer>
      <div className="empty_content">
        {!hasMore &&
          loadBlogPicstoryList.data.length < 1 &&
          '등록된 픽스토리가 없습니다.'}
      </div>
      {loadBlogPicstoryList.data.map((picstoryItem: BlogPicstory) => (
        <BlogPicstoryCard key={picstoryItem.id} picstoryData={picstoryItem} />
      ))}
      <FetchMoreTrigger />
    </BlogPicstoryListContainer>
  );
}
