import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advApi = createApi({
  reducerPath: 'adv-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.access_token;
      if (token) headers.set('Authorization', `Bearer ${token}`);
    },
  }),
  endpoints: (build) => ({
    getAdv: build.query({
      query: () => 'ads',
    }),
    getAdvById: build.query({
      query: (id) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: `ads/${id}`,
      }),
    }),
    postAdv: build.mutation({
      query: (body) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: 'adstext',
        method: 'POST',
        body: {
          title: body.title,
          description: body.description,
          price: body.price,
        },
      }),
    }),
    deleteAdv: build.mutation({
      query: (id) => ({
        url: `ads/${id}`,
        method: 'DELETE',
      }),
    }),
    patchAdv: build.mutation({
      query: ({ id, body }) => ({
        headers: {
          'Content-Type': 'application/json'
        },
        url: `ads/${id}`,
        method: 'PATCH',
        body: {
          title: body.title,
          description: body.description,
          price: body.price,
        },
      }),
    }),
    getReviews: build.query({
      query: (id) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: `ads/${id}/comments`,
      }),
    }),
    postReview: build.mutation({
      query: ({ id, body }) => ({
        headers: {
          'content-type': 'application/json',
        },
        url: `ads/${id}/comments`,
        method: 'POST',
        body: {
          text: body.text,
        },
      }),
    }),
    postImage: build.mutation({
      query: ({ id, formData }) => ({
        url: `ads/${id}/image`,
        method: 'POST',
        body: formData,
      }),
    }),
    deleteImage: build.mutation({
      query: ({ id, file_url }) => ({
        url: `ads/${id}/image`,
        method: 'DELETE',
        body: file_url,
      }),
    }),
    getMyAdv: build.query({
      query: () => 'ads/me',
    }),
    getUserAdv: build.query({
      query: (id) => ({
        url: `ads?user_id=${id}`
      }),
    }),
  }),
});

export const {
  useGetAdvQuery,
  useGetAdvByIdQuery,
  useGetReviewsQuery,
  usePostReviewMutation,
  usePostAdvMutation,
  useDeleteAdvMutation,
  usePatchAdvMutation,
  usePostImageMutation,
  useGetMyAdvQuery,
  useGetUserAdvQuery,
  useDeleteImageMutation,
} = advApi;
