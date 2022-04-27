import { baseApi } from '../store/api/baseApi';

const extendedApi = baseApi.enhanceEndpoints({
  addTagTypes: ['City']
}).injectEndpoints({
  endpoints: build => ({
    getCityList: build.query<any, string>({
      query: (cityName: string) =>
        `/find?q=${cityName}&type=like&sort=population&cnt=30&units=metric&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
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
  useGetCityListQuery,
} = extendedApi;
