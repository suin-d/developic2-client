import Layout from './Layout';
import styled from '@emotion/styled';
import useBlog from '../../modules/blog/hooks';
import BlogUserProfile from '../Result/BlogUserProfile';
import BlogPageNavigation from '../Nav/BlogPageNavigation';
import Head from 'next/head';

const BlogwithProfileContainer = styled.main`
  font-family: 'Noto Serif KR';
  margin: 40px auto;
  max-width: 850px;
  min-height: 650px;
  position: relative;
  color: ${({ theme }) => theme.textColor.initial};
  @media ${({ theme }) => theme.viewPortSize.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    margin: 25px auto;
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
    .block {
      background: ${({ theme }) => theme.grayScale[4]};
      height: 1em;
      margin: 0 -1rem;
      box-shadow: 0px 4px 4px -4px rgb(0, 0, 0, 0.03) inset,
        0px -4px 4px -4px rgb(0, 0, 0, 0.04) inset;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
  }
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
          <div className="block" />
          <BlogPageNavigation />
        </UserProfileWithTab>
        {children}
      </BlogwithProfileContainer>
    </Layout>
  );
}
