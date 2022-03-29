import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import PageLabel from '../../components/Label/PageLabel';
import PageWithNavLayout from '../../components/Layout/PageWithNavLayout';
import NoticeList from '../../components/List/NoticeList';
import useCS from '../../modules/cs/hooks';
import { CSNavData } from '../../utils/data';

const FaqContainer = styled.section`
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    .cs__left {
      div {
        padding-left: 0;
      }
      h1 {
        font-size: 32px;
      }
      p {
      }
    }
    .cs__right {
      margin: 20px 0 30px 0;
    }
  }
`;

export default function Faq(): JSX.Element {
  const { getFaqDispatch, getCs } = useCS();

  useEffect(() => {
    getFaqDispatch({ limit: 8, offset: 0 });
  }, []);
  if (!getCs.data) return <></>;
  return (
    <PageWithNavLayout pageName="고객센터" pageDesc="Customer Center" navData={CSNavData}>
      <Head>
        <title>고객센터 | FAQ</title>
      </Head>
      <FaqContainer>
        <div className="cs__left">
          <PageLabel width={490} text="FAQ" desc=" 자주 묻는 질문과 답변을 확인하세요." />
        </div>
        <div className="cs__right">
          <NoticeList data={getCs.data} getDataDispatch={getFaqDispatch} />
        </div>
      </FaqContainer>
    </PageWithNavLayout>
  );
}
