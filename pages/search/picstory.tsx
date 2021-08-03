import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import SearchPicstoryList from '../../components/List/SearchPicstoryList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import { SearchPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchNavData } from '../../utils/data';
import { SearchContentBox } from '../../components/Result/styles';
import useFetchMore from '../../hooks/useFetchMore';

export default function SearchPicstory(): JSX.Element {
  const { pageData, getSearchListDispatch, hasMore } = useList();
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);
  const { query } = useRouter();

  useEffect(() => {
    setPage(0);
  }, [query.keyword, setPage]);

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({
        query: query.keyword,
        type: 'picstory',
        limit: 12,
        offset: page * 12,
      });
    }
  }, [getSearchListDispatch, page, query]);

  return (
    <SearchPageWithNavLayout>
      <SearchContentBox>
        {(pageData as SearchPageDataType).picstory &&
          (pageData as SearchPageDataType).picstory.length < 1 && (
            <EmptyContent message={'검색된 픽스토리가 없습니다.'} />
          )}
        {(pageData as SearchPageDataType).picstory &&
          (pageData as SearchPageDataType).picstory.length >= 1 && (
            <>
              <SearchResultCount
                searchTitle={SearchNavData[2].name}
                resultCount={(pageData as SearchPageDataType).picstory.length}
              />
              <SearchPicstoryList />
              <FetchMoreTrigger />
            </>
          )}
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
