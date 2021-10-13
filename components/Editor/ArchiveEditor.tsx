import { Editor } from '@toast-ui/react-editor';
import axios from 'axios';
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
import React, { useCallback, useRef } from 'react';
import useUser from '../../modules/user/hooks';
import SquareBtn from '../Button/SquareBtn';
import { ToastEditorStyle } from './styles';
import _delay from 'lodash/delay';
import useUI from '../../modules/ui/hooks';

type ArchiveEditorPropsType = {
  content: string;
  setImageList: React.Dispatch<React.SetStateAction<{ imageId: number; src: string }[]>>;
  onSubmit: (content: string) => void;
};
export default function ArchiveEditor({
  content,
  setImageList,
  onSubmit,
}: ArchiveEditorPropsType): JSX.Element {
  const { userData } = useUser();
  const { toastOpenDispatch } = useUI();
  const EditorRef = useRef<null | Editor>(null);

  const uploadImageToServer = useCallback(
    async (image: Blob | File) => {
      if (!userData) return;
      const formData = new FormData();
      formData.append('image', image);
      return axios
        .post(
          `${process.env.NEXT_PUBLIC_SERVER_HOST}/upload/exhibitionimage/${userData.id}`,
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

  const onFinalSubmit = useCallback(() => {
    onSubmit(EditorRef.current?.getInstance().getHtml() as string);
  }, [EditorRef, onSubmit]);

  const onUpload = useCallback(
    async (image: Blob | File, callback) => {
      if (image.size > 20 * 1024 * 1024) {
        toastOpenDispatch('20MB 미만의 이미지만 첨부 가능합니다.');
      } else {
        const data = await uploadImageToServer(image);
        EditorRef.current?.getInstance().moveCursorToEnd();
        _delay(() => callback(`${data.src}`, `${data.imageId}`), 5000);
      }
    },
    [toastOpenDispatch, uploadImageToServer]
  );

  return (
    <ToastEditorStyle>
      <Editor
        initialValue={content}
        previewStyle="vertical"
        height="800px"
        placeholder="세부 전시 내용(작가 정보, 텍스트, 평론, 운영 시간 등)을 작성해 주세요."
        initialEditType="wysiwyg"
        useCommandShortcut={true}
        ref={EditorRef}
        hooks={{ addImageBlobHook: onUpload }}
      />
      <div className="btn_group">
        <SquareBtn onClick={onFinalSubmit}>제출</SquareBtn>
      </div>
    </ToastEditorStyle>
  );
}
