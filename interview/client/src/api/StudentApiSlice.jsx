import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { BASE_URL, configUrl } from './Config'
export const studentApi = createApi({
    reducerPath: 'studentApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
      createStudent: builder.mutation({
        query: (newStudent) => ({
            url:configUrl.createStudent, 
            method: 'POST',
            body: newStudent,
          }),
      }),
    }),
  })

  export const { useCreateStudentMutation } = studentApi