import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://86.38.203.140:3000/api" }),
  endpoints: (builder) => ({
    //#region User
    getUsers: builder.query({
      query: () => `/users`,
    }),

    getUserById: builder.query({
      query: (id) => `/users/${id}`,
    }),

    countUsers: builder.query({
      query: () => `/users/count`,
    }),

  
    //#endregion User
    //#region retos
    getRetos: builder.query({
      query: () => `/retos`,
    }),
    getUsuarioRetos: builder.query({
      query: (id) => `/usuario_reto/${id}`,
    }),

  }),
});

export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useCountUsersQuery,

  useGetRetosQuery,
  useGetUsuarioRetosQuery,
} = userApi;
