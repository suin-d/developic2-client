import Masonry from 'react-masonry-css';
import useBlog from '../../modules/blog/hooks';
import useUser from '../../modules/user/hooks';
import BlogPostCard from '../Card/BlogPostCard';
import { BlogPostListContainer } from './styles';

export default function PicstoryDetailList(): JSX.Element {
  const { userData } = useUser();
  const { loadBlogPicstoryDetail, loadBlogUser } = useBlog();

  if (!loadBlogPicstoryDetail.data) return <></>;

  return (
    <>
      <BlogPostListContainer>
        <Masonry
          breakpointCols={2}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {userData?.id === loadBlogUser.data?.id
            ? loadBlogPicstoryDetail.data.Posts.filter(
                data => data.isPublic === 1 || data.isPublic === 0
              ).map(blogPostItem => (
                <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
              ))
            : loadBlogPicstoryDetail.data.Posts.filter(
                data => data.isPublic === 1
              ).map(blogPostItem => (
                <BlogPostCard key={blogPostItem.id} postData={blogPostItem} />
              ))}
        </Masonry>
      </BlogPostListContainer>
    </>
  );
}
