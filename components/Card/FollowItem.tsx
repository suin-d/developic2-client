import { BlogFollowDataType } from '../../modules/user';
import { FollowItemBox } from './styles';
import Link from 'next/link';

type FollowListDataPropsType = {
  followData?: BlogFollowDataType;
};
export default function FollowItem({ followData }: FollowListDataPropsType): JSX.Element {
  if (!followData) return <></>;

  return (
    <Link href={`/${followData?.id}/post`}>
      <FollowItemBox>
        <img src={followData.avatar} alt="avatar__img" />
        <span>{followData.nickname}</span>
      </FollowItemBox>
    </Link>
  );
}
