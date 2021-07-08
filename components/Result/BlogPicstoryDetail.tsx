import React, { useCallback, useState, useEffect } from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye, MdLockOutline } from 'react-icons/md';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import useModal from '../../hooks/useModal';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import usePicstory from '../../modules/picstory/hooks';
import SquareBtn from '../Button/SquareBtn';
import { BlogPicstoryCardBox } from '../Card/styles';
import ConfirmRemoveModal from '../Modal/ConfirmRemoveModal';
import PicstoryEditModal from '../Modal/PicstoryEditModal';
import { countSum } from '../../utils/utils';

const BlogPicstoryDetailContainer = styled(BlogPicstoryCardBox)<{ isSameUser: boolean }>`
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
  box-shadow: none;
  height: 300px;
  cursor: auto;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
  }
  article > p {
    margin-bottom: 28px;
  }
  .picstory__btn {
    height: 30px;
  }
  .img__box {
    min-width: 125px;
    position: relative;
    .lock__wrapper {
      svg {
        font-size: 13px;
      }
      position: absolute;
      top: 5px;
      right: 5px;
      display: flex;
      align-items: center;
      border: 0;
      background: rgba(25, 25, 25, 0.6);
      color: #fff;
      border-radius: 50%;
      padding: 0.3em 0.3em;
    }
  }
`;

export default function BlogPicstoryDetailBox(): JSX.Element {
  const { userData } = useUser();
  const { loadBlogPicstoryDetail } = useBlog();
  const { removePicstoryDispatch } = usePicstory();
  const router = useRouter();
  const { Posts: posts } = loadBlogPicstoryDetail.data as BlogPicstory;
  const [isSameUser, setIsSameUser] = useState(false);

  useEffect(() => {
    if (userData?.id === loadBlogPicstoryDetail?.data?.UserId) {
      setIsSameUser(true);
    } else {
      setIsSameUser(false);
    }
  }, [loadBlogPicstoryDetail?.data?.UserId, userData?.id]);

  const likeCounts = isSameUser
    ? posts
        .filter(data => data.isPublic === 1 || data.isPublic === 0)
        .map((post: BlogPost) => (post.likeCount ? post.likeCount : 0))
    : posts
        .filter(data => data.isPublic === 1)
        .map((post: BlogPost) => (post.likeCount ? post.likeCount : 0));

  const likeCountTotal = countSum(likeCounts);

  const viewCounts = isSameUser
    ? posts
        .filter(data => data.isPublic === 1 || data.isPublic === 0)
        .map((post: BlogPost) => post.hits)
    : posts.filter(data => data.isPublic === 1).map((post: BlogPost) => post.hits);

  const viewCountTotal = countSum(viewCounts);

  const [editModalOpen, setEditModalOpen] = useState(false);
  const onToggleEditModal = useCallback(() => {
    setEditModalOpen(prev => !prev);
  }, []);

  const onRemovePicstory = useCallback(() => {
    removePicstoryDispatch(+(router.query.picstoryId as string));
    router.back();
  }, []);

  const [RemovePicstoryModal, onToggleRemoveModal] = useModal(ConfirmRemoveModal, {
    title: '픽스토리를 삭제하시겠습니까?',
    description: '픽스토리에 포함된 글은 삭제되지 않습니다.',
    onConfirm: onRemovePicstory,
  });

  if (!loadBlogPicstoryDetail.data) return <></>;

  return (
    <BlogPicstoryDetailContainer currentTheme={null} isSameUser={isSameUser}>
      <article>
        <div className="picstory__description">
          <h2>{loadBlogPicstoryDetail.data.title}</h2>
          <div className="picstory__stats">
            <div>
              <MdBook />
              <span>
                {isSameUser
                  ? posts.filter(data => data.isPublic === 1 || data.isPublic === 0)
                      .length
                  : posts.filter(data => data.isPublic === 1).length}
              </span>
            </div>
            <div>
              <MdFavorite />
              <span>{likeCountTotal && likeCountTotal}</span>
            </div>
            <div>
              <MdRemoveRedEye />
              <span>{viewCountTotal && viewCountTotal}</span>
            </div>
          </div>
        </div>
        <p>{loadBlogPicstoryDetail.data.description}</p>

        <div className="picstory__btn">
          {isSameUser && (
            <>
              <SquareBtn onClick={onToggleEditModal}>편집</SquareBtn>
              <SquareBtn onClick={onToggleRemoveModal}>삭제</SquareBtn>
            </>
          )}
        </div>
        <ul className="picstory__recent-img">
          {isSameUser
            ? posts
                .filter(post => post.isPublic === 1 || post.isPublic === 0)
                .slice(0, 6)
                .map(picstoryImgItem => (
                  <li className="img__box" key={picstoryImgItem.id}>
                    <Image
                      src={process.env.NEXT_PUBLIC_IMAGE_600 + picstoryImgItem.thumbnail}
                      alt={picstoryImgItem.title}
                      height={125}
                      width={125}
                    />
                    {picstoryImgItem.isPublic === 0 && (
                      <div className="lock__wrapper">
                        <MdLockOutline />
                      </div>
                    )}
                  </li>
                ))
            : posts
                .filter(post => post.isPublic === 1)
                .slice(0, 6)
                .map(picstoryImgItem => (
                  <li className="img__box" key={picstoryImgItem.id}>
                    <Image
                      src={process.env.NEXT_PUBLIC_IMAGE_600 + picstoryImgItem.thumbnail}
                      alt={picstoryImgItem.title}
                      height={125}
                      width={125}
                    />
                  </li>
                ))}
        </ul>
      </article>
      {editModalOpen && (
        <PicstoryEditModal
          picstoryData={{
            title: loadBlogPicstoryDetail.data.title,
            description: loadBlogPicstoryDetail.data.description,
          }}
          onClose={onToggleEditModal}
        />
      )}
      <RemovePicstoryModal />
    </BlogPicstoryDetailContainer>
  );
}
