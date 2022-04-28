import { baseApi } from 'store/api/baseApi';

export type GeoCoordinates = { lat: number, lon: number };
export type Temp = {
  day: number;
  eve: number;
  max: number;
  min: number;
  morn: number;
  night: number;
};
export type FeelsLike = {
  day: number;
  eve: number;
  morn: number;
  night: number;
};


const appid = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
const extendedApi = baseApi.enhanceEndpoints({
  addTagTypes: ['Weather']
}).injectEndpoints({
  endpoints: build => ({
    getWeather: build.query({
      query: ({ lat, lon }: GeoCoordinates) =>
        `/onecall?lat=${lat}&lon=${lon}&exclude=hourly&units=metric&appid=${appid}`,
      providesTags: ['Weather'],
    }),
  }),
  overrideExisting: false,
});

export const {
  useGetWeatherQuery,
} = extendedApi;
