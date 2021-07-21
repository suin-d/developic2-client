import styled from '@emotion/styled';

export const PageNavigationBox = styled.nav`
  border-top: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  ul {
    display: flex;
    margin-bottom: 30px;
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

export const SearchPageNavigationContainer = styled.nav`
  border-bottom: 0.5px solid ${({ theme }) => theme.grayScale[2]};
  color: ${({ theme }) => theme.textColor.initial};
  margin-bottom: 1.875em;
  font-size: ${({ theme }) => theme.fontSize.lg};
  ul {
    display: flex;
    li {
      font-family: 'Noto Serif KR';
      cursor: pointer;
      padding: 1em 3.125em 1em 0;
      margin-bottom: -0.063em;
      margin-right: 0.313em;
      &:last-of-type {
        margin-right: -0.313em;
      }
    }
    li.nav--active {
      border-bottom: 0.125em solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
      font-weight: 600;
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    margin-left: -1rem;
    margin-right: -1rem;
    margin-bottom: 1.2em;
    font-size: ${({ theme }) => theme.fontSize.medium};
    ul {
      li {
        text-align: center;
        width: 33.3%;
        padding: 1.071em 0;
      }
    }
  }
`;

export const BlogNavBox = styled.nav`
  ul {
    margin-bottom: 1.875em;
    display: flex;
    justify-content: center;
    li {
      text-align: center;
      width: 20%;
      display: inline-block;
      padding: 1em 2em;
      margin-bottom: -1px;
    }
    li:hover {
      cursor: pointer;
    }
    li.nav--active {
      border-bottom: 0.125em solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
      font-weight: 600;
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
          font-size: ${({ theme }) => theme.fontSize.medium};
        }
      }
    }
  }
`;
