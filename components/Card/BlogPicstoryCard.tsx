import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { MdFavoriteBorder, MdLockOutline } from 'react-icons/md';
import { AiOutlineEye, AiOutlineBook } from 'react-icons/ai';
import { useThemeState } from '../../hooks/ThemeContext';
import { BlogPicstory, BlogPost } from '../../modules/blog';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import { countSum } from '../../utils/utils';
import { BlogPicstoryCardBox } from './styles';

type PicstoryCardPropsType = {
  picstoryData: BlogPicstory;
};

export default function BlogPicstoryCard({
  picstoryData,
}: PicstoryCardPropsType): JSX.Element {
  const currentTheme = useThemeState();
  const { userData } = useUser();
  const { loadBlogUser } = useBlog();
  const [isSameUser, setIsSameUser] = useState(false);

  useEffect(() => {
    if (userData?.id === loadBlogUser.data?.id) {
      setIsSameUser(true);
    } else {
      setIsSameUser(false);
    }
  }, [loadBlogUser.data?.id, userData?.id]);

  const likeCounts = isSameUser
    ? picstoryData?.Posts?.filter(
        data => data.isPublic === 1 || data.isPublic === 0
      ).map((post: BlogPost) => (post.likers ? post.likers.length : 0))
    : picstoryData?.Posts?.filter(data => data.isPublic === 1).map((post: BlogPost) =>
        post.likers ? post.likers.length : 0
      );
  const likeCountTotal = countSum(likeCounts);

  const viewCounts = isSameUser
    ? picstoryData?.Posts?.filter(data => data.isPublic === 1 || data.isPublic === 0).map(
        (post: BlogPost) => post.hits
      )
    : picstoryData?.Posts?.filter(data => data.isPublic === 1).map(
        (post: BlogPost) => post.hits
      );
  const viewCountTotal = countSum(viewCounts);

  return (
    <Link href={`/${picstoryData.UserId}/picstory/${picstoryData.id}`}>
      <BlogPicstoryCardBox currentTheme={currentTheme}>
        <article>
          <div>
            <div className="picstory__thumbnail">
              <Image
                src={process.env.NEXT_PUBLIC_IMAGE_200 + picstoryData.thumbnail}
                alt=""
                width={75}
                height={90}
                objectFit="cover"
              />
            </div>
            <div className="picstory__description">
              <div>
                <h3>{picstoryData.title}</h3>
                <div className="picstory__stats">
                  <div>
                    <AiOutlineBook />
                    <span>
                      {isSameUser
                        ? picstoryData.Posts.filter(
                            data => data.isPublic === 1 || data.isPublic === 0
                          ).length
                        : picstoryData.Posts.filter(data => data.isPublic === 1).length}
                    </span>
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

              <p>{picstoryData.description}</p>
            </div>
          </div>

          <ul className="picstory__recent-img">
            {isSameUser
              ? picstoryData.Posts.filter(
                  data => data.isPublic === 1 || data.isPublic === 0
                )
                  .slice(0, 6)
                  .map(picstoryImgItem => (
                    <li className="img__box" key={picstoryImgItem.id}>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_IMAGE_200 + picstoryImgItem.thumbnail
                        }
                        alt={picstoryImgItem.title}
                        height={150}
                        width={150}
                      />
                      {picstoryImgItem.isPublic === 0 && (
                        <div className="lock__wrapper">
                          <MdLockOutline />
                        </div>
                      )}
                    </li>
                  ))
              : picstoryData.Posts.filter(data => data.isPublic === 1)
                  .slice(0, 6)
                  .map(picstoryImgItem => (
                    <li className="img__box" key={picstoryImgItem.id}>
                      <Image
                        src={
                          process.env.NEXT_PUBLIC_IMAGE_600 + picstoryImgItem.thumbnail
                        }
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
