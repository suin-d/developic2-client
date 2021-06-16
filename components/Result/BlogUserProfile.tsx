import Link from 'next/link';
import router from 'next/router';
import React, { useEffect, useState } from 'react';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import FollowBtn from '../Button/FollowBtn';
import { RoundCornerBtnBox } from '../Button/styles';
import { BlogUserProfileBox } from '../Layout';

export default function BlogUserProfile(): JSX.Element {
  const { blogUserData } = useBlog();
  const { userData, subscribeDispatch, unSubscribeDispatch } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);
  const { userId } = router.query;

  const isUserData = userData && userData.id;

  useEffect(() => {
    if (!blogUserData) return;
    if (!isUserData) {
      setIsFollowing(false);
    }
    if (userData?.writers.find(following => following.id == userId)) {
      setIsFollowing(true);
    }
  }, [isUserData]);

  const onFollowToggle = () => {
    if (!blogUserData) return;
    if (!userData) return alert('로그인해주세요');
    if (isFollowing) {
      unSubscribeDispatch({ writerId: blogUserData.id, subscriberId: userData.id });
      setIsFollowing(prev => !prev);
    } else {
      subscribeDispatch({ writerId: blogUserData.id, subscriberId: userData.id });
      setIsFollowing(prev => !prev);
    }
  };

  if (!blogUserData) return <></>;

  return (
    <BlogUserProfileBox>
      <div className="profile__top">
        <img src={blogUserData.avatar} alt="profile" />
        <h1>{blogUserData.nickname}</h1>
        <p>{blogUserData.introduce}</p>
        {blogUserData.id !== userData?.id && (
          <FollowBtn
            isFollow={isFollowing}
            text={isFollowing ? '구독해지' : '구독'}
            onClick={onFollowToggle}
          ></FollowBtn>
        )}
        {blogUserData.id === userData?.id && (
          <Link href="/user/setting/info">
            <RoundCornerBtnBox currentTheme={null}>프로필 수정</RoundCornerBtnBox>
          </Link>
        )}
      </div>
      <div className="profile__bottom">
        <div className="follower">
          <strong>구독자</strong>
          <span>{blogUserData.suberCount ? blogUserData.suberCount : 0}</span>
        </div>
        <div className="following">
          <strong>관심작가</strong>
          <span>{blogUserData.writerCount ? blogUserData.writerCount : 0}</span>
        </div>
      </div>
    </BlogUserProfileBox>
  );
}
