import axios from 'axios';

export const addHashAPI = async (name: string): Promise<{ id: number; name: string }> => {
  const res = await axios.post<{ id: number; name: string }>(
    'http://localhost:8000/post/hashtag',
    { name }
  );
  return res.data;
};
export const getHashAPI = async (
  keyword: string
): Promise<{ id: number; name: string }[]> => {
  const res = await axios.get<{ id: number; name: string }[]>(
    `http://localhost:8000/post/hashtag?keyword=${keyword}`
  );
  return res.data;
};
