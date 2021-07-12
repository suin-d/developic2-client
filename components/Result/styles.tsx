import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

const slideUp = keyframes`
from{
  transform:translateY(100px)
}
to{
  transform:translateY(0)
}
`;
const slideToRight = keyframes`
from{
  transform:translateX(-270px)
}
to{
  transform:translateX(0)
}
`;
const slideDown = keyframes`
from{
  transform:translateY(0)
}
to{
  transform:translateY(100px)
}
`;

export const BlogUserInfoBox = styled.div`
  font-size: ${({ theme }) => theme.fontSize.base};
  line-height: 1.5;
  max-width: 700px;
  margin: 0 auto;
  .user__info {
    strong {
      display: block;
      font-weight: 600;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 70px;
    }
  }
  .user__info:nth-child(3) > p {
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const EmptyContentContainer = styled.section`
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  margin: 0 auto;
  text-align: center;
  margin: 100px 0;
  .empty_message {
    margin-top: 50px;
  }
`;

export const BlogPicstoryDetailContainer = styled.div<{
  isSameUser: boolean;
  currentTheme: null | string;
}>`
  color: ${({ theme }) => theme.textColor.initial};
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
  margin-bottom: 50px;
  height: 160px;
  cursor: auto;
  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    margin-bottom: 18px;
  }
  article {
    .picstory__info {
      display: flex;
      justify-content: center;
      text-align: center;
      .picstory__description {
        font-size: ${({ theme }) => theme.fontSize.base};
        p {
          font-size: ${({ theme }) => theme.fontSize.medium};
          margin-bottom: 16px;
        }
        & > div:nth-of-type(2) {
          margin-top: 25px;
        }
        & > div {
          color: ${({ theme }) => theme.grayScale[1]};
          display: flex;
          justify-content: center;
          & > span:nth-of-type(1) {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
            ::after {
              float: right;
              width: 2px;
              height: 2px;
              margin: 7px 10px 8px;
              background-color: ${({ theme }) => theme.textColor.initial};
              vertical-align: 3px;
              border-radius: 50%;
              content: '';
            }
          }
          .picstory__stats {
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div {
              margin-left: -0.125em;
              margin-right: 15px;
              display: flex;
              align-items: center;
              svg {
                font-size: ${({ theme }) => theme.fontSize.base};
                margin-right: 0.143em;
              }
              span {
                font-size: 12px;
                padding-bottom: 1px;
              }
              &:nth-of-type(3) {
                svg {
                  font-size: ${({ theme }) => theme.fontSize.lg};
                }
                span {
                  margin-right: -0.571em;
                }
              }
            }
          }
        }
      }
    }
  }
  .picstory__btn {
    text-align: center;
    height: 25px;
    button {
      font-size: 12px;
      padding: 2px 16px;
    }
    button:nth-of-type(1) {
      margin-right: 10px;
    }
  }
`;

export const EmptyBlogUserInfoBox = styled.div`
  margin-bottom: 100px;
  text-align: center;
  color: ${({ theme }) => theme.textColor.initial};
  img {
    width: 60%;
  }
  .userInfo-empty {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xxl};
    margin: 40px 0;
  }
`;

export const IncompleteContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 100px 0;
  & > section {
    margin-right: 100px;
    ul {
      color: ${({ theme }) => theme.textColor.initial};
      margin-top: 60px;
      display: flex;
      align-items: center;
      li {
        padding: 5px 10px;
        cursor: pointer;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
      }
      li + li {
        font-size: 18px;
        margin-left: 60px;
      }
    }
  }
  img {
    width: 500px;
  }
`;

export const ToastPopUpBox = styled.div<{ visible: boolean }>`
  position: fixed;
  bottom: 40px;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 270px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background: ${({ theme }) => theme.primary[1]};
  color: #fff;
  font-size: 14px;
  z-index: 9999;

  animation: ${slideUp} 0.3s;
  overflow: hidden;
  box-shadow: 0 3px 5px #aaa;
  &::after {
    content: '';
    display: block;
    width: 270px;
    height: 3px;
    background-color: #fff;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    animation: ${slideToRight} 2s;
  }
  ${props =>
    props.visible &&
    css`
      animation: ${slideDown} 0.3s;
    `}
`;

export const SearchCountBox = styled.div`
  font-family: 'Noto Serif KR';
  margin-bottom: 25px;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.grayScale[1]};
`;
