import { configureStore } from "@reduxjs/toolkit";
import { userApi } from "../services/userApi";

export const defaultStore = configureStore({
  reducer: {
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(userApi.middleware),
});

// Obtén el tipo del estado raíz del store
export const RootState = typeof defaultStore.getState;
