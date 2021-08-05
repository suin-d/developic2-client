import { BlogUserInfoContainer } from '../../../components/Layout';
import BlogWithNavLayout from '../../../components/Layout/BlogWithNavLayout';
import BlogUserInfo from '../../../components/Result/BloggerInfo';

export default function BlogInfo(): JSX.Element {
  return (
    <BlogWithNavLayout>
      <BlogUserInfoContainer>
        <BlogUserInfo />
      </BlogUserInfoContainer>
    </BlogWithNavLayout>
  );
}
