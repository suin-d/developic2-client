import React from 'react';
import { SearchPageDataType } from '../../modules/list';
import useList from '../../modules/list/hooks';
import UserInfoCard from '../Card/UserInfoCard';
import { UserCardListContainer } from './styles';

export default function UserCardList(): JSX.Element {
  const { pageData } = useList();

  return (
    <UserCardListContainer>
      {(pageData as SearchPageDataType).writer.length > 0 &&
        (pageData as SearchPageDataType).writer.map(userInfoItem => (
          <UserInfoCard key={userInfoItem.id} userInfoData={userInfoItem} />
        ))}
    </UserCardListContainer>
  );
}
