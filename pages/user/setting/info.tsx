import styled from '@emotion/styled';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react';
import AvatarUpdateInput from '../../../components/Input/AvatarUpdateInput';
import CustomInput from '../../../components/Input/CustomInput';
import CustomSelect from '../../../components/Input/CustomSelect';
import PageLabel from '../../../components/Label/PageLabel';
import PageWithNavLayout from '../../../components/Layout/PageWithNavLayout';
import _ChangePasswordModal from '../../../components/Modal/ChangePasswordModal';
import ConfirmRemoveModal from '../../../components/Modal/ConfirmRemoveModal';
import useInput from '../../../hooks/useInput';
import useModal from '../../../hooks/useModal';
import useUser from '../../../modules/user/hooks';
import { SettingNavData } from '../../../utils/data';

const InfoContainer = styled.section`
  display: flex;
  margin-bottom: 100px;
  .cs__left {
    flex: 1;
    form {
      margin-top: 50px;
      & > div {
        margin-top: 30px;
      }
    }
  }
  .cs__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .avatar-update__form {
      width: 450px;
    }
    .btn__group {
      margin-top: 50px;
      display: flex;
      justify-content: flex-end;
      button {
        color: ${({ theme }) => theme.textColor.initial};
        padding: 5px 10px;
        cursor: pointer;
        font-size: 16px;
        outline: none;
        border: none;
        border-radius: 0;
        background: none;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        &:hover {
          font-weight: 600;
        }
      }
      button + button {
        margin-left: 30px;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    .page__label {
      h1 {
        font-size: 32px;
      }
    }
    .cs__left {
      form {
        margin-top: 0px;
      }
    }
    .cs__right {
      margin-top: 30px;
      align-items: flex-start;
      .avatar-update__form {
        width: 100%;
      }
      .btn__group {
        width: 100%;
        justify-content: center;
      }
    }
  }
`;
const genderData = [
  { id: 1, value: '' },
  { id: 2, value: '??????' },
  { id: 3, value: '??????' },
];
export default function Info(): JSX.Element {
  const router = useRouter();
  const {
    userData,
    destroyUser,
    updateUserInfoDispatch,
    destroyUserDispatch,
  } = useUser();
  const [nickname, onChangeNickname] = useInput(userData?.nickname);
  const [birth, onChangeBirth] = useInput(userData?.birth);
  const [gender, onChangeGender] = useInput(userData?.gender);
  const [avatar, setAvatar] = useState(userData?.avatar || '');
  const [UserDestroyModal, toggleDestroyModal] = useModal(ConfirmRemoveModal, {
    title: '????????????',
    description: '????????? ?????? ????????? ???????????? ????????????.',
    onConfirm: useCallback(() => {
      if (!userData) return;
      destroyUserDispatch(userData.id);
    }, []),
  });
  const [ChangePasswordModal, togglePasswordModal] = useModal(_ChangePasswordModal, {});

  const onUpdateInfo = useCallback(() => {
    if (!userData) return;
    updateUserInfoDispatch({ UserId: userData.id, nickname, birth, gender, avatar });
  }, [nickname, birth, gender, avatar]);

  useEffect(() => {
    if (!userData) router.replace('/');
  }, [userData, destroyUser]);

  if (!userData) return <></>;

  return (
    <PageWithNavLayout pageName="??????" pageDesc="Settings" navData={SettingNavData}>
      <Head>
        <title>?????? | ???????????? ??????</title>
      </Head>
      <InfoContainer>
        <div className="cs__left">
          <PageLabel
            width={300}
            text={`${userData?.nickname}???`}
            desc="???????????? ????????? ??????."
          />
          <form>
            <CustomInput title="?????????" value={userData.email} onChange={() => null} />
            <CustomInput title="??????" value={userData.name} onChange={() => null} />
            <CustomInput title="??????" value={nickname} onChange={onChangeNickname} />
            <CustomInput title="????????????" value={birth} onChange={onChangeBirth} />
            <CustomSelect
              title="??????"
              value={gender}
              data={genderData}
              onChange={onChangeGender}
            />
          </form>
        </div>
        <div className="cs__right">
          <AvatarUpdateInput avatar={avatar} setAvatar={setAvatar} />
          <div className="avatar-update__form"></div>
          <div className="btn__group">
            <button type="button" onClick={onUpdateInfo}>
              ??????
            </button>
            <button type="button" onClick={togglePasswordModal}>
              ???????????? ??????
            </button>
            <button type="button" onClick={toggleDestroyModal}>
              ????????????
            </button>
          </div>
        </div>
      </InfoContainer>
      <UserDestroyModal />
      <ChangePasswordModal />
    </PageWithNavLayout>
  );
}
