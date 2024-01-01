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
  }),
});

export const { useGetAdvQuery } = advApi;