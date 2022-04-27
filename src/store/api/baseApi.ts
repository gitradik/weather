import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Initialize an empty api service that we'll inject endpoints into later as needed
// This is needed so that we can take advantage of automatic re-fetching based on cache tags
// since cache tags don't work across multiple createApi endpoints
export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_OPENWEATHERMAP_API_URL}`,
  }),
  endpoints: () => ({}),
});
