import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import Masonry from 'react-masonry-css';
import useFetchMore from '../../hooks/useFetchMore';
import { BlogPost } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

export default function BlogPostList(): JSX.Element {
  const { loadBlogPostListDispatch, loadBlogPostList, hasMore } = useBlog();
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
      <div className="empty_content">
        {!hasMore && loadBlogPostList.data.length < 1 && '등록된 포스트가 없습니다.'}
      </div>
      <Masonry
        breakpointCols={2}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {loadBlogPostList.data.map((blogPostItem: BlogPost) => (
          <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
        ))}
      </Masonry>
      <FetchMoreTrigger />
    </BlogPostListContainer>
  );
}
