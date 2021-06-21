import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { useThemeState } from '../../hooks/ThemeContext';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import { countSum } from '../../utils/utils';
import { BlogPicstoryCardBox } from './styles';

type PicstoryCardPropsType = {
  picstoryData: BlogPicstory;
};

export default function BlogPistoryCard({
  picstoryData,
}: PicstoryCardPropsType): JSX.Element {
  const currentTheme = useThemeState();

  const router = useRouter();
  const { userId } = router.query;

  const likeCounts = picstoryData?.Posts?.map((post: BlogPost) =>
    post.likers ? post.likers.length : 0
  );
  const likeCountSum = countSum(likeCounts);
  const hits = picstoryData?.Posts?.map((post: BlogPost) => (post.hits ? post.hits : 0));
  const viewCountSum = countSum(hits);

  return (
    // picstoryData 안에 UserId 필요
    <Link href={`/${userId}/picstory/${picstoryData.id}`}>
      <BlogPicstoryCardBox currentTheme={currentTheme}>
        <article>
          <div className="picstory__description">
            <h3>{picstoryData.title}</h3>
            <div className="picstory__stats">
              <div>
                <MdBook />
                <span>{picstoryData.Posts && picstoryData.Posts.length}</span>
              </div>
              <div>
                <MdFavorite />
                <span>{likeCountSum}</span>
              </div>
              <div>
                <MdRemoveRedEye />
                <span>{viewCountSum}</span>
              </div>
            </div>
          </div>
          <p>{picstoryData.description}</p>
          <ul className="picstory__recent-img">
            {posts &&
              posts.slice(0, 6).map(picstoryImgItem => (
                <li className="img__box" key={picstoryImgItem.id}>
                  <img src={picstoryImgItem.thumbnail} alt="picstory-thumbnail" />
                </li>
              ))}
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
