import { BlogUserData } from '../blog';

// 초기 상태 타입
export interface User {
  id: number;
  email: string;
  name: string;
  nickname: string;
  refreshToken: string;
  accessToken: string;
  socialId: string;
  gender: string;
  birth: string;
  introduce: string;
  avatar: string;
  lastLogin: string;
  subscribers: { id: number }[];
  writers: { id: number }[];
  likedPosts: { id: number }[];
  likedComments: { id: number }[];
}
export interface UserIntro {
  id: number;
  introduction: string;
  website: string;
  mostlyUseModel: string;
  summary?: string;
  lastLogin: null;
  subscribers?: Subscriber[];
  writers?: Subscriber[];
}

export interface Subscriber {
  id: number;
}

export type UserState = {
  login: { loading: boolean; data: null | unknown; error: null | unknown };
  logout: { loading: boolean; data: null | unknown; error: null | unknown };
  signup: { loading: boolean; data: null | unknown; error: null | unknown };
  socialRequest: { loading: boolean; data: null | unknown; error: null | unknown };
  auth: { loading: boolean; data: null | unknown; error: null | unknown };
  verification: { loading: boolean; data: null | unknown; error: null | unknown };
  userIntro: { loading: boolean; data: null | UserIntro; error: null | unknown };
  updateUser: { loading: boolean; data: null | unknown; error: null | unknown };
  destroyUser: { loading: boolean; data: null | unknown; error: null | unknown };
  addPostLike: { loading: boolean; data: null | LikePostPayload; error: null | unknown };
  removePostLike: {
    loading: boolean;
    data: null | LikePostPayload;
    error: null | unknown;
  };
  userData: User | null;
  addBlogFollow: { loading: boolean; data: null | unknown; error: null | unknown };
  removeBlogFollow: { loading: boolean; data: null | unknown; error: null | unknown };
  loadBlogFollowList: {
    loading: boolean;
    data: BlogFollowDataType[] | null;
    error: null | unknown;
  };
  loadBlogUser: { loading: boolean; data: null | BlogUserData; error: null | unknown };
  addBlogFollowList: { loading: boolean; data: null | unknown; error: null | unknown };
  removeBlogFollowList: { loading: boolean; data: null | unknown; error: null | unknown };
};

// 액션 Payload 타입
export type LoginPayload = {
  email: string;
  password: string;
};
export type SignupPayload = {
  email: string;
  password: string;
  name: string;
  nickname: string;
};
export type VerificationPayload = {
  email: string;
  code: string;
};
export type SocialLoginPayload = {
  loginType: string;
  email: string;
};
export type UpdateUserIntroPayload = {
  UserId: number;
  introduction: string;
  mostlyUseModel: string;
  website: string;
  summary: string;
};
export type UpdateUserInfoPayload = {
  UserId: number;
  nickname: string;
  birth: string;
  gender: string;
  avatar: string;
};
export type UpdatePasswordPayload = {
  UserId: number;
  currentPassword: string;
  newPassword: string;
};
export type LikePostPayload = {
  UserId: number;
  PostId: number;
};

export type BlogFollowPayload = {
  subscriberId: number;
  writerId: number;
};

export type BlogFollowDataType = {
  id: number;
  nickname: string;
  avatar: string;
  introduce: string;
};

export type LoadBlogFollowListPayload = {
  type: 'subscriber' | 'writer';
  userId: number;
};

//성공시 DataType
export type LoginResponse = User;
