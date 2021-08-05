import Link from 'next/link';
import React, { useCallback, useLayoutEffect, useState } from 'react';
import useUser from '../../modules/user/hooks';
import FollowBtn from '../Button/FollowBtn';
import { RoundCornerBtnBox } from '../Button/styles';
import { BlogUserProfileBox } from '../Layout';
import useModal from '../../hooks/useModal';
import _BlogFollowerListModal from '../Modal/BlogFollowerListModal';
import _BlogFollowingListModal from '../Modal/BlogFollowingListModal';
import LoginModal from '../Modal/LoginModal';
import Image from 'next/image';

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

  useLayoutEffect(() => {
    if (!blogUserData?.id) return;
    if (userData?.writers.find(following => following.id == blogUserData.id)) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [blogUserData?.id, userData?.writers]);

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
          <Image
            src={blogUserData.avatar}
            alt={blogUserData.nickname}
            width={100}
            height={100}
            objectFit="cover"
          />
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
              <RoundCornerBtnBox currentTheme={null}>
                <span>프로필 수정</span>
              </RoundCornerBtnBox>
            </Link>
          )}
        </div>
        <div className="profile__bottom">
          <div className="follower">
            <strong>구독자</strong>
            {blogUserData.suberCount > 0 ? (
              <span className="follow__count" onClick={onBlogFollowerList}>
                {blogUserData.suberCount}
              </span>
            ) : (
              <span>0</span>
            )}
          </div>
          <div className="following">
            <strong>관심작가</strong>
            {blogUserData.writerCount > 0 ? (
              <span className="follow__count" onClick={onBlogFollowingList}>
                {blogUserData.writerCount}
              </span>
            ) : (
              <span>0</span>
            )}
          </div>
        </div>
        <BlogFollowerListModal />
        <BlogFollowingListModal />
      </BlogUserProfileBox>
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
    </>
  );
}
