import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import SearchInput from '../Input/SearchInput';
import TitleLabel from '../Label/TitleLabel';
import { PageWithNavContainer } from '../Layout/PageWithNavLayout';
import Layout from '../Layout';
import SearchPageNavigation from './SearchPageNavigation';

const SearchPageWithNavContainer = styled(PageWithNavContainer)`
  color: ${({ theme }) => theme.textColor.initial};
  max-width: 1150px;
  min-height: 650px;
  @media ${({ theme }) => theme.viewPortSize.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 850px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
    .title {
      margin: 15px 0;
    }
    .block {
      background: ${({ theme }) => theme.grayScale[4]};
      height: 1em;
      margin: 0 -1rem;
      box-shadow: 0px 4px 4px -4px rgb(0, 0, 0, 0.03) inset,
        0px -4px 4px -4px rgb(0, 0, 0, 0.04) inset;
    }
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;

type SearchPageWithNavPropsType = {
  children: React.ReactNode;
};
export default function SearchPageWithNavLayout({
  children,
}: SearchPageWithNavPropsType): JSX.Element {
  const router = useRouter();
  const [keyword, setKeyword] = useState(router.query.keyword as string);

  const debounce = useCallback(
    _debounce(searchValue => {
      router.push(`${router.pathname}?keyword=${searchValue}`);
    }, 500),
    [router.pathname]
  );

  const onChangeKeyword = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
    debounce(e.target.value);
  }, []);

  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };
  return (
    <Layout>
      <SearchPageWithNavContainer>
        <div className="title">
          <TitleLabel title="검색" desc="Search" />
        </div>
        <SearchInput
          value={keyword || ''}
          onChange={onChangeKeyword}
          onKeyPress={onKeyPress}
        />
        <div className="block" />
        <SearchPageNavigation />
        {children}
      </SearchPageWithNavContainer>
    </Layout>
  );
}
