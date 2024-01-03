import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'auth-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
  }),
  endpoints: (build) => ({
    postRegister: build.mutation({
      query: (body) => ({
        url: 'auth/register',
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
          name: body.name,
          surname: body.surname,
          city: body.city,
        },
      }),
    }),
    postLogin: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'POST',
        body: {
          email: body.email,
          password: body.password,
        },
      }),
    }),
    updateToken: build.mutation({
      query: (body) => ({
        url: 'auth/login',
        method: 'PUT',
        body: {
          access_token: body.access_token,
          refresh_token: body.refresh_token,
        },
      }),
    }),
  }),
});

export const { usePostRegisterMutation, usePostLoginMutation, useUpdateTokenMutation } = authApi;