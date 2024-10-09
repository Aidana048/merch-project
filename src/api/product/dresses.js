import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const dressesApi = createApi({
    reducerPath: 'dresses',
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
    endpoints: ({query}) => ({
        getDresses: query({
            query: () => `/product`
        }),
    })
})

export const { useGetDressesQuery } = dressesApi
export default dressesApi