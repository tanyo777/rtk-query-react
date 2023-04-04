import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

interface Product {
  id: number
  title: string
  description: string
  brand: string
  category: string
  discountPercentage: number
  images: string[]
  price: number
  rating: number
  stock: number
  thumbnail: string
}

interface ProductWithPagination {
  limit: number
  products: Product[]
  skip: number
  total: number
}

export const productsApi = createApi({
  refetchOnReconnect: true,
  reducerPath: 'productsApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  tagTypes: ['Post', 'Get', 'Products'],
  endpoints: (builder) => ({
    getProducts: builder.query<ProductWithPagination, void>({
      query: () => '/products'
    }),
    getProduct: builder.query<Product, { id: number }>({
      query: (args) => `/product/${args.id}`
    })
  })
})
export const { useGetProductsQuery, useGetProductQuery } = productsApi
