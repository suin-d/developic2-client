import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { PageWithNavContainer } from '../Layout/PageWithNavLayout';

export const PageNavigationBox = styled.nav`
  border-top: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  ul {
    display: flex;
    margin-bottom: 30px;
    li {
      position: relative;
      top: -1px;
      min-width: 90px;
      text-align: center;
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
      font-weight: 600;
      border-top: 3px solid ${({ theme }) => theme.primary[1]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    ul {
      justify-content: space-between;
      li {
        flex: 1;
        margin: 0;
        font-size: 16px;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    ul {
      justify-content: space-between;
      margin-bottom: 35px;
      padding: 0 10px;
      li {
        margin: 0;
      }
    }
  }
`;

export const PagingBarContainer = styled.ul<{ currentPage: number }>`
  width: 90%;
  padding: 0 80px;
  margin: 30px 0;
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
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    width: 100%;
  }
`;

export const SearchPageNavigationContainer = styled.nav`
  border-bottom: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  margin-bottom: 1.875em;
  font-size: ${({ theme }) => theme.fontSize.lg};
  ul {
    display: flex;
    font-weight: 600;
    font-family: 'Noto Serif KR';
    li {
      cursor: pointer;
      padding: 1em 3.125em 1em 0;
      margin-bottom: -0.063em;
      margin-right: 0.313em;
      &:last-of-type {
        margin-right: -0.313em;
      }
    }
    li.nav--active {
      border-bottom: 0.1em solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 1.2em;
    ul {
      text-align: center;
      li {
        width: 33.3%;
        padding: 0.875em 0;
        margin-right: 0;
      }
    }
  }
`;

export const BlogNavBox = styled.nav`
  ul {
    margin-bottom: 1.875em;
    display: flex;
    justify-content: center;
    font-weight: 600;
    text-align: center;
    li {
      width: 20%;
      display: inline-block;
      padding: 1em;
      margin-bottom: -1px;
    }
    li:hover {
      cursor: pointer;
    }
    li.nav--active {
      border-bottom: 0.125em solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    margin-left: -1rem;
    margin-right: -1rem;
    font-size: ${({ theme }) => theme.fontSize.base};
    ul {
      margin: 0 auto 1.429em;
      li {
        width: 33.3%;
        span {
          font-size: ${({ theme }) => theme.fontSize.lg};
        }
      }
    }
  }
`;

export const SearchPageWithNavContainer = styled(PageWithNavContainer)`
  color: ${({ theme }) => theme.textColor.initial};
  max-width: 1150px;
  min-height: 650px;
  @media ${({ theme }) => theme.viewPortSize.tablet} {
    padding-left: 1rem;
    padding-right: 1rem;
    max-width: 850px;
    font-size: ${({ theme }) => theme.fontSize.small};
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding-left: 1rem;
    padding-right: 1rem;
    .title {
      margin: 15px 0;
    }
    .block {
      background: ${({ theme }) => theme.grayScale[4]};
      height: 1em;
      margin: 0 -1rem;
      box-shadow: 0px 4px 4px -4px rgb(0, 0, 0, 0.03) inset,
        0px -4px 4px -4px rgb(0, 0, 0, 0.04) inset;
    }
    font-size: ${({ theme }) => theme.fontSize.small};
  }
`;
