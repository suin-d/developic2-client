import Link from 'next/link';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { BlogFollowDataType } from '../../modules/user';
import { FollowItemBox } from './styles';
import useUser from '../../modules/user/hooks';
import FollowBtn from '../Button/FollowBtn';
import LoginModal from '../Modal/LoginModal';

type FollowListDataPropsType = {
  followData?: BlogFollowDataType;
  onClose: () => void;
};
export default function FollowItem({
  followData,
  onClose,
}: FollowListDataPropsType): JSX.Element {
  const { userData, subscribeListDispatch, unSubscribeListDispatch } = useUser();
  const [isFollowing, setIsFollowing] = useState(false);

  const [loginOpen, setLoginOpen] = useState(false);
  const toggleLoginModal = useCallback(() => setLoginOpen(prev => !prev), []);

  useEffect(() => {
    if (!userData?.id) {
      setIsFollowing(false);
    }
    const isFollowed = userData?.writers.filter(
      following => following.id == followData?.id
    );
    if (isFollowed && isFollowed.length > 0) {
      setIsFollowing(true);
    } else {
      setIsFollowing(false);
    }
  }, [followData?.id, userData?.id, userData?.writers]);

  const onFollowToggle = () => {
    if (!followData?.id) return;
    if (!userData?.id) return toggleLoginModal();
    if (isFollowing) {
      unSubscribeListDispatch({ writerId: followData.id, subscriberId: userData.id });
    } else if (!isFollowing) {
      subscribeListDispatch({ writerId: followData.id, subscriberId: userData.id });
    }
  };

  if (!followData) return <></>;

  return (
    <>
      <FollowItemBox>
        <Link href={`/${followData?.id}/post`}>
          <div onClick={onClose}>
            <Image src={followData.avatar} alt="avatar__img" width={80} height={80} />
            <span>{followData.nickname}</span>
          </div>
        </Link>
        <div>
          {userData?.id !== followData.id && (
            <FollowBtn
              isFollow={isFollowing}
              text={isFollowing ? '구독해지' : '구독'}
              onClick={onFollowToggle}
            ></FollowBtn>
          )}
        </div>
      </FollowItemBox>
      {loginOpen && <LoginModal onClose={toggleLoginModal} />}
    </>
  );
}
