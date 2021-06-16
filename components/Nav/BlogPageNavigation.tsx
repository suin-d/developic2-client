import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BlogNavData } from '../../utils/data';
import { BlogTabBox } from '../Tab/styles';

export default function BlogPageNavigation(): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <BlogTabBox>
      <ul>
        {BlogNavData.map(blogNav => (
          <Link href={`/${userId + blogNav.link}`} key={blogNav.link}>
            <li
              className={
                router.asPath === `/${userId + blogNav.link}` ? 'nav--active' : ''
              }
            >
              {blogNav.name}
            </li>
          </Link>
        ))}
      </ul>
    </BlogTabBox>
  );
}
