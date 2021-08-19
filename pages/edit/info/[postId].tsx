import React, { useCallback, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { copyRightData } from '../../../utils/data';
import ImageDropZone from '../../../components/Input/ImageDropZone';
import SquareBtn from '../../../components/Button/SquareBtn';
import { useRadioButton } from '../../../hooks/useRadioButton';
import PicstoryModal from '../../../components/Modal/PicstoryModal';
import Layout from '../../../components/Layout';
import { useRouter } from 'next/router';
import useInput from '../../../hooks/useInput';
import usePost from '../../../modules/post/hooks';
import useUser from '../../../modules/user/hooks';
import Head from 'next/head';
import useUI from '../../../modules/ui/hooks';

export const InfoPostContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto 50px;
  display: flex;

  h5 {
    margin: 35px 0 15px 0;
    font-size: 18px;
    color: ${({ theme }) => theme.textColor.initial};
  }
  .left__section {
    flex: 1;
    padding-right: 50px;
    border-right: 1px solid ${({ theme }) => theme.grayScale[2]};
    & > span {
      margin-top: 5px;
      display: block;
      text-align: center;
      font-size: 14px;
      color: ${({ theme }) => theme.grayScale[2]};
    }
    textarea {
      outline: none;
      padding: 5px;
      line-height: 1.5;
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      width: 400px;
      height: 100px;
      resize: none;
      font-size: 16px;
    }
  }
  .right__section {
    flex: 1;
    padding-left: 50px;
    .check__group {
    }
    .license__group {
      ul {
        flex-wrap: wrap;
        li {
          margin-bottom: 7.5px;
        }
      }
    }
    .btn__group {
      margin-top: 20px;
      display: flex;
      justify-content: flex-end;
      button + button {
        margin-left: 20px;
      }
    }
    .btn__group.left {
      justify-content: flex-start;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 0 10px;
    flex-direction: column;
    .left__section {
      padding-right: 0;
      border-right: none;
      textarea {
        width: 100%;
      }
    }
    .right__section {
      padding-left: 0;
    }
  }
`;

export default function InfoPost(): JSX.Element {
  const {
    tempPost,
    submitPostDispatch,
    getTempPostDispatch,
    submitPost,
    getPostDetail,
  } = usePost();
  const { userData } = useUser();
  const router = useRouter();

  useEffect(() => {
    getTempPostDispatch(router.query.postId as string);
  }, [getTempPostDispatch, router.query]);

  const [picstoryOpen, setPicstoryOpen] = useState(false);
  const [summary, onChangeSummary, setSummary] = useInput(
    tempPost.data?.summary
      ? tempPost.data?.summary
      : tempPost.data?.content.replace(/(<([^>]+)>)/gi, '').substr(0, 100)
  );

  // 댓글허용여부: 허용(1), 비허용(0)
  const allowCommentLabel = ['허용', '비허용'];
  const [isAllowComment, setIsAllowComment] = useState(
    tempPost.data?.allowComment === 0 ? '비허용' : '허용'
  );
  const [allowCommentValue, renderAllowCommentChecks] = useRadioButton(
    allowCommentLabel,
    'allowComment',
    isAllowComment
  );
  useEffect(() => {
    setIsAllowComment(allowCommentValue === '허용' ? '허용' : '비허용');
  }, [isAllowComment, allowCommentValue]);

  // 글공개여부: 공개(1), 비공개(0)
  const publicLabel = ['공개', '비공개'];
  const [isPublic, setIsPublic] = useState(
    tempPost.data?.isPublic === 0 ? '비공개' : '공개'
  );
  const [publicValue, renderPublicChecks] = useRadioButton(
    publicLabel,
    'isPublic',
    isPublic
  );
  useEffect(() => {
    setIsPublic(publicValue === '공개' ? '공개' : '비공개');
  }, [isPublic, publicValue]);

  const [copyRight, setCopyRight] = useState(
    tempPost.data?.license ? tempPost.data.license : 'Copyright © All Rights Reserved'
  );
  const [copyrightValue, renderCopyrightChecks] = useRadioButton(
    copyRightData,
    'copyRight',
    copyRight
  );
  useEffect(() => {
    switch (copyrightValue) {
      case 'Copyright © All Rights Reserved':
        setCopyRight('Copyright © All Rights Reserved');
        break;
      case 'CC BY (저작자표시)':
        setCopyRight('CC BY (저작자표시)');
        break;
      case 'CC BY-SA (저작자표시-동일조건변경허락)':
        setCopyRight('CC BY-SA (저작자표시-동일조건변경허락)');
        break;
      case 'CC BY-ND (저작자표시-변경금지)':
        setCopyRight('CC BY-ND (저작자표시-변경금지)');
        break;
      case 'CC BY-NC (저작자표시-비영리)':
        setCopyRight('CC BY-NC (저작자표시-비영리)');
        break;
      case 'CC BY-NC-SA (저작자표시-비영리-동일조건변경허락)':
        setCopyRight('CC BY-NC-SA (저작자표시-비영리-동일조건변경허락)');
        break;
      case 'CC BY-NC-ND (저작자표시-비영리-변경금지)':
        setCopyRight('CC BY-NC-ND (저작자표시-비영리-변경금지)');
        break;
    }
  }, [copyrightValue]);

  const [thumbnail, setThumbnail] = useState(
    tempPost.data?.thumbnail ? tempPost.data.thumbnail : ''
  );
  const { toastOpenDispatch } = useUI();
  const goBack = () => {
    router.replace(`/edit/content/${router.query.postId}`);
  };

  useEffect(() => {
    if (!userData) return;
    if (submitPost.data && submitPost.data.id === +(router.query.postId as string)) {
      router.replace(`/${userData.id}/post`);
    }
  }, [submitPost.data, router.query]);

  useEffect(() => {
    if (!getPostDetail.data?.summary && tempPost.data) {
      setSummary(tempPost.data?.content.replace(/(<([^>]+)>)/gi, '').substr(0, 100));
    }
  }, [tempPost.data]);

  const onSubmitPost = useCallback(() => {
    if (!summary.trim()) return toastOpenDispatch('요약글을 작성해주세요.');
    if (!thumbnail.trim()) return toastOpenDispatch('썸네일을 등록해주세요.');
    const data = {
      allowComment: isAllowComment === '허용' ? 1 : 0,
      isPublic: isPublic === '공개' ? 1 : 0,
      thumbnail,
      summary,
      license: copyRight,
      PostId: router.query.postId as string,
    };
    submitPostDispatch(data);
  }, [isAllowComment, copyRight, isPublic, router.query.postId, summary, thumbnail]);

  if (!tempPost.data) return <></>;

  return (
    <Layout>
      <Head>
        <title>글쓰기 | {tempPost.data.title} 정보입력</title>
      </Head>
      <InfoPostContainer>
        <div className="left__section">
          <h5>썸네일</h5>
          <ImageDropZone image={thumbnail} setImage={setThumbnail} />
          <span>위 비율로 화면에 나타나게 됩니다.</span>
          <h5>요약</h5>
          <textarea onChange={onChangeSummary} value={summary} maxLength={100}></textarea>
          <span>최대 100글자를 입력할 수 있습니다.</span>
        </div>
        <div className="right__section">
          <h5>픽스토리</h5>
          <div className="btn__group left">
            <SquareBtn onClick={() => setPicstoryOpen(true)}>픽스토리 선택</SquareBtn>
          </div>
          <h5>댓글허용여부</h5>
          <div className="check__group">{renderAllowCommentChecks()}</div>
          <h5>비공개여부</h5>
          <div className="check__group">{renderPublicChecks()}</div>
          <h5>저작권 및 라이센스</h5>
          <div className="license__group">{renderCopyrightChecks()}</div>

          <div className="btn__group">
            <SquareBtn onClick={goBack}>취소</SquareBtn>
            <SquareBtn onClick={onSubmitPost}>발행</SquareBtn>
          </div>
        </div>
      </InfoPostContainer>
      {picstoryOpen && (
        <PicstoryModal
          onClose={() => setPicstoryOpen(false)}
          picstoryList={tempPost.data.PicStories as number[]}
          postId={tempPost.data.id as number}
        />
      )}
    </Layout>
  );
}
