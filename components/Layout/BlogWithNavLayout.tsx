import Layout from './Layout';
import useBlog from '../../modules/blog/hooks';
import BlogUserProfile from '../Result/BlogUserProfile';
import BlogPageNavigation from '../Nav/BlogPageNavigation';
import Head from 'next/head';
import { BlogwithProfileContainer, UserProfileWithTab } from './styles';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

type BlogWithNavLayoutPropsType = {
  children: React.ReactNode;
};
export default function BlogWithNavLayout({
  children,
}: BlogWithNavLayoutPropsType): JSX.Element {
  const {
    loadBlogUserDispatch,
    loadBlogUser: { data: blogUserData },
  } = useBlog();
  const router = useRouter();

  useEffect(() => {
    loadBlogUserDispatch(+(router.query.userId as string));
  }, [loadBlogUserDispatch, router.query.userId]);

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
