import { configureStore } from '@reduxjs/toolkit';
import areaReducer from '../features/area/areaSlice';

export const store = configureStore({
  reducer: {
    area: areaReducer
  },
});
