import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { API_URL } from '@env';

type TaskType = {
  id: string;
  avatar: string;
  name: string;
  createdAt: string;
};

const API=`${API_URL}`
export const taskApi=createApi({
  reducerPath: 'task',
  baseQuery: fetchBaseQuery({ 
    baseUrl: API
  }),
  keepUnusedDataFor:3,
  refetchOnReconnect:true,
  refetchOnMountOrArgChange:true,
  endpoints: (builder) => ({
    getTask: builder.query<TaskType[], void>({
      query: () => ``,
    }),
})
})

export const {useGetTaskQuery}= taskApi
