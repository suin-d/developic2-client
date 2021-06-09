import React, { useEffect } from 'react';
import Layout from './Layout';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import useBlog from '../../modules/blog/hooks';
import BlogUserProfile from '../Result/BlogUserProfile';
import BlogPageNavigation from '../Nav/BlogPageNavigation';
const BlogwithProfileContainer = styled.main`
  margin: 40px auto;
  width: 850px;
  position: relative;
  color: ${({ theme }) => theme.textColor.initial};
`;

const UserProfileWithTabContainer = styled.section`
  margin: 0 auto;
`;

type BlogWithNavLayoutPropsType = {
  children: React.ReactNode;
};
export default function BlogWithNavLayout({
  children,
}: BlogWithNavLayoutPropsType): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;
  const { loadBlogUserDispatch, blogUserData } = useBlog();

  useEffect(() => {
    if (userId) {
      loadBlogUserDispatch(userId);
    }
  }, [userId]);

  if (!blogUserData) return <></>;

  return (
    <Layout>
      <BlogwithProfileContainer>
        <UserProfileWithTabContainer>
          <BlogUserProfile />
          <BlogPageNavigation />
        </UserProfileWithTabContainer>
        {children}
      </BlogwithProfileContainer>
    </Layout>
  );
}
