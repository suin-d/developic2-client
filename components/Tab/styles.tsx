import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const SortTabBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ul {
    margin-bottom: 20px;
    position: relative;
    display: flex;
    width: 110px;
    justify-content: space-between;
    text-align: right;
    li {
      display: inline-block;
      cursor: pointer;
    }
    li:last-of-type {
      margin-left: 10px;
    }
    li.active {
      font-weight: bold;
    }
    li:first-of-type.active:before {
      content: '';
      position: absolute;
      top: 40%;
      left: -10px;
      height: 5px;
      width: 5px;
      border-radius: 2.5px;
      background-color: ${({ theme }) => theme.primary[1]};
    }
    li:last-of-type.active:before {
      content: '';
      position: absolute;
      top: 40%;
      left: 58px;
      height: 5px;
      width: 5px;
      border-radius: 2.5px;
      background-color: ${({ theme }) => theme.primary[1]};
    }
  }
`;

export const SearhSortOptionContainer = styled.div<{
  currentTheme: null | string;
}>`
  font-family: 'Noto Serif KR';
  position: relative;
  .option__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    svg {
      margin-left: 0.571em;
    }
  }
  .sort__dropdown {
    right: 0;
    text-align: center;
    visibility: hidden;
  }
  .dropdown {
    border: 1px solid ${({ theme }) => theme.grayScale[4]};
    border-radius: 3px;
    background-color: #fff;
    position: absolute;
    margin-top: 1.071em;
    z-index: 9999;
  }
  .dropdown.sort-active {
    visibility: visible;
  }
  ul {
    padding: 1.429em 1.571em;
    ${({ currentTheme, theme }) =>
      currentTheme === 'dark' &&
      css`
        & {
          color: ${theme.textColor.reverse};
          box-shadow: 0px 0px 2px 1px #e0e0e0;
        }
      `};
    li {
      white-space: nowrap;
      cursor: pointer;
      padding: 0.5em 0;
      &:hover {
        color: ${({ theme }) => theme.primary[1]};
      }
      &.item-active {
        color: ${({ theme }) => theme.primary[1]};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.desktop} {
    span {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
  }
`;
