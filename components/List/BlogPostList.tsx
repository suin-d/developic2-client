import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import useFetchMore from '../../hooks/useFetchMore';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

export const breakpointBlogPostColumnsObj = {
  default: 2,
  450: 1,
};

export default function BlogPostList(): JSX.Element {
  const { userData } = useUser();
  const { loadBlogPostListDispatch, loadBlogPostList, hasMore, loadBlogUser } = useBlog();
  const [FetchMoreTrigger, page] = useFetchMore(hasMore);
  const router = useRouter();

  useEffect(() => {
    if (hasMore && page > 0) {
      loadBlogPostListDispatch({
        userId: +(router.query.userId as string),
        limit: 12,
        offset: page * 12,
      });
    }
  }, [hasMore, loadBlogPostListDispatch, page, router.query.userId]);

  if (!loadBlogPostList.data) return <></>;

  return (
    <BlogPostListContainer>
      {!hasMore && loadBlogPostList.data.length < 1 && (
        <div className="empty_content">등록된 포스트가 없습니다.</div>
      )}
      <Masonry
        breakpointCols={breakpointBlogPostColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {userData?.id === loadBlogUser.data?.id
          ? loadBlogPostList.data
              .filter(data => data.isPublic === 1 || data.isPublic === 0)
              .map(blogPostItem => (
                <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
              ))
          : loadBlogPostList.data
              .filter(data => data.isPublic === 1)
              .map(blogPostItem => (
                <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
              ))}
      </Masonry>
      <FetchMoreTrigger />
    </BlogPostListContainer>
  );
}
