import { baseApi } from '../store/api/baseApi';

type GeoCoordinates = { lat: number, lon: number };

const extendedApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Weather']
}).injectEndpoints({
  endpoints: build => ({
    getWeatherByGeoCoordinates: build.query({
      query: ({ lat, lon }: GeoCoordinates) =>
        `/onecall?lat=${lat}&lon=${lon}&exclude=current,minutely,hourly,alerts&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`,
      providesTags: ['Weather'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetWeatherByGeoCoordinatesQuery,
} = extendedApi;
