import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  SetStateAction,
  Dispatch,
} from 'react';
import { FetchMoreTriggerContainer } from '../components/Result/styles';

export default function useFetchMore(
  loading = false
): [() => JSX.Element, number, Dispatch<SetStateAction<number>>] {
  const [page, setPage] = useState(0);

  const fetchMoreTrigger = useRef<HTMLDivElement>(null);

  const FetchMore = useCallback(() => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
      const fetchMoreObserver = new IntersectionObserver(([{ isIntersecting }]) => {
        if (isIntersecting) setPage(prev => prev + 1);
      });
      if (fetchMoreTrigger.current) {
        fetchMoreObserver.observe(fetchMoreTrigger.current);
      }
      return () => {
        if (fetchMoreTrigger.current) {
          fetchMoreObserver.unobserve(fetchMoreTrigger.current);
        }
      };
    }, []);

    return (
      <FetchMoreTriggerContainer
        id="fetchMore"
        className={loading ? 'loading' : ''}
        ref={fetchMoreTrigger}
      >
        {loading && (
          <>
            <img src="/pencil_loading.gif" alt="loading..." />
            <p>불러오는중..</p>
          </>
        )}
      </FetchMoreTriggerContainer>
    );
  }, [loading]);

  return [FetchMore, page, setPage];
}
