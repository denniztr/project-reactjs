import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const advApi = createApi({
  reducerPath: 'adv-api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:8090/',
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
    getReviews: build.query({
      query: (id) => ({
        headers: {
          'Content-Type': 'application/json',
        },
        url: `ads/${id}/comments`,
      }),
    }),
  }),
});

export const { useGetAdvQuery, useGetAdvByIdQuery, useGetReviewsQuery } = advApi;