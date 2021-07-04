import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PageNavigationBox = styled.nav`
  border-top: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  ul {
    display: flex;
    margin-bottom: 50px;
    li {
      margin-right: 60px;
      font-family: 'Noto Serif KR';
      font-size: 18px;
      cursor: pointer;
      line-height: 2;
      &:hover {
        font-weight: 600;
      }
    }
    li.nav--active {
      text-decoration: underline;
      font-weight: 600;
    }
  }
`;

export const PagingBarContainer = styled.ul<{ currentPage: number }>`
  width: 90%;
  padding: 0 80px;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  li {
    font-family: 'Noto Serif KR';
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: ${({ theme }) => theme.fontWeight.regular};
    width: 25px;
    line-height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  ${({ currentPage, theme }) =>
    currentPage &&
    css`
      li:nth-child(${currentPage + 1}) {
        font-weight: ${theme.fontWeight.bold};
      }
    `}
`;
