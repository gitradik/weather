import { baseApi } from 'store/api/baseApi';

const appid = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const extendedApi = baseApi.enhanceEndpoints({
  addTagTypes: ['City']
}).injectEndpoints({
  endpoints: build => ({
    getCity: build.query<any, string>({
      query: (id: string) => `/weather?id=${id}&units=metric&appid=${appid}`,
      providesTags: (result, error, id) => [{ type: 'City', id }],
    }),
    getCityList: build.query<any, string>({
      query: (cityName: string) =>
        `/find?q=${cityName}&type=like&sort=population&cnt=30&units=metric&appid=${appid}`,
      providesTags: list =>
        list
          ? [...list.map(({ id }: any) => ({ type: 'City' as const, id })), { type: 'City', id: 'LIST' }]
          : [{ type: 'City', id: 'LIST' }],
      transformResponse: (response: any): any[] => response.list,
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetCityQuery,
  useGetCityListQuery,
} = extendedApi;
