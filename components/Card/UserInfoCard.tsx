import React from 'react';
import Link from 'next/link';
import { UserInfoCardBox } from './styles';
import { PostUser } from '../../modules/list';
import { useThemeState } from '../../hooks/ThemeContext';
import Image from 'next/image';

type UserInfoCardPropsType = {
  userInfoData: PostUser;
};
export default function UserInfoCard({
  userInfoData,
}: UserInfoCardPropsType): JSX.Element {
  const currentTheme = useThemeState();

  if (!userInfoData) <></>;

  return (
    <Link href={`/${userInfoData.id}/post`}>
      <UserInfoCardBox currentTheme={currentTheme}>
        <article>
          <div className="profile__wrapper">
            <img src={userInfoData.avatar} alt={userInfoData.nickname} />
          </div>
          <h3>{userInfoData.nickname}</h3>
          <p>{userInfoData.introduce}</p>
          <div className="writer__add-info">
            <div>
              <div>구독자 수</div>
              <span>{userInfoData.subscribers?.length}</span>
            </div>
            <div>
              <div>글 수</div>
              <span>{userInfoData.Posts?.length}</span>
            </div>
          </div>
          <div className="writer__recent-img">
            {userInfoData.Posts &&
              userInfoData.Posts.slice(0, 3).map(imgItem => (
                <li className="img__box" key={imgItem.id}>
                  <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_600 + imgItem.thumbnail}
                    alt="작가의 최근 포스트 썸네일"
                    width={200}
                    height={200}
                    objectFit="cover"
                  />
                </li>
              ))}
          </div>
        </article>
      </UserInfoCardBox>
    </Link>
  );
}
