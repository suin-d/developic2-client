import React from 'react';
import Image from 'next/image';
import { AiOutlineBook, AiOutlineEye } from 'react-icons/ai';
import { MdFavoriteBorder } from 'react-icons/md';
import { BlogPicstory } from '../../modules/blog';
import { SearchPicstoryCardBox } from './styles';
import { countSum } from '../../utils/utils';
import Link from 'next/link';

type PicstoryCardPropsType = {
  picstoryData: BlogPicstory;
};
export default function SearchPicstoryCard({
  picstoryData,
}: PicstoryCardPropsType): JSX.Element {
  const likeCounts = picstoryData.Posts.map(post =>
    post.likers ? post.likers.length : 0
  );
  const likeCountTotal = countSum(likeCounts);

  const viewCounts = picstoryData.Posts.map(post => post.hits);
  const viewCountTotal = countSum(viewCounts);

  return (
    <Link href={`/${picstoryData.UserId}/picstory/${picstoryData.id}`}>
      <SearchPicstoryCardBox>
        <article>
          <div className="picstory__thumbnail">
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_600 + picstoryData.thumbnail}
              alt=""
              width={280}
              height={220}
              objectFit="cover"
            />
          </div>
          <div>
            <div className="picstory__description">
              <h3>{picstoryData.title}</h3>
              <p>{picstoryData.description}</p>
            </div>
            <div className="picstory__info">
              <div>
                <img src={picstoryData.User.avatar} alt={picstoryData.User.nickname} />
                <span>{picstoryData.User.nickname}</span>
              </div>
              <div className="picstory__stats">
                <div>
                  <AiOutlineBook />
                  <span>{picstoryData.Posts.length}</span>
                </div>
                <div>
                  <MdFavoriteBorder />
                  <span>{likeCountTotal}</span>
                </div>
                <div>
                  <AiOutlineEye />
                  <span>{viewCountTotal}</span>
                </div>
              </div>
            </div>
          </div>
        </article>
      </SearchPicstoryCardBox>
    </Link>
  );
}
