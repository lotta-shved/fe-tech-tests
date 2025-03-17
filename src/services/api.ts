import { User, UsersResponse } from "@/models/user";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const apiHeader = { "content-type": "application/json" };

const baseUrl = 'https://dummyjson.com/';

const createRequest = (url: string) => ({ url, headers: apiHeader });

const userFields: string[] = [
  'firstName',
  'lastName',
  'email',
  'age',
  'bank',
  'address',
];

export const appApi = createApi({
  reducerPath: "data",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Users'],
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => createRequest(`users?limit=5&skip=10&select=${userFields.join(',')}`),
      transformResponse: (response: UsersResponse) => response.users,
      providesTags: ['Users'],
    }),
    getOneUser: build.query({
      query: (params) =>
        createRequest(
          `users/${params.id}?select=${userFields.join(',')}`
        ),
    }),
    addOneUser: build.mutation<User, Partial<User>>({
      query: (user) => ({
        url: `users/add`,
        method: 'POST',
        body: user,
      }),
      invalidatesTags: ['Users'],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetOneUserQuery,
  useAddOneUserMutation,
} = appApi;
