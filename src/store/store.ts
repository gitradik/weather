import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

import { baseApi } from './api/baseApi';
import { cityReducer } from './city';

export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]: baseApi.reducer,
    city: cityReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(() => next => action => next(action), baseApi.middleware),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;
