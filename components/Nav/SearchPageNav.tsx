import { useRouter } from 'next/router';
import _debounce from 'lodash/debounce';
import React, { useCallback, useState } from 'react';
import SearchInput from '../Input/SearchInput';
import TitleLabel from '../Label/TitleLabel';
import Layout from '../Layout';
import SearchPageNavigation from './SearchPageNavigation';
import Head from 'next/head';
import { SearchPageWithNavContainer } from './styles';

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
      <Head>
        <title>검색</title>
      </Head>
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
