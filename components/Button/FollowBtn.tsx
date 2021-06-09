import React from 'react';
import { MdDoneAll, MdPersonAdd } from 'react-icons/md';
import { useThemeState } from '../../hooks/ThemeContext';
import { Subscriber } from '../../modules/user';
import { RoundCornerBtnBox } from './styles';

type FollowBtnPropsType = {
  text: string;
  isFollow?: Subscriber | undefined;
  onClick?: () => void;
};
export default function FollowBtn({
  text,
  isFollow,
  onClick,
}: FollowBtnPropsType): JSX.Element {
  const currentTheme = useThemeState();

  return (
    <RoundCornerBtnBox onClick={onClick} isFollow={isFollow} currentTheme={currentTheme}>
      {isFollow ? <MdDoneAll /> : <MdPersonAdd />}
      {text}
    </RoundCornerBtnBox>
  );
}
