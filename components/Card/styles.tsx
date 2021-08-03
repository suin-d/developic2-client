import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const PopularPostCardBox = styled.div`
  display: inline-block;
  cursor: pointer;
  margin: 0 20px 50px 0;
  overflow: hidden;
  max-width: 400px;
  padding: 5px 5px;
  display: flex;
  flex-direction: column;
  img {
    border: 1px solid ${({ theme }) => theme.grayScale[3]};
    flex: 1;
    max-height: 150px;
    object-fit: cover;
  }
  article {
    width: 100%;
    font-family: 'Noto Serif KR';
    h5 {
      margin: 5px 0;
      color: ${({ theme }) => theme.textColor.initial};
      font-size: 16px;
    }
    p {
      margin-top: 10px;
      color: ${({ theme }) => theme.textColor.lighten};
      font-size: 14px;
    }
    ul {
      max-width: 300px;
      display: flex;
      flex-wrap: wrap;
      gap: 5px;
    }
  }
  transition: 0.2s ease-in-out;
  .like__box {
    margin: 5px 0 10px 0;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    small {
      display: flex;
      align-items: center;
      font-family: 'Montserrat';
      margin-left: 20px;
      svg {
        font-size: 14px;
        fill: ${({ theme }) => theme.grayScale[2]};
      }
      span {
        display: inline-block;
        margin-left: 5px;
        font-size: 12px;
        color: ${({ theme }) => theme.grayScale[2]};
      }
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[4]};
  }
`;

export const UserProfileCardBox = styled.div`
  font-family: 'Noto Serif KR';
  width: 220px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 175px;
  margin: 25px 0;
  img {
    border-radius: 35px;
    width: 65px;
    height: 65px;
    object-fit: cover;
    margin: 15px;
    transition: all 0.3s;
  }
  p {
    color: ${({ theme }) => theme.textColor.initial};
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 12px;
    transition: all 0.3s;
  }
  span {
    text-align: center;
    color: ${({ theme }) => theme.textColor.lighten};
    font-size: 12px;
    line-height: 1.4;
  }
  .move__btn {
    transition: all 0.3s;
    opacity: 0;
    margin-top: 15px;
    position: relative;
    font-size: 16px;
    display: flex;
    align-items: center;
    svg {
      padding-top: 2px;
      fill: ${({ theme }) => theme.textColor.lighten};
    }
  }

  &:hover {
    img {
      box-shadow: 0 0 10px ${({ theme }) => theme.grayScale[2]};
    }
    .move__btn {
      opacity: 1;
    }
  }
`;

export const RecentUserCardCardBox = styled.li`
  div {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 70px;
      height: 70px;
      object-fit: cover;
      border-radius: 50%;
      cursor: pointer;
      transition: 0.25s;
      &:hover {
        transform: scale(1.04);
        box-shadow: 0 0 10px ${({ theme }) => theme.grayScale[3]};
        & + p {
          color: ${({ theme }) => theme.primary[1]};
        }
      }
    }
    p {
      color: ${({ theme }) => theme.textColor.initial};
      font-size: ${({ theme }) => theme.fontSize.base};
      margin-top: 10px;
    }
  }
  & > p {
    text-align: center;
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.grayScale[1]};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    div {
      width: 80px;
      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;

export const HashTagBox = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3px 13px;
  font-family: 'Noto Serif KR';
  font-size: 14px;
  border: solid 1px ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.grayScale[1]};
  &:hover {
    background-color: ${({ theme }) => theme.grayScale[3]};
  }
`;

export const ExhibitionCardBox = styled.div`
  cursor: pointer;
  font-family: 'Noto Serif KR';
  width: 230px;
  position: relative;
  margin: 25px 0;
  img {
    width: 100%;
    height: 258px;
    object-fit: contain;
  }
  article {
    margin-top: 10px;
    padding: 5px;
    color: ${({ theme }) => theme.textColor.initial};
    h5 {
      font-size: 16px;
      line-height: 1.2;
    }
    p {
      text-align: right;
      display: block;
      margin: 10px 0;
      font-size: 14px;
    }
    ul {
      font-family: 'Montserrat';
      li {
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        line-height: 1.2;
      }
    }
  }
  .cost__box {
    font-family: 'Montserrat';
    position: absolute;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
    font-size: 12px;
    padding: 2px 10px;
    border-radius: 32px;
    transition: 0.2s;
    background-color: ${({ theme }) => theme.background.initial};
    border: 1px solid ${({ theme }) => theme.primary[1]};
    color: ${({ theme }) => theme.textColor.initial};
  }
  &:hover {
    h5 {
      text-decoration: underline;
    }
    .cost__box {
      background-color: ${({ theme }) => theme.primary[1]};
      border: 1px solid ${({ theme }) => theme.background.initial};
      color: ${({ theme }) => theme.background.initial};
    }
  }
`;

export const CommonPostCardBox = styled.li`
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: start;
  position: relative;
  line-height: 1.5;
  margin-bottom: 2.143em;
  width: 100%;
  article {
    cursor: pointer;
    width: 100%;
    & > img {
      display: block;
      width: 100%;
      object-fit: cover;
    }
    h3 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.lg};
      margin: 0.556em 0 0.444em 0;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5em;
      max-height: 3em;
    }
    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      line-height: 1.5em;
      max-height: 3em;
      color: ${({ theme }) => theme.grayScale[5]};
      margin-bottom: 1.786em;
      font-size: ${({ theme }) => theme.fontSize.base};
    }
    &:hover h3 {
      transition: all 0.25s ease-in-out;
      color: ${({ theme }) => theme.primary[1]};
    }
  }
  .info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${({ theme }) => theme.grayScale[5]};
    & > div {
      cursor: pointer;
      display: flex;
      align-items: center;
      img {
        width: 1.571em;
        height: 1.571em;
        border-radius: 50%;
      }
      strong {
        margin-left: 0.357em;
        margin-right: 0.143em;
        font-weight: ${({ theme }) => theme.fontWeight.regular};
        color: ${({ theme }) => theme.grayScale[1]};
        font-size: ${({ theme }) => theme.fontSize.base};
      }
      span {
        font-size: ${({ theme }) => theme.fontSize.small};
      }
    }
    .stats {
      font-family: 'Montserrat';
      width: 28%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        margin-right: 1.125em;
        display: flex;
        align-items: center;
        svg {
          font-size: ${({ theme }) => theme.fontSize.base};
          margin-right: 0.143em;
        }
        span {
          padding-top: 0.036em;
        }
      }
      div:nth-of-type(2) {
        margin-right: 0;
        svg {
          font-size: ${({ theme }) => theme.fontSize.lg};
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.tablet} {
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.small};
    .info {
      .stats {
        width: 26%;
      }
    }
    article {
      p {
        font-size: ${({ theme }) => theme.fontSize.base};
        margin-bottom: 1.071em;
      }
    }
    .info {
      .stats {
        width: 26%;
      }
    }
  }
`;

export const UserInfoCardBox = styled.li<{
  currentTheme: null | string;
}>`
  ${({ currentTheme, theme }) =>
    currentTheme === 'dark' &&
    css`
      & {
        color: ${theme.textColor.reverse};
        box-shadow: 0px 0px 5px 2px #e0e0e0;
      }
    `};
  font-family: 'Noto Serif KR';
  font-size: ${({ theme }) => theme.fontSize.base};
  color: ${({ theme }) => theme.textColor.initial};
  background-color: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.03), 0 20px 40px 10px rgba(224, 224, 224, 0.2);
  border: 0;
  border-radius: 3px;
  position: relative;
  width: 100%;
  cursor: pointer;
  article {
    display: flex;
    flex-direction: column;
    justify-content: Center;
    align-items: center;
    width: 100%;
    margin-top: 2.357em;
    &:hover h3 {
      color: ${({ theme }) => theme.primary[1]};
    }
    .profile__wrapper {
      img {
        width: 6.429em;
        height: 6.429em;
        border-radius: 50%;
      }
    }
    h3 {
      cursor: pointer;
      transition: all 0.2s ease-in-out;
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: ${({ theme }) => theme.fontWeight.semiBold};
      margin: 1.071em 0 0.875em 0;
    }
    p {
      cursor: pointer;
      padding: 0 2em;
      text-align: center;
      height: 16px;
    }
    .writer__add-info {
      margin-top: 2em;
      display: flex;
      justify-content: space-between;
      width: 40%;
      margin-bottom: 2.357em;
      div {
        display: block;
        text-align: center;
        div {
          margin-bottom: 0.357em;
          font-weight: ${({ theme }) => theme.fontWeight.regular};
        }
        span {
          font-weight: 600;
        }
      }
    }
    .writer__recent-img {
      display: flex;
      width: 100%;
      position: relative;
      .img__box {
        width: 33.3%;
        div {
          bottom: -1px;
        }
        div > img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.small};
    article {
      h3 {
        font-size: ${({ theme }) => theme.fontSize.lg};
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.base};
      }
      .writer__add-info {
        margin: 1.25em 0;
        div {
          font-size: ${({ theme }) => theme.fontSize.base};
        }
      }
    }
  }
`;

export const DrawerPostCardContainer = styled.li`
  cursor: pointer;
  font-family: 'Noto Serif KR';
  width: 270px;
  height: 300px;
  background-color: ${({ theme }) => theme.background.modal};
  border: solid 1px ${({ theme }) => theme.grayScale[3]};
  position: relative;
  transition: all 0.3s;
  & > img {
    width: 100%;
    height: 147px;
    object-fit: cover;
  }
  .content {
    background-color: ${({ theme }) => theme.background.modal};
    padding: 20px 15px;
    position: absolute;
    bottom: 0;
    right: 0;
    width: 235px;
    height: 183px;
    & > img {
      border: 0.5px solid ${({ theme }) => theme.grayScale[3]};
      position: absolute;
      top: -20px;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
    .writer {
      margin: 5px 0 10px 0;
      strong {
        color: ${({ theme }) => theme.textColor.initial};
        font-size: 14px;
      }
      small {
        color: ${({ theme }) => theme.textColor.lighten};
        font-size: 12px;
      }
    }
    article {
      height: 129.815px;
      display: flex;
      flex-direction: column;
      h3 {
        font-weight: 600;
        color: ${({ theme }) => theme.textColor.initial};
        font-size: 18px;
      }
      p:nth-child(2) {
        flex: 1;
        text-overflow: ellipsis;
        white-space: normal;
        overflow: hidden;
      }
      p:nth-child(3) {
        height: 16px;
      }
      p {
        margin: 10px 0;
        line-height: 1.3;
        color: ${({ theme }) => theme.textColor.lighten};
        font-size: 12px;
      }
      .circle {
        position: absolute;
        bottom: 15px;
        right: 15px;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.primary[1]};
        display: flex;
        align-items: center;
        justify-content: center;
        color: ${({ theme }) => theme.primary[1]};
        font-size: 35px;
        transition: 0.3s;
      }
      &::before {
        position: absolute;
        left: 0;
        background: ${({ theme }) => theme.grayScale[3]};
        content: '';
        width: 1px;
        height: 90px;
      }
    }
  }
  &:hover {
    transform: translateY(-3px);
    article > .circle {
      color: ${({ theme }) => theme.textColor.reverse};
      background: ${({ theme }) => theme.primary[1]};
    }
    .delete__btn {
      display: block;
    }
  }
  .delete__btn {
    display: none;
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: ${({ theme }) => theme.background.modal};
    padding: 3px 20px;
    outline: none;
    font-size: 12px;
    border: 1px solid ${({ theme }) => theme.grayScale[2]};
    color: ${({ theme }) => theme.grayScale[2]};
    &:hover {
      background-color: ${({ theme }) => theme.grayScale[4]};
    }
  }

  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    height: 250px;
    & > img {
      height: 120px;
    }
    .content {
      width: 90%;
      height: 54%;
      article {
        height: 90%;
        h3 {
          display: inline;
          flex: 1;
          text-overflow: ellipsis;
          white-space: normal;
          overflow: hidden;
          font-size: 15px;
        }
        p:nth-child(2) {
          display: none;
        }
        .circle {
          width: 25px;
          height: 25px;
        }
        &::before {
          height: 70px;
        }
      }
    }
  }
`;

export const UnfinishedPostCardContainer = styled.div`
  font-family: 'Noto Serif KR';
  width: 350px;
  background-color: ${({ theme }) => theme.background.modal};
  margin-bottom: 30px;
  padding: 15px;
  transition: 0.3s;
  article {
    color: ${({ theme }) => theme.textColor.initial};
    height: 260px;
    display: flex;
    flex-direction: column;
    & > h2 {
      line-height: 2.22;
      font-size: 18px;
      height: 40px;
      margin-bottom: 10px;
      height: 30px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    & > p {
      height: 200px;
      color: ${({ theme }) => theme.textColor.lighten};
      line-height: 2.5;
      font-size: 14px;
      overflow: hidden;
      text-overflow: ellipsis;
      img {
        display: block;
        width: 50px;
        height: 30px;
        object-fit: cover;
      }
    }
    span {
      align-self: flex-end;
      color: ${({ theme }) => theme.textColor.lighten};
      height: 20px;
      font-size: 14px;
      line-height: 1.43;
    }
  }
  .btn__group {
    margin-top: 20px;
    width: 100%;
    justify-content: flex-end;
    display: flex;
    button + button {
      margin-left: 25px;
    }
  }
  &:hover {
    transform: translateY(-3px);
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
  }
`;

export const PhotoBinderCardBox = styled.div`
  width: 350px;
  cursor: pointer;
  transition: 0.3s;
  .img__box {
    height: 210px;
    width: 100%;
    display: grid;
    gap: 5px;
    grid-template-columns: repeat(10, 1fr);
    grid-template-rows: repeat(12, 1fr);

    & > div {
      overflow: hidden;
      & > img {
        transition: 0.3s;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    & > div:nth-child(1) {
      grid-row: 1/ 13;
      grid-column: 1/ 5;
    }
    & > div:nth-child(2) {
      grid-row: 1/ 8;
      grid-column: 5/ 8;
    }
    & > div:nth-child(3) {
      grid-row: 1/ 6;
      grid-column: 8/ 11;
    }
    & > div:nth-child(4) {
      grid-row: 8/ 13;
      grid-column: 5/ 8;
    }
    & > div:nth-child(5) {
      grid-row: 6/ 13;
      grid-column: 8/ 11;
    }
  }
  article {
    color: ${({ theme }) => theme.textColor.lighten};
    height: 84px;
    padding: 10px 0;
    display: flex;
    align-items: center;
    .left {
      flex: 1;
      height: 100%;
      display: flex;
      flex-direction: column;
      h3 {
        color: ${({ theme }) => theme.textColor.initial};
        margin-bottom: 5px;
      }
      p {
        flex: 1;
        font-size: 14px;
      }
    }
    & > p {
      margin-left: 5px;
      font-size: 14px;
    }
  }
  &:hover {
    transform: translatey(-3px);
    .img__box > div > img {
      transform: scale(1.1);
    }
    article > .left > h3 {
      text-decoration: underline;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
  }
`;

export const FollowItemBox = styled.li`
  font-family: 'Noto Serif KR';
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid ${({ theme }) => theme.grayScale[3]};
  :last-of-type {
    border-bottom: none;
  }
  & > div {
    display: flex;
    align-items: center;
    cursor: pointer;
    div {
      img {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        object-fit: cover;
      }
    }

    & > div {
      margin-left: 10px;
      line-height: 1.7;
      span {
        font-weight: 500;
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.small};
        color: ${({ theme }) => theme.grayScale[5]};
      }
    }
    button {
      width: 110px;
    }
  }
`;

export const ArchiveItemContainer = styled.li<{
  length: number | undefined;
  posterId: number;
  currentTheme: null | string;
}>`
  max-width: 1020px;
  margin: 60px auto 0 auto;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover {
    h2 {
      text-decoration: underline;
    }
  }
  & > img {
    width: 248px;
    height: 350px;
    object-fit: cover;
    ${props =>
      props.currentTheme === 'light' &&
      css`
        box-shadow: 3px 3px 15px rgba(0, 0, 0, 0.15), -3px -3px 15px rgba(0, 0, 0, 0.15);
      `}
    ${props =>
      props.currentTheme === 'dark' &&
      css`
        box-shadow: 3px 3px 15px rgba(255, 255, 255, 0.15),
          -3px -3px 15px rgba(255, 255, 255, 0.15);
      `}
  }
  article {
    width: 500px;
    margin: 0 100px;
    font-family: 'Noto Serif KR';
    small {
      font-size: ${({ theme }) => theme.fontSize.base};
      color: ${({ theme }) => theme.textColor.lighten};
    }
    h2 {
      font-weight: 500;
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      color: ${({ theme }) => theme.textColor.initial};
      margin-top: 35px;
      line-height: 33px;
    }
    h2 + p {
      margin-top: 35px;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.lg};
      color: ${({ theme }) => theme.textColor.lighten};
      margin-top: 22px;
      span + span::before {
        content: ', ';
      }
    }
    b {
      font-family: 'Montserrat';
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    height: 100vh;
    margin: 0;
    margin-bottom: 60px;
    padding: 20px 20px 0 20px;
    padding-top: 20px;
    flex-direction: column;
    & > img {
      width: auto;
      flex: 1;
      object-fit: cover;
    }
    article {
      width: 100%;
      height: 200px;
      margin: 0 auto;
      padding: 20px 10px 0 10px;
      overflow: hidden;
      h2 {
        margin-top: 20px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      h2 + p {
        margin-top: 20px;
      }
      p {
        margin-top: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
    }
  }
`;

export const BlogCommentCardBox = styled.li`
  position: relative;
  max-width: 800px;
  padding: 30px 0;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  font-size: ${({ theme }) => theme.fontSize.base};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  & + & {
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
  }
  & > section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    & > article {
      img {
        cursor: pointer;
        position: absolute;
        margin: 0 auto;
        top: 30px;
        left: -71px;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        object-fit: cover;
      }
      div {
        strong {
          font-size: ${({ theme }) => theme.fontSize.xl};
          font-weight: ${({ theme }) => theme.fontWeight.medium};
        }
        p {
          font-family: 'Montserrat';
          margin-top: 12px;
        }
      }
    }
    & > div {
      span {
        color: ${({ theme }) => theme.textColor.lighten};
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.textColor.initial};
        }
      }
      span + span {
        margin-left: 20px;
      }
    }
  }
  & > p {
    margin-top: 15px;
    line-height: 25px;
  }
  & > .edit__form {
    textarea {
      font-family: 'san-serif';
      margin-top: 15px;
      width: 100%;
      height: 40px;
      resize: none;
      outline: none;
      border: 1px solid ${({ theme }) => theme.grayScale[1]};
    }
    & > span {
      display: block;
      text-align: right;
      font-size: 12px;
      color: ${({ theme }) => theme.grayScale[1]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 20px 5px;
    & > section {
      article {
        display: flex;
        img {
          position: relative;
          top: auto;
          left: auto;
          width: 40px;
          height: 40px;
          margin-right: 10px;
        }
        div {
          margin-top: 2px;
          strong {
            font-size: 14px;
          }
          p {
            margin-top: 8px;
            font-size: 12px;
          }
        }
      }
      & > div > span {
        font-size: 12px;
      }
    }
    & > p {
      margin-top: 5px;
      line-height: 25px;
    }
  }
`;

export const SearchPicstoryCardBox = styled.li`
  font-family: 'Noto Serif KR';
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.lg};
  article {
    display: flex;
    .picstory__thumbnail {
      width: 50%;
      min-width: 50%;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.03),
        0 20px 40px 10px rgba(224, 224, 224, 0.2);
      position: relative;
      & > div {
        position: unset !important;
      }
      img {
        border-radius: 5px;
      }
    }
    & > div:nth-of-type(2) {
      padding: 0.188em 0;
      width: 100%;
      line-height: 1.5;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: ${({ theme }) => theme.grayScale[1]};
      margin-left: 1em;
      .picstory__description {
        h3 {
          font-weight: 500;
          font-size: ${({ theme }) => theme.fontSize.lg};
          margin-bottom: 0.625em;
          color: ${({ theme }) => theme.textColor.lighten};
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.5em;
          max-height: 3em;
        }
        p {
          font-size: ${({ theme }) => theme.fontSize.base};
          margin-bottom: 0.857em;
          color: ${({ theme }) => theme.grayScale[5]};
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          line-height: 1.5em;
          max-height: 3em;
        }
        & > div {
          display: flex;
          align-items: center;
          margin-bottom: 0.5em;
          img {
            width: 1.375em;
            height: 1.375em;
            border-radius: 50%;
            object-fit: cover;
            box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.03),
              0 20px 40px 10px rgba(224, 224, 224, 0.2);
          }
          & > span {
            margin-left: 0.5em;
            cursor: pointer;
            font-size: ${({ theme }) => theme.fontSize.base};
            &:hover {
              text-decoration: underline;
            }
          }
        }
      }
      .picstory__stats {
        display: flex;
        color: ${({ theme }) => theme.grayScale[5]};
        div {
          margin-left: -0.125em;
          margin-right: 1.125em;
          display: flex;
          align-items: center;
          svg {
            font-size: ${({ theme }) => theme.fontSize.base};
            margin-right: 0.143em;
          }
          span {
            font-size: ${({ theme }) => theme.fontSize.small};
            padding-bottom: 0.083em;
          }
        }
        div:nth-of-type(3) {
          svg {
            font-size: ${({ theme }) => theme.fontSize.lg};
          }
          span {
            margin-right: -1.125em;
          }
        }
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.base};
    article {
      margin: 1.5em 0;
      & > div:nth-of-type(2) {
        padding: 0.5em 0;
        .picstory__description {
          h3 {
            font-size: ${({ theme }) => theme.fontSize.base};
          }
          p {
            font-size: ${({ theme }) => theme.fontSize.small};
          }
          & > div {
            & > span {
              font-size: ${({ theme }) => theme.fontSize.small};
            }
          }
        }
      }
    }
    border-bottom: 1px solid ${({ theme }) => theme.grayScale[4]};
    &:last-of-type {
      border-bottom: none;
    }
  }
`;

export const BlogPicstoryCardBox = styled.li<{
  currentTheme: null | string;
}>`
  ${({ currentTheme, theme }) =>
    currentTheme === 'dark' &&
    css`
      & {
        border: 1px solid ${theme.grayScale[3]};
      }
    `};
  color: ${({ theme }) => theme.grayScale[1]};
  font-family: 'Noto Serif KR';
  padding: 1.563em 1.563em 1.125em 1.563em;
  border: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 1.875em;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
  cursor: pointer;
  article {
    position: relative;
    > div:nth-of-type(1) {
      display: flex;
      align-items: flex-start;
      margin-bottom: 1.25em;
    }
    .picstory__thumbnail {
      position: relative;
      object-fit: cover;
      width: 65px;
      min-width: 50px;
      box-shadow: 0 3px 2px #bbb;
      & > div {
        position: unset !important;
      }
    }
    .picstory__description {
      margin-left: 0.938em;
      flex: 4;
      line-height: 1.5;
      & > div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        h3 {
          font-weight: 500;
          margin-bottom: 0.625em;
          flex: 4.5;
          margin-right: 20px;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
        .picstory__stats {
          color: ${({ theme }) => theme.grayScale[5]};
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex: 1;
          & > div {
            margin-left: -0.125em;
            margin-right: 0.5em;
            display: flex;
            align-items: center;
            svg {
              font-size: ${({ theme }) => theme.fontSize.base};
              margin-right: 0.214em;
            }
            span {
              font-size: 0.75rem;
            }
          }
          & > div:nth-of-type(3) {
            svg {
              font-size: 1rem;
            }
            span {
              margin-right: -0.571em;
            }
          }
        }
      }
      p {
        font-size: ${({ theme }) => theme.fontSize.base};
        color: ${({ theme }) => theme.grayScale[5]};
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        line-height: 1.5em;
        height: 3em;
      }
    }
    .picstory__recent-img {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      .img__box {
        width: 15.7%;
        margin-right: 0.588em;
        position: relative;
        margin-bottom: 0.313em;
        img {
          height: 100%;
          width: 100%;
          object-fit: cover;
        }
        .lock__wrapper {
          & > svg {
            font-size: ${({ theme }) => theme.fontSize.base};
          }
          position: absolute;
          top: 0.3em;
          right: 0.3em;
          display: flex;
          align-items: center;
          border: 0;
          background: rgba(25, 25, 25, 0.6);
          color: #fff;
          border-radius: 50%;
          padding: 0.3em 0.3em;
        }
      }
      li:nth-of-type(6) {
        margin-right: 0;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    font-size: ${({ theme }) => theme.fontSize.small};
    article {
      .picstory__description {
        & > div:nth-of-type(1) {
          display: block;
          h3 {
            font-size: ${({ theme }) => theme.fontSize.medium};
            margin-right: 0;
          }
          .picstory__stats {
            justify-content: flex-start;
            & > div {
              margin-right: 0.833em;
              margin-bottom: 0.833em;
            }
          }
        }
      }
    }
  }
`;

export const BlogPostCardBox = styled.li`
  cursor: pointer;
  font-size: ${({ theme }) => theme.fontSize.base};
  text-align: start;
  line-height: 1.6;
  font-family: 'Noto Serif KR';
  color: ${({ theme }) => theme.textColor.initial};
  article {
    .img__wrapper {
      width: 100%;
      background: #fff;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.429em;
      > div {
        position: unset !important;
        img {
          object-fit: cover;
          width: 410px !important;
          position: relative !important;
          height: unset !important;
        }
      }
    }
    .post__description {
      color: ${({ theme }) => theme.grayScale[5]};
      h3 {
        transition: all 0.25s ease-in-out;
        font-weight: 600;
        font-size: ${({ theme }) => theme.fontSize.xl};
        color: ${({ theme }) => theme.grayScale[1]};
        margin-bottom: 0.444em;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        word-wrap: break-word;
        text-overflow: ellipsis;
        overflow: hidden;
        -webkit-line-clamp: 2;
      }
      p {
        overflow: hidden;
        text-overflow: ellipsis;
        transition: all 0.25s ease-in-out;
        display: -webkit-box;
        -webkit-line-clamp: 3;
        -webkit-box-orient: vertical;
        margin-bottom: 1.5em;
      }
    }
    .post__info {
      display: flex;
      position: relative;
      align-items: center;
      margin-bottom: 1.75em;
      font-size: ${({ theme }) => theme.fontSize.small};
      color: ${({ theme }) => theme.grayScale[5]};
      .post__stats {
        display: flex;
        align-items: center;
        justify-content: space-between;
        div {
          display: flex;
          align-items: center;
          margin-right: 2em;
          svg {
            font-size: ${({ theme }) => theme.fontSize.medium};
            margin-right: 0.267em;
          }
          &:nth-of-type(1) {
            margin-right: 0.75em;
            span {
              margin: 0 1em 0 -0.125em;
            }
          }
          &:nth-of-type(2) {
            svg {
              font-size: ${({ theme }) => theme.fontSize.xl};
              margin-right: 0.222em;
            }
          }
        }
      }
      .lock__wrapper {
        & > svg {
          margin-right: 0.2em;
          font-size: 0.688rem;
        }
        display: flex;
        align-items: center;
        border: 0;
        background: ${({ theme }) => theme.grayScale[1]};
        color: ${({ theme }) => theme.textColor.reverse};
        border-radius: 5px;
        padding: 0.1em 0.8em;
        font-size: 10px;
        letter-spacing: 0.2px;
      }
      .post__date {
        position: absolute;
        right: 0;
      }
    }
  }
  &:hover {
    .post__description {
      p,
      h3 {
        color: ${({ theme }) => theme.primary[1]};
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    article {
      font-size: ${({ theme }) => theme.fontSize.small};
      .post__description {
        h3 {
          font-size: ${({ theme }) => theme.fontSize.lg};
        }
        p {
          font-size: ${({ theme }) => theme.fontSize.base};
        }
      }
      .post__info {
        align-items: flex-start;
        flex-direction: column-reverse;
        .lock__wrapper {
          margin-bottom: 0.667em;
          margin-top: -1em;
        }
        .post__stats div > span {
          margin-right: 0 !important;
        }
      }
    }
  }
`;
