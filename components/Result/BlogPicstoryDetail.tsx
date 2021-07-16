import React, { useCallback, useState, useEffect } from 'react';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineEye, AiOutlineBook } from 'react-icons/ai';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useModal from '../../hooks/useModal';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import usePicstory from '../../modules/picstory/hooks';
import SquareBtn from '../Button/SquareBtn';
import ConfirmRemoveModal from '../Modal/ConfirmRemoveModal';
import PicstoryEditModal from '../Modal/PicstoryEditModal';
import { countSum } from '../../utils/utils';
import { BlogPicstoryDetailContainer } from '../Result/styles';

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
        <div className="picstory__info">
          <div className="picstory__description">
            <h2>{loadBlogPicstoryDetail.data.title}</h2>
            <p>{loadBlogPicstoryDetail.data.description}</p>
            <div className="picstory__btn">
              {isSameUser && (
                <>
                  <SquareBtn onClick={onToggleEditModal}>편집</SquareBtn>
                  <SquareBtn onClick={onToggleRemoveModal}>삭제</SquareBtn>
                </>
              )}
            </div>
            <div>
              <Link href={`/${loadBlogPicstoryDetail.data?.UserId}/post`}>
                <span>{loadBlogPicstoryDetail.data.User.nickname}</span>
              </Link>
              <div className="picstory__stats">
                <div>
                  <AiOutlineBook />
                  <span>
                    {isSameUser
                      ? posts.filter(data => data.isPublic === 1 || data.isPublic === 0)
                          .length
                      : posts.filter(data => data.isPublic === 1).length}
                  </span>
                </div>
                <div>
                  <MdFavoriteBorder />
                  <span>{likeCountTotal}</span>
                </div>
                <div>
                  <AiOutlineEye />
                  <span>{viewCountTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      {editModalOpen && (
        <PicstoryEditModal
          picstoryData={{
            title: loadBlogPicstoryDetail.data.title,
            description: loadBlogPicstoryDetail.data.description,
            thumbnail: loadBlogPicstoryDetail.data.thumbnail,
          }}
          onClose={onToggleEditModal}
        />
      )}
      <RemovePicstoryModal />
    </BlogPicstoryDetailContainer>
  );
}
