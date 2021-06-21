import React from 'react';
import { BlogUserData } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import EmptyBlogUserInfo from './EmptyBlogUserInfo';
import { BlogUserInfoBox } from './styles';

export default function BlogUserInfo(): JSX.Element {
  const { loadBlogUser } = useBlog();
  const { userData } = useUser();

  if (
    !loadBlogUser.data ||
    (!loadBlogUser.data.introduction &&
      !loadBlogUser.data.mostlyUseModel &&
      !loadBlogUser.data.website &&
      userData)
  )
    return (
      <EmptyBlogUserInfo
        blogUserId={(loadBlogUser.data as BlogUserData).id}
        userId={userData && userData.id}
      />
    );
  return (
    <>
      <BlogUserInfoBox>
        {loadBlogUser.data.introduction && (
          <div className="user__info">
            <strong>소개</strong>
            <p>{loadBlogUser.data.introduction}</p>
          </div>
        )}
        {loadBlogUser.data.mostlyUseModel && (
          <div className="user__info">
            <strong>주 사용기기</strong>
            <p>{loadBlogUser.data.mostlyUseModel}</p>
          </div>
        )}
        {loadBlogUser.data.website && (
          <div className="user__info">
            <strong>웹 사이트</strong>
            <p>{loadBlogUser.data.website}</p>
          </div>
        )}
      </BlogUserInfoBox>
    </>
  );
}
