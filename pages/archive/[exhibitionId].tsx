import styled from '@emotion/styled';
import Head from 'next/head';
import React, { useEffect } from 'react';
import Button from '../../components/Button/Button';
import Layout from '../../components/Layout';
import Link from 'next/link';
import useArchive from '../../modules/archive/hooks';
import { useRouter } from 'next/router';
import { authServersiceAction } from '../../utils/getServerSidePropsTemplate';
import { getArchiveDetailAction } from '../../modules/archive';
import wrapper from '../../modules/store';

const ArchiveDetailContainer = styled.div`
  max-width: 900px;
  margin: 20px auto 100px auto;
  color: ${({ theme }) => theme.textColor.initial};
  img {
    max-width: 100%;
  }
  .detail__poster__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px auto;
    img {
      max-width: 100%;
      max-height: 610px;
      object-fit: contain;
    }
  }
  .detail__summary {
    border-top: 1px solid ${({ theme }) => theme.grayScale[2]};
    h1 {
      margin: 30px 0;
      font-size: ${({ theme }) => theme.fontSize.titleSize};
      font-weight: 500;
      line-height: 60px;
      word-break: break-word;
    }
    p {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      margin-top: 15px;
      word-break: break-word;
    }
    & > ul {
      margin: 70px 0 0 auto;
      border-left: 1px solid ${({ theme }) => theme.grayScale[2]};
      padding: 10px 0 10px 30px;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      min-width: 210px;
      max-width: 260px;
      .detail__by {
        display: flex;
        width: 100%;
        ul {
          flex: 1;
          li {
            font-size: ${({ theme }) => theme.fontSize.lg};
            text-align: end;
          }
          li + li {
            margin-top: 7px;
          }
        }
      }
      .detail__link {
        text-decoration: underline;
        cursor: pointer;
        &:hover {
          color: ${({ theme }) => theme.textColor.lighten};
        }
      }
      & > li + li {
        margin-top: 35px;
      }
    }
  }
  section > p {
    font-size: ${({ theme }) => theme.fontSize.xxxxl};
    font-weight: 500;
  }
  .detail__contact {
    margin-top: 150px;
    display: flex;
    justify-content: space-between;
    ul {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      li {
        white-space: nowrap;
        text-align: end;
      }
      li + li {
        margin-top: 25px;
      }
    }
  }
  .detail__info {
    line-height: 180%;
    p {
      margin: 10px 0;
    }
    blockquote {
      margin: 14px 0;
      border-left: 4px solid #e5e5e5;
      padding: 0 16px;
      color: #999;
      min-height: 20px;
    }
    q {
      quotes: '“' '”' '‘' '’';

      &:before {
        content: open-quote;
      }

      &:after {
        content: close-quote;
      }
    }
    hr {
      border: 1px inset;
      box-sizing: border-box;
      margin: 0.5em auto;
    }
    h1 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      font-weight: bold;
      margin: 52px 0 15px;
      border-bottom: 3px double #999;
      padding-bottom: 12px;
    }
    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxl};
      font-weight: bold;
      margin: 20px 0 13px;
      border-bottom: 1px solid #dbdbdb;
      padding-bottom: 7px;
    }
    h3 {
      font-size: 1.25rem;
      font-weight: bold;
      margin: 18px 0 2px;
    }
    h4 {
      font-size: ${({ theme }) => theme.fontSize.xl};
      font-weight: bold;
      margin: 10px 0 2px;
    }
    h5 {
      font-size: ${({ theme }) => theme.fontSize.lg};
      font-weight: bold;
    }
    h6 {
      font-size: ${({ theme }) => theme.fontSize.base};
      font-weight: bold;
    }
    del {
      text-decoration: line-through;
    }
    table {
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      margin: 12px 0 14px;
      color: #222;
      width: auto;
      border-collapse: collapse;
      box-sizing: border-box;
    }
    th,
    td {
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      padding: 10px;
    }
    table th,
    table td {
      border: 1px solid rgba(0, 0, 0, 0.1);
      padding: 5px 14px 5px 12px;
      height: 32px;
    }
    table th {
      background-color: #555;
      font-weight: 300;
      color: #fff;
      padding-top: 6px;
    }
    caption {
      text-align: center;
    }
    ul,
    menu,
    ol,
    dir {
      display: block;
      list-style-type: none;
      padding-left: 24px;
      margin: 6px 0 10px;
      color: #222;
    }
    li {
      min-height: 22px;
    }
    ul li,
    ol li {
      position: relative;
    }
    ul > li::before {
      content: '';
      margin-top: 6px;
      margin-left: -17px;
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background-color: #ccc;
    }
    ol > li {
      counter-increment: li;
    }
    ol > li::before {
      content: '.' counter(li);
      margin-left: -28px;
      width: 24px;
      text-align: right;
      direction: rtl;
      color: #aaa;
    }
    ul > li::before,
    ol > li::before {
      display: inline-block;
      position: absolute;
    }
    .task-list-item {
      border: 0;
      list-style: none;
      padding-left: 24px;
      margin-left: -24px;
    }
    ul li.task-list-item::before,
    ol li.task-list-item::before,
    pre ul li::before {
      content: '';
    }
    .task-list-item::before {
      background-repeat: no-repeat;
      background-size: 18px 18px;
      background-position: center;
      content: '';
      margin-left: 0;
      margin-top: 0;
      border-radius: 0;
      height: 18px;
      width: 18px;
      position: absolute;
      left: 0;
      top: 1px;
      cursor: pointer;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAAAQklEQVQ4EWM8c+bMfwYqABaQGcbGxhQZdfbsWQYmikxA0jxqEFJg4GCOhhGOgEESHg0jpMDAwRx8YQQuj0DlCaUAAEdBCPJ7TaEPAAAAAElFTkSuQmCC);
    }
    .task-list-item.checked::before {
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAEqADAAQAAAABAAAAEgAAAACaqbJVAAAA1ElEQVQ4EWP0nvbsPwMVABMVzAAbMWoQIiT5OJgYvLS5EAJQFguGCB4BkCHt/kIM8kKsYFXbrn6DqyY6sJENefjuN8ORuz/ghoAYWA0COR2kEQbQDanc+I7h049/MGkwjVANFQYZkmXHD/YCyABiDAFpxQgjkJO9dbjA4QAKDxAAhQnIO9hcAlYAJDBcBHIySANII8gAYgwBGYZhEEgQZFjVJohhhFwCUg8CjPgyLT8nE8N/YJZGD1iIVlQSI4yQpT9+R40ZZDl0NlavoSsihj/4DAIAR+hZHUj727YAAAAASUVORK5CYII=);
    }
    ins {
      background-color: transparent;
      font-weight: inherit;
      text-decoration: underline;
    }
    b,
    strong {
      font-weight: bold;
    }
    i,
    cite,
    em,
    var,
    address,
    dfn {
      font-style: italic;
      font-weight: inherit;
    }
    abbr[title],
    dfn[title] {
      border-bottom: 0;
      cursor: default;
      font-weight: inherit;
    }
    tt,
    code,
    kbd,
    samp {
      font-weight: inherit;
    }
    pre {
      margin: 2px 0 8px;
      padding: 18px;
      background-color: #f5f7f8;
    }
    pre code {
      padding: 0;
      color: inherit;
      white-space: pre-wrap;
      background-color: transparent;
    }
    big {
      font-size: larger;
      font-weight: inherit;
    }
    small {
      font-size: smaller;
      font-weight: inherit;
    }
    sub,
    sup {
      font-weight: inherit;
      line-height: inherit;
      position: static;
    }
    sub {
      font-size: smaller;
      bottom: 0;
      vertical-align: sub;
    }
    sup {
      font-size: smaller;
      top: 0;
      vertical-align: super;
    }
    ruby {
      > rt {
        font-size: 50%;
      }
    }
    iframe {
      border: 2px inset;
    }
    margin-top: 150px;
    & > article {
      margin-top: 50px;
      word-break: keep-all;
      padding: 0 50px;
      text-align: center;
      & > p {
        display: inline-block;
        font-size: ${({ theme }) => theme.fontSize.lg};
        img {
          width: 100%;
          object-fit: contain;
        }
      }
    }
  }
  .btn__group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;
    li {
      line-height: 70px;
      button {
        position: relative;
      }
    }
    .list__btn {
      button::before {
        position: absolute;
        bottom: -1px;
        left: 0;
        content: '';
        display: inline-block;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        width: 12px;
        transform-origin: left;
        transform: rotate(-45deg);
      }
    }
    .edit__btn {
      button::after {
        position: absolute;
        bottom: -1px;
        right: 0;
        content: '';
        display: inline-block;
        border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
        width: 12px;
        transform-origin: right;
        transform: rotate(45deg);
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
    padding: 0 10px;
    .detail__summary {
      padding: 20px;
      h1 {
        margin: 30px 0 30px 0;
      }
    }
    .detail__contact {
      margin-top: 70px;
      padding: 20px;
    }
    .detail__info {
      margin-top: 70px;
      padding: 20px;
      article {
        margin-top: 30px;
        padding: 0 10px;
      }
    }
  }
`;
export default function ArchiveId(): JSX.Element {
  const router = useRouter();
  const { exhibitionId } = router.query;
  const { getArchiveDetail, getArchiveDetailDispatch } = useArchive();
  useEffect(() => {
    if (exhibitionId) {
      getArchiveDetailDispatch(parseInt(exhibitionId as string));
    }
  }, [exhibitionId]);
  if (getArchiveDetail.loading) return <div>로딩중</div>;
  if (getArchiveDetail.error) return <></>;
  if (!getArchiveDetail.data) return <></>;
  return (
    <Layout>
      <Head>
        <title>ARCHIVE | {getArchiveDetail.data.title}</title>
      </Head>
      <ArchiveDetailContainer>
        <div className="detail__poster__wrapper">
          <img
            src={process.env.NEXT_PUBLIC_IMAGE_600 + getArchiveDetail.data.poster}
            alt={getArchiveDetail.data.title}
          />
        </div>
        <section className="detail__summary">
          <h1>{getArchiveDetail.data.title}</h1>
          <p>
            <b>{`${getArchiveDetail.data.startDate} - ${getArchiveDetail.data.endDate}`}</b>
          </p>
          <p>{getArchiveDetail.data.address}</p>
          <ul>
            <li className="detail__by">
              <b>By</b>
              <ul>
                {getArchiveDetail.data.author.split(',').map(name => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </li>
            <li
              className="detail__link"
              onClick={() => window.open(`${getArchiveDetail.data?.webPage}`)}
            >
              사이트로 이동
            </li>
            <li>
              {getArchiveDetail.data.cost === 0
                ? '무료관람'
                : `₩ ${getArchiveDetail.data.cost.toLocaleString()}`}
            </li>
          </ul>
        </section>
        <section className="detail__contact">
          <p>전시지원</p>
          <ul>
            <li>{getArchiveDetail.data.contact}</li>
            <li>
              <b>{getArchiveDetail.data.email}</b>
            </li>
          </ul>
        </section>
        <section className="detail__info">
          <p>Info</p>
          <article
            dangerouslySetInnerHTML={{ __html: getArchiveDetail.data.description }}
          ></article>
        </section>
        <div className="btn__group">
          <Link href="/archive">
            <div className="list__btn">
              <Button text="목록" bar width="100px" />
            </div>
          </Link>
          <Link href="/cs/inquery">
            <div className="edit__btn">
              <Button text="수정요청" bar width="100px" />
            </div>
          </Link>
        </div>
      </ArchiveDetailContainer>
    </Layout>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(async context => {
//   await Promise.allSettled([
//     authServersiceAction(context),
//     context.store.dispatch(
//       getArchiveDetailAction(+(context.params?.exhibitionId as string))
//     ),
//   ]);
// });
