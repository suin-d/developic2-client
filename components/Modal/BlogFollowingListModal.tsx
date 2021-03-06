import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import useUser from '../../modules/user/hooks';
import TitleLabel from '../Label/TitleLabel';
import FollowItem from '../Card/FollowItem';
import SquareBtn from '../Button/SquareBtn';
import { FollowListModalBox, ModalLayout } from './styles';
import { BlogFollowDataType } from '../../modules/user';

type FollowListModalPropsType = {
  onClose?: () => void;
};
export default function BlogFollowingListModal({
  onClose = () => null,
}: FollowListModalPropsType): JSX.Element {
  const { loadBlogFollowListDispatch, loadBlogFollowList } = useUser();
  const { query } = useRouter();

  const onClickBG = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) onClose();
  };

  useEffect(() => {
    if (query.userId) {
      loadBlogFollowListDispatch({ userId: +query.userId, type: 'writer' });
    }
  }, [loadBlogFollowListDispatch, query.userId]);

  if (!loadBlogFollowList.data) return <></>;

  return (
    <ModalLayout onClick={onClickBG}>
      <FollowListModalBox width={600}>
        <TitleLabel title="관심작가" desc="Following List" />
        <ul>
          {loadBlogFollowList.data.map((blogFollowingItem: BlogFollowDataType) => (
            <FollowItem
              followData={blogFollowingItem}
              key={blogFollowingItem.id}
              onClose={onClose}
            />
          ))}
        </ul>
        <div className="btn__group">
          <SquareBtn onClick={onClose}>닫기</SquareBtn>
        </div>
      </FollowListModalBox>
    </ModalLayout>
  );
}
