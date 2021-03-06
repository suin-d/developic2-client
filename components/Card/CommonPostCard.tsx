import React from 'react';
import Image from 'next/image';
import { MdFavoriteBorder } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import Link from 'next/link';
import { CommonPostCardBox } from './styles';
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
            src={process.env.NEXT_PUBLIC_IMAGE_600 + postData.thumbnail}
            alt=""
            width={500}
            height={410}
            objectFit="cover"
          />
          <h3>{postData.title}</h3>
          <p>{postData.summary}</p>
        </article>
        <div className="info">
          <Link href={`/${postData.User?.id}/post`}>
            <div>
              <Image
                src={postData.User?.avatar}
                alt={postData.User?.nickname}
                width={40}
                height={40}
                objectFit="cover"
              />
              <strong>{postData.User?.nickname}</strong>
              <span>λμ κΈ</span>
            </div>
          </Link>
          <div className="stats">
            <div>
              <MdFavoriteBorder />
              <span>{postData.likers?.length}</span>
            </div>
            <div>
              <AiOutlineEye />
              <span>{postData.hits}</span>
            </div>
          </div>
        </div>
      </CommonPostCardBox>
    </Link>
  );
}
