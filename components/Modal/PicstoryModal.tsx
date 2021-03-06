import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import { MdCancel, MdCheck } from 'react-icons/md';
import useInput from '../../hooks/useInput';
import { Picstory } from '../../modules/picstory';
import usePicstory from '../../modules/picstory/hooks';
import useUI from '../../modules/ui/hooks';
import useUser from '../../modules/user/hooks';
import SquareBtn from '../Button/SquareBtn';
import CustomInput from '../Input/CustomInput';
import ImageDropZone from '../Input/ImageDropZone';
import TitleLabel from '../Label/TitleLabel';
import { ModalLayout, PicstoryModalBox } from './styles';

type PicstoryListItemPropsType = {
  checked: boolean;
  addPicstory: (id: number) => void;
  picstoryData: { id: number; title: string };
};
function PicstoryListItem({
  checked,
  addPicstory,
  picstoryData,
}: PicstoryListItemPropsType): JSX.Element {
  return (
    <li onClick={() => addPicstory(picstoryData.id)}>
      <div className="checked">{checked && <MdCheck />}</div>
      <p>{picstoryData.title}</p>
    </li>
  );
}

type PicstoryModalPropsType = {
  onClose: () => void;
  picstoryList: number[];
  postId: number;
};
export default function PicstoryModal({
  onClose,
  picstoryList,
  postId,
}: PicstoryModalPropsType): JSX.Element {
  const { userData } = useUser();
  const router = useRouter();
  const {
    getPicstoryList,
    getPicstoryListDispatch,
    createPicstory,
    createPicstoryDispatch,
    addPicPostDispatch,
    removePicPostDispatch,
  } = usePicstory();
  const { toastOpenDispatch } = useUI();
  const [usersPicstoryList, setUsersPicstoryList] = useState<Picstory[]>([]);
  const [title, onChangeTitle, setTitle] = useInput('');
  const [desc, onChangeDesc, setDesc] = useInput('');
  const [thumbnail, setThumbnail] = useState('');
  const [makeMode, setMakeMode] = useState(false);

  const onClickBG = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget === e.target) onClose();
  }, []);

  const addPicstory = useCallback(
    (id: number) => {
      const isExist = picstoryList.findIndex(picid => picid === id) !== -1;
      if (!isExist) {
        addPicPostDispatch({ PostId: postId, PicstoryId: id });
      } else {
        removePicPostDispatch({ PostId: postId, PicstoryId: id });
      }
    },
    [picstoryList, postId]
  );

  const onCreatePicstory = () => {
    if (!userData) return;
    if (!title.trim()) return toastOpenDispatch('????????? ??????????????????.');
    if (!thumbnail.trim()) return toastOpenDispatch('????????? ???????????? ??????????????????.');
    createPicstoryDispatch({
      title,
      thumbnail,
      description: desc,
      UserId: userData.id,
    });
  };

  useEffect(() => {
    if (!userData) {
      router.replace('/');
    } else {
      getPicstoryListDispatch(userData.id);
    }
  }, [userData]);

  useEffect(() => {
    if (getPicstoryList.data) {
      setUsersPicstoryList(getPicstoryList.data);
    }
  }, [getPicstoryList.data]);

  useEffect(() => {
    if (createPicstory.data) {
      setTitle('');
      setThumbnail('');
      setDesc('');
      setUsersPicstoryList([...usersPicstoryList, createPicstory.data]);
    }
  }, [createPicstory.data]);

  return (
    <ModalLayout onClick={onClickBG}>
      <PicstoryModalBox width={800} height={600} makeMode={makeMode}>
        <div className="modal__left">
          <TitleLabel title="????????????" desc="Picstory" />
          <h4>??? ????????????</h4>
          <ul>
            {usersPicstoryList &&
              usersPicstoryList.map(picstory => (
                <PicstoryListItem
                  key={picstory.id}
                  checked={picstoryList.findIndex(pic => picstory.id === pic) !== -1}
                  addPicstory={addPicstory}
                  picstoryData={picstory}
                />
              ))}
          </ul>
          <div className="mobile-btn__box">
            <SquareBtn onClick={() => setMakeMode(true)}>??? ????????????</SquareBtn>
            <SquareBtn onClick={onClose}>??????</SquareBtn>
          </div>
        </div>
        <div className="modal__right">
          <h4>??? ????????????</h4>
          <CustomInput
            title="??????"
            onChange={onChangeTitle}
            value={title}
            maxLength={50}
          />
          <h5>?????????</h5>
          <ImageDropZone
            width={300}
            height={170}
            image={thumbnail}
            setImage={setThumbnail}
          />
          <h5>??????</h5>
          <textarea
            onChange={onChangeDesc}
            value={desc}
            maxLength={100}
            placeholder="?????? 100????????? ????????? ??? ????????????."
          ></textarea>
          <div className="btn__group">
            <SquareBtn onClick={onClose}>??????</SquareBtn>
            <SquareBtn onClick={onCreatePicstory}>??????</SquareBtn>
          </div>
          <div className="mobile-btn__box">
            <SquareBtn onClick={() => setMakeMode(false)}>??????</SquareBtn>
            <SquareBtn onClick={onCreatePicstory}>??????</SquareBtn>
          </div>
        </div>
      </PicstoryModalBox>
    </ModalLayout>
  );
}
