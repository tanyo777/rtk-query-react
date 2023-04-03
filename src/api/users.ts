import { apiSlice } from "./apiSlice";

export const extendedApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => "/users",
    }),
    getUser: builder.query({
      query: (args) => `/users/${args.id}`,
    }),
  }),
  overrideExisting: false,
});
export const { useGetUserQuery, useGetUsersQuery } = extendedApi;
