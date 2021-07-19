import React, { useCallback, useState } from 'react';
import useInput from '../../hooks/useInput';
import useBlog from '../../modules/blog/hooks';
import usePicstory from '../../modules/picstory/hooks';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import ImageDropZone from '../Input/ImageDropZone';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, PicstoryEditModalBox } from './styles';

type PicstoryEditModalPropsType = {
  onClose: () => void;
  picstoryData: {
    title: string;
    description: string;
    thumbnail: string;
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
  const [thumbnail, setThumbnail] = useState(picstoryData.thumbnail);

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
      thumbnail,
    });
    onClose();
  }, [
    loadBlogPicstoryDetail.data,
    updatePicstoryDispatch,
    title,
    description,
    thumbnail,
  ]);

  return (
    <ModalLayout onClick={onClickBg} className="bg">
      <PicstoryEditModalBox>
        <TitleLabel title="픽스토리 편집" desc="Picstory Edit" />
        <form>
          <CustomInput
            title="제목"
            onChange={onChangeTitle}
            value={title}
            maxLength={50}
          />
          <h5>썸네일</h5>
          <ImageDropZone
            width={240}
            height={160}
            image={thumbnail}
            setImage={setThumbnail}
          />
          <h5>설명</h5>
          <textarea value={description} onChange={onChangeDescription} maxLength={100} />
          <div className="btn__group">
            <SquareBtn type="button" onClick={onClose}>
              취소
            </SquareBtn>
            <SquareBtn type="button" onClick={onUpdate}>
              적용
            </SquareBtn>
          </div>
        </form>
      </PicstoryEditModalBox>
    </ModalLayout>
  );
}
