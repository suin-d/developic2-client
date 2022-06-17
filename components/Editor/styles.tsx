import styled from '@emotion/styled';
import { MentionsInput } from 'react-mentions';

export const ToastEditorStyle = styled.div`
  z-index: 0;
  .tui-editor-contents {
  }
  .btn_group {
    margin: 30px 0 60px 0;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    button + button {
      margin-left: 20px;
    }
  }
`;

export const MentionsTextarea = styled(MentionsInput)`
  width: 100%;
  flex: 1;
  padding: 8px 0;
  & ul {
    left: 0;
    border: 1px solid lightgray;
    max-height: 200px;
    overflow-y: auto;
    padding: 9px 10px;
    background: white;
    border-radius: 4px;
    width: 300px;
  }
`;
export const EachMention = styled.button<{ focus: boolean }>`
  background: transparent;
  border: none;
  display: flex;
  align-items: center;
  color: rgb(28, 29, 28);
  width: 100%;
  ${({ focus }) =>
    focus &&
    `
    background: #1264a3;
    color: white;
  `};
`;

export const HashTagContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 30px 0;

  span {
    color: ${({ theme }) => theme.textColor.initial};
    display: inline-block;
    width: 100px;
  }
  & input {
    outline: none;
    padding: 6px 5px;
    border-radius: 0;
    color: ${({ theme }) => theme.textColor.initial};
    background: none;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.textColor.initial};
    .mention__box {
      display: none;
    }
  }
`;

export const HashTagSearchContainer = styled.div`
  margin-bottom: 30px;
  .result__list {
    border: 1px solid ${({ theme }) => theme.grayScale[4]};
    width: 400px;
    background-color: #fff;
    position: absolute;
    top: 28px;
    left: 110px;
    z-index: 10;
    li {
      cursor: pointer;
      padding: 5px 10px;
      &:hover {
        background-color: ${({ theme }) => theme.grayScale[4]};
      }
    }
  }
  & > ul {
    display: flex;
    li + li {
      margin-left: 10px;
    }
    li {
      cursor: pointer;
      font-size: 14px;
      padding: 4px 5px;
      color: ${({ theme }) => theme.textColor.initial};
      border: 1px solid ${({ theme }) => theme.grayScale[2]};
      &:hover {
        background-color: ${({ theme }) => theme.grayScale[4]};
      }
    }
  }
  & > p {
    margin-top: 10px;
    font-size: 12px;
    color: ${({ theme }) => theme.grayScale[2]};
  }
`;

export const PostContentViewerContainer = styled.article`
  line-height: 180%;
  max-width: 800px;
  img {
    width: 100%;
  }
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

  margin: 0 auto;
  margin-bottom: 100px;
  color: ${({ theme }) => theme.textColor.initial};
  font-size: ${({ theme }) => theme.fontSize.base};
  img {
    margin: 20px auto;
    cursor: pointer;
    display: block;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 10px ${({ theme }) => theme.grayScale[2]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    img {
      width: 100%;
    }
  }
`;
