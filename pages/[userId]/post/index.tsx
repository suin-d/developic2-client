import React from 'react';
import { BlogPostContainer } from '../../../components/Layout';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPostList from '../../../components/List/BlogPostList';

export default function BlogPosts(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogPostContainer>
        <BlogPostList />
      </BlogPostContainer>
    </BlogWithNavLayout>
  );
}
