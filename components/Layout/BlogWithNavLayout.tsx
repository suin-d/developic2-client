import Layout from './Layout';
import styled from '@emotion/styled';
import useBlog from '../../modules/blog/hooks';
import BlogUserProfile from '../Result/BlogUserProfile';
import BlogPageNavigation from '../Nav/BlogPageNavigation';
import Head from 'next/head';

const BlogwithProfileContainer = styled.main`
  margin: 40px auto;
  max-width: 850px;
  min-height: 650px;
  position: relative;
  color: ${({ theme }) => theme.textColor.initial};
`;
const UserProfileWithTab = styled.div`
  margin: 0 auto;
`;

type BlogWithNavLayoutPropsType = {
  children: React.ReactNode;
};
export default function BlogWithNavLayout({
  children,
}: BlogWithNavLayoutPropsType): JSX.Element {
  const {
    loadBlogUser: { data: blogUserData },
  } = useBlog();

  return (
    <Layout>
      <Head>
        <title>{blogUserData?.nickname}님의 블로그</title>
      </Head>
      <BlogwithProfileContainer>
        <UserProfileWithTab>
          <BlogUserProfile />
          <BlogPageNavigation />
        </UserProfileWithTab>
        {children}
      </BlogwithProfileContainer>
    </Layout>
  );
}
