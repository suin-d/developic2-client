import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import SearchPostCardList from '../../components/List/SearchPostCardList';
import SearchPageWithNavLayout from '../../components/Nav/SearchPageNav';
import EmptyContent from '../../components/Result/EmptyContent';
import SearchResultCount from '../../components/Result/SearchResultCount';
import { SearchContentBox } from '../../components/Result/styles';
import SortOption from '../../components/Tab/SortOption';
import useFetchMore from '../../hooks/useFetchMore';
import { SearchPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';
import { SearchNavData } from '../../utils/data';

export const sortOptionData = [
  { name: '인기순', value: 'popular' },
  { name: '최신순', value: 'recent' },
];

export const dateOptionData = [
  { name: '모든 기간', value: 'all' },
  { name: '최근 24시간', value: 'day' },
  { name: '최근 1주일', value: 'week' },
  { name: '최근 1개월', value: 'month' },
];

export default function SearchPost(): JSX.Element {
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
        type: 'post',
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
        {(pageData as SearchPageDataType).post &&
          (pageData as SearchPageDataType).post.length < 1 && (
            <EmptyContent message={'검색된 글이 없습니다.'} />
          )}
        {(pageData as SearchPageDataType).post &&
          (pageData as SearchPageDataType).post.length >= 1 && (
            <>
              <SearchResultCount
                searchTitle={SearchNavData[0].name}
                resultCount={(pageData as SearchPageDataType).post.length}
              />
              <SearchPostCardList />
              <FetchMoreTrigger />
            </>
          )}
      </SearchContentBox>
    </SearchPageWithNavLayout>
  );
}
