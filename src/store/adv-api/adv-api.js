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
      }) 
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
        body:{
          text: body.text,
        },
      }),
    }),
  }),
});

export const { useGetAdvQuery, useGetAdvByIdQuery, useGetReviewsQuery, usePostReviewMutation, usePostAdvMutation } = advApi;