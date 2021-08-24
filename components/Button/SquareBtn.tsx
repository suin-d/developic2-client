import React from 'react';
import { SquareBtnBox } from './styles';

type SquareBtnPropsType = {
  children: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
};
export default function SquareBtn({
  children,
  className,
  onClick,
  type = 'button',
}: SquareBtnPropsType): JSX.Element {
  return (
    <SquareBtnBox type={type} onClick={onClick} className={className}>
      {children}
    </SquareBtnBox>
  );
}
