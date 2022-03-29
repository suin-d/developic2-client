import React, { useEffect, useState } from 'react';
import { PagingBarContainer } from './styles';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { FaqType, GetCsPayload, NoticeType } from '../../modules/cs';

type PagingBarPropsType = {
  data: NoticeType[] | FaqType[] | null;
  getDataDispatch: (data: GetCsPayload) => void;
  limit?: number;
};
export default function PagingBar({
  data,
  getDataDispatch,
  limit = 8,
}: PagingBarPropsType): JSX.Element {
  const [pageLength, setPageLength] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const onClickPage = (index: number) => {
    if (index !== currentPage) {
      if (index === 0) {
        if (currentPage !== 1) {
          getDataDispatch({ limit: limit, offset: (currentPage - 2) * limit });
          setCurrentPage(prev => prev - 1);
        }
      } else if (index === pageLength + 1) {
        if (currentPage !== pageLength) {
          getDataDispatch({ limit: limit, offset: currentPage * limit });
          setCurrentPage(prev => prev + 1);
        }
      } else {
        getDataDispatch({ limit: limit, offset: (index - 1) * limit });
        setCurrentPage(index);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setPageLength(Math.ceil(data[0].id / 8));
    }
  }, []);
  return (
    <PagingBarContainer currentPage={currentPage}>
      <li onClick={() => onClickPage(0)}>
        <IoIosArrowBack />
      </li>
      {Array.from({ length: pageLength }).map((_, index) => (
        <li onClick={() => onClickPage(index + 1)}>{index + 1}</li>
      ))}
      <li onClick={() => onClickPage(pageLength + 1)}>
        <IoIosArrowForward />
      </li>
    </PagingBarContainer>
  );
}
