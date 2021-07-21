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
      font-weight: 500;
      margin-bottom: 20px;
    }
    p {
      margin-bottom: 70px;
      color: ${({ theme }) => theme.grayScale[5]};
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
  margin: 6.667em 0;
  .empty_message {
    margin-top: 4.167em;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.base};
  }
`;

export const BlogPicstoryDetailContainer = styled.div<{
  isSameUser: boolean;
  currentTheme: null | string;
}>`
  color: ${({ theme }) => theme.grayScale[5]};
  margin-bottom: 1.786em;
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[2]};
  cursor: auto;
  line-height: 1.6em;
  h2 {
    color: ${({ theme }) => theme.textColor.initial};
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: bold;
    margin-top: 1em;
    margin-bottom: 1em;
  }
  article {
    .picstory__info {
      display: flex;
      justify-content: center;
      text-align: center;
      .picstory__description {
        font-size: ${({ theme }) => theme.fontSize.base};
        p {
          margin-bottom: 1.143em;
        }
        & > div:nth-of-type(2) {
          margin-top: 1.429em;
          padding-bottom: 1.429em;
        }
        & > div {
          display: flex;
          justify-content: center;
          align-items: center;
          & > span:nth-of-type(1) {
            cursor: pointer;
            &:hover {
              text-decoration: underline;
            }
            ::after {
              float: right;
              width: 2px;
              height: 2px;
              margin: 0.714em 0.714em 0.571em;
              background-color: ${({ theme }) => theme.grayScale[5]};
              border-radius: 50%;
              content: '';
            }
          }
          .picstory__stats {
            color: ${({ theme }) => theme.grayScale[5]};
            display: flex;
            align-items: center;
            justify-content: space-between;
            & > div {
              margin-left: -0.125em;
              margin-right: 1.071em;
              display: flex;
              align-items: center;
              svg {
                font-size: ${({ theme }) => theme.fontSize.base};
                margin-right: 0.143em;
              }
              span {
                font-size: ${({ theme }) => theme.fontSize.small};
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
    height: 1.786em;
    button {
      font-size: ${({ theme }) => theme.fontSize.small};
    }
    button:nth-of-type(1) {
      margin-right: 1em;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.base};
    h2 {
      font-size: ${({ theme }) => theme.fontSize.lg};
    }
    article {
      .picstory__info {
        .picstory__description {
          font-size: ${({ theme }) => theme.fontSize.small};
          p {
            font-size: ${({ theme }) => theme.fontSize.base};
          }
        }
      }
    }
  }
`;

export const EmptyBlogUserInfoBox = styled.div`
  margin: 2.857em 0;
  text-align: center;
  color: ${({ theme }) => theme.textColor.initial};
  img {
    width: 60%;
  }
  p {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin: 2.143em 0;
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.small};
    p {
      font-size: ${({ theme }) => theme.fontSize.base};
    }
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
  margin-bottom: 1em;
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.grayScale[1]};
`;
