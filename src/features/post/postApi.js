import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';




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
    method: 'GET'
    }),
    providesTags: (results, error, args) => {
    return [{ type: 'UserPost', id:args.id }];
    }
  }),

  addPostByUser: builder.mutation({
    query: (user) => ({
    url: '/posts',
    body: {
     title: faker.commerce.productName(),
     userId: user.id
    },
    method: 'Post'
    }),
   invalidatesTags: ['Post']
  }),

  removePostById: builder.mutation({
    query: (post) => ({
    url: `/posts/${post.id}`,
    method: 'DELETE'
    }),
    }),
   invalidatesTags: (results, error, args) => {
    return [{ type: 'UserPost', id: args.userId }];
    }
  }),




})



export const { useGetPostByUserQuery, useAddPostByUserMutation, useRemovePostByIdMutation } = postApi;