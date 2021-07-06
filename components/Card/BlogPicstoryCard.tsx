import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdBook, MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import { useThemeState } from '../../hooks/ThemeContext';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import { countSum } from '../../utils/utils';
import { BlogPicstoryCardBox } from './styles';

type PicstoryCardPropsType = {
  picstoryData: BlogPicstory;
};

export default function BlogPicstoryCard({
  picstoryData,
}: PicstoryCardPropsType): JSX.Element {
  const currentTheme = useThemeState();

  const likeCounts = picstoryData?.Posts?.map((post: BlogPost) =>
    post.likers ? post.likers.length : 0
  );
  const likeCountSum = countSum(likeCounts);
  const hits = picstoryData?.Posts?.map((post: BlogPost) => (post.hits ? post.hits : 0));
  const viewCountSum = countSum(hits);

  return (
    <Link href={`/${picstoryData.UserId}/picstory/${picstoryData.id}`}>
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
            {picstoryData?.Posts &&
              picstoryData?.Posts?.slice(0, 6).map(picstoryImgItem => (
                <li className="img__box" key={picstoryImgItem.id}>
                  <Image
                    src={process.env.NEXT_PUBLIC_IMAGE_600 + picstoryImgItem.thumbnail}
                    alt={picstoryImgItem.title}
                    height={150}
                    width={150}
                  />
                </li>
              ))}
          </ul>
        </article>
      </BlogPicstoryCardBox>
    </Link>
  );
}
