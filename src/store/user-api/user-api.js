import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'user-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access_token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (build) => ({
    getUserList: build.query({
      query: () => 'user/all',
    }),
    getUser: build.query({
      query: () => 'user'
    }),
    postUserAvatar: build.mutation({
      query: (formData) => ({
        url: 'user/avatar',
        method: 'POST',
        body: formData,
      }),
    }),
  }),
});

export const { useGetUserListQuery, useGetUserQuery, usePostUserAvatarMutation } = userApi;
