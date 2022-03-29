import React, { useCallback, useEffect, useRef, useState } from 'react';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import exifr from 'exifr';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';
import { useRouter } from 'next/router';
import usePost from '../../modules/post/hooks';
import useUser from '../../modules/user/hooks';
import _delay from 'lodash/delay';
import useModal from '../../hooks/useModal';
import ConfirmModal from '../Modal/ConfirmModal';
import useUI from '../../modules/ui/hooks';

type ToastEditorPropsType = {
  content: string;
  setContent: React.Dispatch<React.SetStateAction<string>>;
  setImageList: React.Dispatch<React.SetStateAction<{ imageId: number; src: string }[]>>;
  temporarySave: (editorContent: string) => void;
};

export default function ToastEditor({
  content,
  setContent,
  temporarySave,
  setImageList,
}: ToastEditorPropsType): JSX.Element {
  const { userData } = useUser();
  const { preSavePost } = usePost();
  const { toastOpenDispatch } = useUI();
  const router = useRouter();
  const EditorRef = useRef<null | Editor>(null);
  const [saveType, setSaveType] = useState<'tempSave' | 'submit' | ''>('');
  const [toUrl, setToUrl] = useState('');
  const [confirmed, setConfirmed] = useState(false);

  const [RunModal, toggleModal] = useModal(ConfirmModal, {
    onConfirm: () => setConfirmed(true),
    content: '작성 내용이 사라지게 됩니다. 페이지를 나가시겠습니까?',
  });

  const routeChangeStart = useCallback(
    (url: string) => {
      if (router.asPath.split('?')[0] !== url.split('?')[0] && !confirmed) {
        setToUrl(url);
        toggleModal();
        router.events.emit('routeChangeError');
        throw 'Abort route change. Please ignore this error.';
      }
    },
    [confirmed, router.asPath, router.events, toggleModal]
  );

  const onTempSave = useCallback(
    e => {
      if (e.target.type === 'button') {
        router.events.off('routeChangeStart', routeChangeStart);
      }
    },
    [routeChangeStart, router.events]
  );

  const [TempSubmitModal, toggleConfirmModal] = useModal(ConfirmModal, {
    content: '임시저장항목으로 저장하시겠습니까?',
    onConfirm: useCallback(
      e => {
        setSaveType('tempSave');
        setContent(EditorRef.current?.getInstance().getHtml() as string);
        temporarySave(EditorRef.current?.getInstance().getHtml() as string);
        toastOpenDispatch('게시글이 임시저장 되었습니다.');
        onTempSave(e);
      },
      [onTempSave, setContent, temporarySave, toastOpenDispatch]
    ),
  });

  useEffect(() => {
    router.events.on('routeChangeStart', routeChangeStart);
    return () => {
      router.events.off('routeChangeStart', routeChangeStart);
    };
  }, [routeChangeStart, router.events]);

  useEffect(() => {
    if (confirmed) {
      toggleModal();
      router.replace(toUrl);
    }
  }, [toUrl, confirmed, toggleModal, router]);

  const onFinalSubmit = useCallback(
    e => {
      if (e.target.type === 'button') {
        router.events.off('routeChangeStart', routeChangeStart);
      }
      setSaveType('submit');
      setContent(EditorRef.current?.getInstance().getHtml() as string);
      temporarySave(EditorRef.current?.getInstance().getHtml() as string);
    },
    [routeChangeStart, router.events, setContent, temporarySave]
  );

  const uploadImageToServer = useCallback(
    async (image: Blob | File) => {
      if (!userData) return;
      const formData = new FormData();
      formData.append('image', image);
      return axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/postimage/${userData.id}`,
          formData
        )
        .then(res => {
          setImageList(current => current.concat(res.data));
          if (image.size > 1 * 1024 * 1024) {
            res.data.src = res.data.src.replace('/resize/600', '/original');
          }
          return res.data;
        });
    },
    [setImageList, userData]
  );

  const updateMetaData = useCallback(async (image: Blob | File, PostImageId: number) => {
    const metaData = await exifr.parse(image, { exif: true, gps: true });
    const computedMeta = {
      manufacturer: metaData ? metaData.Make : null,
      model: metaData ? metaData.Model : null,
      fValue: metaData ? metaData.FNumber : null,
      resolutionX: metaData ? metaData.ImageWidth : null,
      resolutionY: metaData ? metaData.ImageHeight : null,
      location: `${metaData ? metaData.latitude : null}/${
        metaData ? metaData.longitude : null
      }`,
      exposureTime: metaData ? metaData.ExposureTime : null,
      size: image.size,
      shutterSpeed: metaData ? metaData.ShutterSpeedValue : null,
      ISO: metaData ? metaData.ISO : null,
      PostImageId,
    };
    await axios.post(`${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/exif`, computedMeta);
  }, []);

  const onUpload = useCallback(
    async (image: Blob | File, callback) => {
      if (image.size > 20 * 1024 * 1024) {
        toastOpenDispatch('20MB 미만의 이미지만 첨부 가능합니다.');
      } else {
        const data = await uploadImageToServer(image);
        await updateMetaData(image, data.imageId);
        EditorRef.current?.getInstance().moveCursorToEnd();
        _delay(() => callback(`${data.src}`, `${data.imageId}`), 3500);
      }
    },
    [toastOpenDispatch, updateMetaData, uploadImageToServer]
  );

  useEffect(() => {
    EditorRef.current?.getInstance().setHtml(content);
  }, [content]);

  useEffect(() => {
    if (preSavePost.data) {
      if (
        (router.query.postId === 'new' && saveType === 'submit') ||
        (preSavePost.data.postId === +(router.query.postId as string) &&
          saveType === 'submit')
      )
        router.replace(`/edit/info/${preSavePost.data.postId}`);
    }
  }, [preSavePost.data, router, saveType]);

  return (
    <>
      <ToastEditorStyle>
        <Editor
          initialValue={content}
          previewStyle="vertical"
          height="800px"
          placeholder="내용을 작성하세요."
          initialEditType="wysiwyg"
          useCommandShortcut={true}
          ref={EditorRef}
          hooks={{ addImageBlobHook: onUpload }}
        />
        <div className="btn_group">
          <SquareBtn onClick={toggleConfirmModal}>임시저장</SquareBtn>
          <SquareBtn className="submit" onClick={onFinalSubmit}>
            제출
          </SquareBtn>
        </div>
      </ToastEditorStyle>
      <RunModal />
      <TempSubmitModal />
    </>
  );
}
