import Link from 'next/link';
import React, { useCallback, useEffect, useState } from 'react';
import useUser from '../../modules/user/hooks';
import FollowBtn from '../Button/FollowBtn';
import { RoundCornerBtnBox } from '../Button/styles';
import { BlogUserProfileBox } from '../Layout';
import useModal from '../../hooks/useModal';
import _BlogFollowerListModal from '../Modal/BlogFollowerListModal';
import _BlogFollowingListModal from '../Modal/BlogFollowingListModal';
import LoginModal from '../Modal/LoginModal';

export default function BlogUserProfile(): JSX.Element {
  const {
    userData,
    subscribeDispatch,
    unSubscribeDispatch,
    loadBlogUser: { data: blogUserData },
  } = useUser();

  const [loginOpen, setLoginOpen] = useState(false);
  const toggleLoginModal = useCallback(() => setLoginOpen(!loginOpen), [loginOpen]);

  const [BlogFollowerListModal, onBlogFollowerList] = useModal(
    _BlogFollowerListModal,
    {}
  );
  const [BlogFollowingListModal, onBlogFollowingList] = useModal(
    _BlogFollowingListModal,
    {}
  );
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    if (!blogUserData) return;
    if (!userData?.id) {
      setIsFollowing(false);
    }
    if (userData?.writers.find(following => following.id == blogUserData.id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [blogUserData, userData?.id, userData?.writers]);

  const onFollowToggle = () => {
    if (!blogUserData) return;
    if (!userData?.id) {
      toggleLoginModal();
    }
    if (userData && isFollowing) {
      unSubscribeDispatch({ writerId: blogUserData.id, subscriberId: userData.id });
    } else if (userData && !isFollowing) {
      subscribeDispatch({ writerId: blogUserData.id, subscriberId: userData.id });
    }
  };

  if (!blogUserData) return <></>;

  return (
    <>
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
            <span onClick={onBlogFollowerList}>
              {blogUserData.suberCount ? blogUserData.suberCount : 0}
            </span>
          </div>
          <div className="following">
            <strong>관심작가</strong>
            <span onClick={onBlogFollowingList}>
              {blogUserData.writerCount ? blogUserData.writerCount : 0}
            </span>
          </div>
        </div>
        <BlogFollowerListModal />
        <BlogFollowingListModal />
      </BlogUserProfileBox>
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
    </>
  );
}
