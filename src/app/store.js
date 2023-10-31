import { configureStore } from '@reduxjs/toolkit';
import imageSlice from '../features/image/imageSlice';
import quoteSlice from '../features/quote/quoteSlice';
import weatherSlice from '../features/weather/weatherSlice';
import goalsSlice from '../features/goals/goalsSlice';

export const store = configureStore({
  reducer: {
    image: imageSlice,
    quote: quoteSlice,
    weather: weatherSlice,
    goals: goalsSlice,
  },
});
