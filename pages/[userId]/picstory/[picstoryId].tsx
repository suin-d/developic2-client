import styled from '@emotion/styled';
import Link from 'next/link';
import React from 'react';
import Layout from '../../../components/Layout';
import PicstoryDetailList from '../../../components/List/PicstoryDetailList';
import BlogPicstoryDetailBox from '../../../components/Result/BlogPicstoryDetail';
import { loadBlogPicstoryDetailAction, loadBlogUserAction } from '../../../modules/blog';
import useBlog from '../../../modules/blog/hooks';
import wrapper from '../../../modules/store';
import { authServersiceAction } from '../../../utils/getServerSidePropsTemplate';
import { MdNavigateBefore } from 'react-icons/md';

const PicstoryDetailContainer = styled.section`
  max-width: 850px;
  margin: 0 auto;

  & > span {
    font-size: ${({ theme }) => theme.fontSize.xxxxl};
    cursor: pointer;
    color: ${({ theme }) => theme.textColor.initial};
    svg {
      border-radius: 50%;
      &:hover {
        background-color: ${({ theme }) => theme.grayScale[3]};
      }
    }
  }
  .empty_content {
    text-align: center;
  }
  @media ${({ theme }) => theme.viewPortSize.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export default function PicstoryId(): JSX.Element {
  const { loadBlogPicstoryDetail } = useBlog();

  return (
    <Layout>
      <PicstoryDetailContainer>
        <Link href={`/${loadBlogPicstoryDetail.data?.UserId}/picstory`}>
          <span>
            <MdNavigateBefore />
          </span>
        </Link>
        <div className="empty_content">
          {!loadBlogPicstoryDetail.data?.id && '픽스토리 정보가 없습니다.'}
        </div>
        {loadBlogPicstoryDetail.data && (
          <>
            <BlogPicstoryDetailBox />
            <PicstoryDetailList />
          </>
        )}
      </PicstoryDetailContainer>
    </Layout>
  );
}
export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
  const { dispatch } = context.store;
  if (!context.params) return;
  await dispatch(loadBlogUserAction(+(context.params.userId as string)));
  await dispatch(loadBlogPicstoryDetailAction(+(context.params.picstoryId as string)));
});
