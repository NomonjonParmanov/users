import { api } from "./api";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    // Get request
    getUsers: build.query({
      query: () => ({
        url: "/users",
      }),
      providesTags: ["user"],
    }),
    createUser: build.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      invalidatesTags: ["user"],
    }),
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetUsersQuery,
  useCreateUserMutation,
  useDeleteUserMutation,
} = categoryApi;
