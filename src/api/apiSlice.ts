import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const apiSlice = createApi({
  reducerPath: 'apiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  tagTypes: ['Post', 'Get', 'Products'],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => '/products'
    }),
    getProduct: builder.query({
      query: (args: { id: number }) => `/product/${args.id}`
    })
  })
})
export const { useGetProductsQuery, useGetProductQuery } = apiSlice
