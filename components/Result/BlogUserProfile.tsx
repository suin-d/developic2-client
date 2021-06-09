import Link from 'next/link';
import React, { useCallback } from 'react';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import FollowBtn from '../Button/FollowBtn';
import { UpdateInfoButton } from '../Button/styles';
import { BlogUserProfileBox } from '../Layout';

export default function BlogUserProfile(): JSX.Element {
  const { blogUserData } = useBlog();
  const { userData, subscribeDispatch, unSubscribeDispatch } = useUser();

  const blogUserId = blogUserData?.id;

  const isFollowing = userData?.writers?.find(
    following => following.id === blogUserData?.id
  ); // 구독 여부, 일치하면 isFollowing

  const onFollowToggle = useCallback(() => {
    if (!userData) return console.log('로그인해주세요');
    // 로그인모달창 띄우기(모달창 띄우는 함수 만들기)
    if (userData && isFollowing && blogUserId) {
      unSubscribeDispatch({ writerId: blogUserId, subscriberId: userData.id });
    } else if (userData && !isFollowing && blogUserId) {
      subscribeDispatch({ writerId: blogUserId, subscriberId: userData.id });
    }
  }, [userData, isFollowing]);

  return (
    <BlogUserProfileBox>
      <div className="profile__top">
        <img src={blogUserData?.avatar} alt="profile" />
        <h1>{blogUserData && blogUserData.nickname}</h1>
        <p>{blogUserData && blogUserData.introduce}</p>
        {blogUserId !== userData?.id && (
          <FollowBtn
            isFollow={isFollowing && isFollowing}
            text={isFollowing ? '구독해지' : '구독'}
            onClick={onFollowToggle}
          ></FollowBtn>
        )}
        {blogUserId === userData?.id && (
          <Link href="/user/setting/info">
            <UpdateInfoButton>프로필 수정</UpdateInfoButton>
          </Link>
        )}
      </div>
      <div className="profile__bottom">
        <div className="follower">
          <strong>구독자</strong>
          <span>
            {blogUserData && blogUserData.suberCount ? blogUserData.suberCount : 0}
          </span>
        </div>
        <div className="following">
          <strong>관심작가</strong>
          <span>
            {blogUserData && blogUserData.writerCount ? blogUserData.writerCount : 0}
          </span>
        </div>
      </div>
    </BlogUserProfileBox>
  );
}
