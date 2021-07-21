import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdFavoriteBorder, MdLockOutline } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { BlogPost } from '../../modules/blog';
import { BlogPostCardBox } from './styles';

type BlogPostCardPropsType = {
  postData: BlogPost;
};

export default function BlogPostCard({ postData }: BlogPostCardPropsType): JSX.Element {
  return (
    <Link href={`/${postData.UserId}/post/${postData.id}`}>
      <BlogPostCardBox>
        <article>
          <div className="img__wrapper">
            <Image
              src={process.env.NEXT_PUBLIC_IMAGE_600 + postData.thumbnail}
              alt={postData.title}
              layout="fill"
            />
          </div>
          <div className="post__description">
            <h3>{postData.title}</h3>
            <p>{postData.summary}</p>
          </div>
          <div className="post__info">
            <div className="post__stats">
              <div>
                <MdFavoriteBorder />
                <span>{postData.likeCount}</span>
              </div>
              <div>
                <AiOutlineEye />
                <span>{postData.hits}</span>
              </div>
            </div>
            {postData.isPublic === 0 && (
              <div className="lock__wrapper">
                <MdLockOutline />
                비공개
              </div>
            )}
            <div className="post__date">
              {dayjs(`${postData.createdAt}`).locale('en').format('MMM D, YYYY')}
            </div>
          </div>
        </article>
      </BlogPostCardBox>
    </Link>
  );
}
