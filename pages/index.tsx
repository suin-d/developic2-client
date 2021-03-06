import Head from 'next/head';
import Link from 'next/link';
import styled from '@emotion/styled';
import { RiArrowDownSLine } from 'react-icons/ri';
import PageLabel from '../components/Label/PageLabel';
import Layout from '../components/Layout';
import TitleLabel from '../components/Label/TitleLabel';
import PopularPostCard from '../components/Card/PopularPostCard';
import UserProfileCard from '../components/Card/UserProfileCard';
import Exhibition from '../components/Card/Exhibition';
import useList from '../modules/list/hooks';
import { MainPageDataType } from '../modules/list';
import Carousel from '../components/List/Carousel';
import { authServersiceAction } from '../utils/getServerSidePropsTemplate';
import wrapper from '../modules/store';
import Welcome from '../components/Result/Welcome';
import { useEffect } from 'react';
import { useState } from 'react';

const MainContainer = styled.main`
  max-width: 1150px;
  margin: 0 auto;
  margin-top: 50px;
  .page__label {
    h1 {
      width: 50%;
      font-size: 48px;
      letter-spacing: -0.8px;
    }
  }
  .banner__image {
    margin-top: 30px;
    margin-bottom: 150px;
    max-width: 1150px;
    height: 436px;
    background-color: #273bb9;
    img {
      width: 100%;
    }
  }
  .main__nav {
    width: 100%;
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin-bottom: 100px;
    & > li {
      cursor: pointer;
    }
  }
  .scroll__down {
    display: none;
  }
  section {
    margin: 50px 0 100px 0;
    h3 {
      color: ${({ theme }) => theme.textColor.initial};
      font-size: 30px;
      margin-bottom: 40px;
    }
    & > .post__section {
      display: inline-flex;
      flex-wrap: wrap;
    }
  }
  .more__btn {
    margin: 0 auto;
    font-size: 14px;
    border: 1px solid ${({ theme }) => theme.grayScale[1]};
    width: 120px;
    height: 35px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${({ theme }) => theme.grayScale[1]};
    cursor: pointer;
    transition: 0.3s ease-in-out;
    &::after {
      content: 'MORE';
    }
    &:hover {
      border: 4px solid ${({ theme }) => theme.primary[1]};
      color: ${({ theme }) => theme.primary[1]};
      &::after {
        content: 'DISCOVER';
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.tablet} {
    padding: 0 20px;
    .page__label {
      h1 {
        width: 80%;
      }
    }
  }
  @media ${({ theme }) => theme.viewPortSize.mobile} {
    padding: 100vh 0 0 0;
    .page__label {
      position: absolute;
      z-index: 10;
      top: 30vh;
      padding: 0 20px;
      h1 {
        text-shadow: 1px 1px 10px black;
        font-size: 32px;
        color: #eee;
        width: 100%;
      }
      p {
        text-shadow: 1px 1px 10px black;
        color: #aaa;
      }
    }
    .banner__image {
      position: absolute;
      top: 0;
      z-index: 0;
      width: 100%;
      height: 90vh;
      img {
      }
      border-bottom-left-radius: 50% 10%;
      border-bottom-right-radius: 50% 10%;
    }
    .scroll__down {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      top: 85vh;
      left: 0;
      right: 0;
      color: #fff;
      font-size: 30px;
      span {
        font-size: 12px;
      }
      animation: MoveUp 1s ease-in-out infinite alternate;
      @keyframes MoveUp {
        0% {
          transform: translateY(-10px);
        }
        100% {
          transform: translateY(0px);
        }
      }
    }
    .main__nav {
      position: absolute;
      top: 53vh;
      padding: 0 10px;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 100px;
      z-index: 11;
      & > li {
        h4 {
          color: #fff;
        }
        p {
          color: #aaa;
        }

        margin-bottom: 40px;
        width: 48%;
      }
    }
    section {
      h3 {
        text-align: center;
      }
      & > .post__section {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        padding: 0 10px;
        .popular-post__card {
          width: 100%;
          max-width: auto;
          margin: 0 0px 50px 0;
          img {
            max-height: 400px;
          }
        }
      }
    }
  }
`;

export default function Home(): JSX.Element {
  const {
    pageData,
    getArchiveListDispatch,
    getWriterListDispatch,
    getPostListDispatch,
  } = useList();

  const [welcome, setWelcome] = useState(false);
  useEffect(() => {
    if (sessionStorage) {
      const visited = sessionStorage.getItem('visited');
      if (!visited) {
        sessionStorage.setItem('visited', '1');
        setWelcome(true);
      }
    }
    const timeout = setTimeout(() => setWelcome(false), 4300);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    getArchiveListDispatch({ limit: 12 });
    getWriterListDispatch({ type: 'all', limit: 12 });
    getPostListDispatch({ sort: 'popular', term: 'week', limit: 15 });
  }, []);

  if (welcome) return <Welcome />;

  return (
    <Layout>
      <Head>
        <title>DEVELOPIC | ????????????</title>
      </Head>
      <MainContainer>
        <PageLabel
          text="Have&nbsp;your&nbsp;Film, Record&nbsp;your Memory"
          desc="?????? ?????? ????????????"
        />
        <div className="banner__image">
          <img src="main_banner.png" alt="banner" />
        </div>
        <div className="scroll__down">
          <RiArrowDownSLine />
          <span>SCROLL DOWN</span>
        </div>
        <ul className="main__nav">
          <Link href="/feed">
            <li>
              <TitleLabel title="??????" desc="Posts by your followers" />
            </li>
          </Link>
          <Link href="/discovery">
            <li>
              <TitleLabel title="??????" desc="Discover interesting posts" />
            </li>
          </Link>
          <Link href="/feed">
            <li>
              <TitleLabel title="????????????" desc="Archive for exhibition" />
            </li>
          </Link>
          <Link href="/cs/notice">
            <li>
              <TitleLabel title="????????????" desc="customer center" />
            </li>
          </Link>
        </ul>
        <section>
          <h3>?????? ????????????</h3>
          {(pageData as MainPageDataType).archive && (
            <Carousel
              width={230}
              height={500}
              listLength={(pageData as MainPageDataType).archive.length}
            >
              {[
                ...(pageData as MainPageDataType).archive,
                ...(pageData as MainPageDataType).archive,
                ...(pageData as MainPageDataType).archive,
              ].map((archive, i) => (
                <Exhibition key={archive.id + 'ex' + i} archiveData={archive} />
              ))}
            </Carousel>
          )}
        </section>
        <section>
          <h3>????????????</h3>
          {(pageData as MainPageDataType).writer && (
            <Carousel
              width={220}
              height={220}
              listLength={(pageData as MainPageDataType).writer.length}
            >
              {[
                ...(pageData as MainPageDataType).writer,
                ...(pageData as MainPageDataType).writer,
                ...(pageData as MainPageDataType).writer,
              ].map((userData, i) => (
                <UserProfileCard key={userData.id + 'writer' + i} userData={userData} />
              ))}
            </Carousel>
          )}
        </section>
        <section>
          <h3>?????????</h3>
          <div className="post__section">
            {(pageData as MainPageDataType).post &&
              (pageData as MainPageDataType).post.map(postData => (
                <PopularPostCard key={postData.id + 'post'} postData={postData} />
              ))}
          </div>
          <Link href="/discovery">
            <div className="more__btn"></div>
          </Link>
        </section>
      </MainContainer>
    </Layout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async context => {
  await authServersiceAction(context);
});
