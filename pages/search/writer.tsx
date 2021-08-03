import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { dateOptionData, sortOptionData } from '.';
import UserCardList from '../../components/List/UserCardList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import { SearchContentBox } from '../../components/Result/styles';
import SortOption from '../../components/Tab/SortOption';
import useFetchMore from '../../hooks/useFetchMore';
import { SearchPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchNavData } from '../../utils/data';

export default function SearchWriter(): JSX.Element {
  const { pageData, getSearchListDispatch, hasMore } = useList();
  const [currentSort, setCurrentSort] = useState(sortOptionData[0]);
  const [currentDate, setCurrentDate] = useState(dateOptionData[0]);
  const [FetchMoreTrigger, page, setPage] = useFetchMore(hasMore);
  const { query } = useRouter();

  useEffect(() => {
    setPage(0);
  }, [query.keyword, currentSort, currentDate, setPage]);

  useEffect(() => {
    if (query.keyword) {
      getSearchListDispatch({
        query: query.keyword,
        sort: currentSort.value as 'popular' | 'recent',
        type: 'writer',
        term: currentDate.value as 'all' | 'day' | 'week' | 'month',
        limit: 12,
        offset: page * 12,
      });
    }
  }, [query, currentSort, currentDate, getSearchListDispatch, page]);

  return (
    <SearchPageWithNavLayout>
      <SearchContentBox>
        <div className="sort-option">
          <SortOption
            sortOptionData={sortOptionData}
            setCurrentSort={setCurrentSort}
            currentSort={currentSort}
          />
          {currentSort.value === sortOptionData[0].value && (
            <SortOption
              sortOptionData={dateOptionData}
              setCurrentSort={setCurrentDate}
              currentSort={currentDate}
            />
          )}
        </div>
        {(pageData as SearchPageDataType).writer &&
          (pageData as SearchPageDataType).writer.length < 1 && (
            <EmptyContent message={'검색된 작가가 없습니다.'} />
          )}
        {(pageData as SearchPageDataType).writer &&
          (pageData as SearchPageDataType).writer.length >= 1 && (
            <>
              <SearchResultCount
                searchTitle={SearchNavData[1].name}
                resultCount={(pageData as SearchPageDataType).writer.length}
              />
              <UserCardList />
              <FetchMoreTrigger />
            </>
          )}
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
