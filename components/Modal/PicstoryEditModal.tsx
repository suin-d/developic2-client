import React, { useCallback } from 'react';
import useInput from '../../hooks/useInput';
import useBlog from '../../modules/blog/hooks';
import usePicstory from '../../modules/picstory/hooks';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import CustomTextarea from '../Input/CustomTextarea';
import TitleLabel from '../Label/TitleLabel';
import { BinderEditModalBox, ModalLayout } from './styles';

type PicstoryEditModalPropsType = {
  onClose: () => void;
  picstoryData: {
    title: string;
    description: string;
  };
};
export default function PicstoryEditModal({
  onClose,
  picstoryData,
}: PicstoryEditModalPropsType): JSX.Element {
  const { loadBlogPicstoryDetail } = useBlog();
  const { updatePicstoryDispatch } = usePicstory();

  const [title, onChangeTitle] = useInput(picstoryData.title);
  const [description, onChangeDescription] = useInput(picstoryData.description);

  const onClickBg = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }, []);

  const onUpdate = useCallback(() => {
    if (!loadBlogPicstoryDetail.data) return;
    updatePicstoryDispatch({
      PicstoryId: loadBlogPicstoryDetail.data.id,
      title,
      description,
    });
    onClose();
  }, [loadBlogPicstoryDetail.data, title, description]);

  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <BinderEditModalBox>
        <TitleLabel title="픽스토리 편집" desc="Picstory Edit" />
        <form>
          <CustomInput title="제목" onChange={onChangeTitle} value={title} />
          <CustomTextarea
            title="설명"
            value={description}
            onChange={onChangeDescription}
          />
          <div className="btn__group">
            <SquareBtn type="button" onClick={onClose}>
              취소
            </SquareBtn>
            <SquareBtn type="button" onClick={onUpdate}>
              적용
            </SquareBtn>
          </div>
        </form>
      </BinderEditModalBox>
    </ModalLayout>
  );
}
