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
      query: () => 'user',
    }),
    postUserAvatar: build.mutation({
      query: (formData) => ({
        url: 'user/avatar',
        method: 'POST',
        body: formData,
      }),
    }),
    patchUser: build.mutation({
      query: (body) => ({
        url: 'user',
        method: `PATCH`,
        body: {
          name: body.name,
          surname: body.surname,
          city: body.city,
          phone: body.phone,
        },
      }),
    }),
    updateToken: build.mutation({
      query: ({ access_token, refresh_token }) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'auth/login',
        method: 'PUT',
        body: {
          access_token: access_token,
          refresh_token: refresh_token,
        },
      }),
    }),
  }),
});

export const {
  useGetUserListQuery,
  useGetUserQuery,
  usePostUserAvatarMutation,
  usePatchUserMutation,
  useUpdateTokenMutation,
} = userApi;
