import React from 'react';
import { BlogPicstoryContainer } from '../../../components/Layout';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogPicstoryList from '../../../components/List/BlogPicstoryList';

export default function Picstory(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogPicstoryContainer>
        <BlogPicstoryList />
      </BlogPicstoryContainer>
    </BlogWithNavLayout>
  );
}
