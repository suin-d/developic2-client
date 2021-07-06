import React from 'react';
import Image from 'next/image';
import { MdFavorite, MdRemoveRedEye } from 'react-icons/md';
import Link from 'next/link';
import { CommonPostCardBox, UserAvatarWithNameBox } from './styles';
import { PostType } from '../../modules/list';

type PostCardPropsType = {
  postData: PostType;
};

export default function CommonPostCard({ postData }: PostCardPropsType): JSX.Element {
  return (
    <Link href={`/${postData.User?.id}/post/${postData.id}`}>
      <CommonPostCardBox>
        <article>
          <Image
            src={process.env.NEXT_PUBLIC_IMAGE_400 + postData.thumbnail}
            alt=""
            width={300}
            height={176}
            objectFit="cover"
          />
          <h3>{postData.title}</h3>
          <p>{postData.summary}</p>
        </article>
        <div className="info">
          <Link href={`/${postData.User?.id}/post`}>
            <UserAvatarWithNameBox>
              <img src={postData.User?.avatar} alt={postData.User?.nickname} />
              <strong>{postData.User?.nickname}</strong>
              <span>님의 글</span>
            </UserAvatarWithNameBox>
          </Link>
          <div className="stats">
            <p>
              <MdFavorite />
              <span>{postData.likers?.length}</span>
            </p>
            <p>
              <MdRemoveRedEye />
              <span>{postData.hits}</span>
            </p>
          </div>
        </div>
      </CommonPostCardBox>
    </Link>
  );
}
