import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { BlogNavData } from '../../utils/data';
import { BlogNavBox } from './styles';

export default function BlogPageNavigation(): JSX.Element {
  const router = useRouter();
  const { userId } = router.query;
  return (
    <BlogNavBox>
      <ul>
        {BlogNavData.map(blogNav => (
          <Link href={`/${userId + blogNav.link}`} key={blogNav.link}>
            <li
              className={
                router.asPath === `/${userId + blogNav.link}` ? 'nav--active' : ''
              }
            >
              <span>{blogNav.name}</span>
            </li>
          </Link>
        ))}
      </ul>
    </BlogNavBox>
  );
}
