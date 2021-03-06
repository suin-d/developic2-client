import dayjs from 'dayjs';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useThemeState } from '../../hooks/ThemeContext';
import { Archive } from '../../modules/archive/type';
import { ArchiveItemContainer } from './styles';

type ArchiveItemPropsType = {
  data: Archive;
  listLength: number | undefined;
};

export default function ArchiveItem({
  data,
  listLength,
}: ArchiveItemPropsType): JSX.Element {
  const currentTheme = useThemeState();

  return (
    <Link href={`/archive/${data.id}`}>
      <ArchiveItemContainer
        length={listLength}
        posterId={data.id}
        currentTheme={currentTheme}
      >
        <Image
          src={process.env.NEXT_PUBLIC_IMAGE_ORIGINAL + data.poster}
          alt={data.title + '포스터'}
          width={248}
          height={350}
          objectFit="cover"
        />
        <article>
          {data.cost === 0 ? (
            <small>무료</small>
          ) : (
            <small>₩ {data.cost.toLocaleString()}</small>
          )}
          <h2>{data.title}</h2>
          <p>
            <b>by. </b>
            {data.author.split(',').map(name => (
              <span key={name}>{name}</span>
            ))}
          </p>
          <p>
            <b>{`${dayjs(data.startDate).format('YYYY-MM-DD')} - ${dayjs(
              data.endDate
            ).format('YYYY-MM-DD')}`}</b>
          </p>
          <p>{data.address}</p>
        </article>
      </ArchiveItemContainer>
    </Link>
  );
}
