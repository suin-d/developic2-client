import {
  loadBlogPostListAction,
  loadBlogUserAction,
  loadBlogPicstoryListAction,
  loadBlogPicstoryDetailAction,
} from './thunk';
import { useCallback } from 'react';
import { useAppDispatch } from '../../hooks/useDispatch';
import { useAppSelector } from './../../hooks/useSelector';
import { LoadBlogListPayload } from './type';

export default function useBlog() {
  const {
    loadBlogPostList,
    loadBlogPicstoryList,
    loadBlogUser,
    loadBlogPicstoryDetail,
    hasMore,
  } = useAppSelector(state => state.blog);
  const dispatch = useAppDispatch();

  const loadBlogUserDispatch = useCallback((userId: number) => {
    dispatch(loadBlogUserAction(userId));
  }, []);

  const loadBlogPostListDispatch = useCallback((data: LoadBlogListPayload) => {
    dispatch(loadBlogPostListAction(data));
  }, []);

  const loadBlogPicstoryListDispatch = useCallback((data: LoadBlogListPayload) => {
    dispatch(loadBlogPicstoryListAction(data));
  }, []);

  const loadBlogPicstoryDetailDispatch = useCallback((picstoryId: number) => {
    dispatch(loadBlogPicstoryDetailAction(picstoryId));
  }, []);

  return {
    hasMore,
    loadBlogUser,
    loadBlogPostList,
    loadBlogPicstoryList,
    loadBlogPicstoryDetail,
    loadBlogUserDispatch,
    loadBlogPostListDispatch,
    loadBlogPicstoryListDispatch,
    loadBlogPicstoryDetailDispatch,
  };
}
