import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CityState = {
  cityName: string;
};

const slice = createSlice({
  name: 'city',
  initialState: { cityName: '' } as CityState,
  reducers: {
    setCityName: (state, { payload }: PayloadAction<string>) => {
      state.cityName = payload;
    },
  },
});

export const { setCityName } = slice.actions;
export const cityReducer = slice.reducer;

export const getCityName = (state: RootState) => state.city.cityName;
