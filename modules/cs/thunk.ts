import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { hasMoreData, isMoreLoading } from './slice';
import { GetCsPayload, NoticeType, FaqType } from './type';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = process.env.NEXT_PUBLIC_SERVER_HOST;

interface MyKnownError {
  message: string;
}

export const getNoticeAction = createAsyncThunk<
  NoticeType[],
  GetCsPayload,
  { rejectValue: MyKnownError }
>('cs/getNotice', async (payLoadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `/cs/notice/?${payLoadData.limit ? '&limit=' + payLoadData.limit : ''}${
        payLoadData.offset ? '&offset=' + payLoadData.offset : ''
      }`
    );
    dispatch(
      hasMoreData(
        payLoadData.limit ? payLoadData.limit === data.length : data.length === 8
      )
    );
    dispatch(isMoreLoading(payLoadData.offset ? payLoadData.offset !== 0 : false));
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});

export const getFaqAction = createAsyncThunk<
  FaqType[],
  GetCsPayload,
  { rejectValue: MyKnownError }
>('cs/getFaq', async (payLoadData, { dispatch, rejectWithValue }) => {
  try {
    const { data } = await axios.get(
      `cs/faq/?${payLoadData.limit ? '&limit=' + payLoadData.limit : ''}${
        payLoadData.offset ? '&offset=' + payLoadData.offset : ''
      }`
    );
    dispatch(
      hasMoreData(
        payLoadData.limit ? payLoadData.limit === data.length : data.length === 8
      )
    );
    dispatch(isMoreLoading(payLoadData.offset ? payLoadData.offset !== 0 : false));
    return data;
  } catch (e) {
    console.error(e);
    return rejectWithValue({ message: e.response.data });
  }
});
