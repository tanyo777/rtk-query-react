import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react'

interface User {
  age: number
  birthDate: string
  bloodGroup: string
  domain: string
  ein: string
  email: string
  eyeColor: string
  firstName: string
  gender: string
  height: number
  id: number
  image: string
  ip: string
  lastName: string
  macAddress: string
  maidenName: string
  password: string
  phone: string
  ssn: string
  university: string
  userAgent: string
  username: string
  weight: number
}

interface UsersWithPagination {
  limit: number
  users: User[]
  skip: number
  total: number
}

export const usersApi = createApi({
  refetchOnReconnect: true,
  reducerPath: 'usersApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://dummyjson.com/'
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UsersWithPagination, void>({
      query: () => '/users'
    }),
    getUser: builder.query<User, { id: number }>({
      query: (args) => `/users/${args.id}`
    })
  })
})

export const { useGetUserQuery, useGetUsersQuery } = usersApi
