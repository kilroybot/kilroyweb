import { configureStore } from "@reduxjs/toolkit";
import accordionsReducer from "./slices/accordions";

export const store = configureStore({
  reducer: {
    accordions: accordionsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
