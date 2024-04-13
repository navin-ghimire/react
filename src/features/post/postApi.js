import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';




export const postApi = createApi({
  reducerPath: 'postApi',
 baseQuery: fetchBaseQuery({baseUrl: 'https://66134ad853b0d5d80f67155d.mockapi.io'}),
endpoints: (builder) => ({




  getPostByUser: builder.query({
    query: (user) => ({
    url: '/posts',
    params: {
      userId: user.id
    },
    method: 'Get'
    })
  }),



})


});

export const { useGetPostByUserQuery } = postApi;