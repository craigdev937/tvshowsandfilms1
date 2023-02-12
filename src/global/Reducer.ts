import { configureStore } from "@reduxjs/toolkit";
import { TrendingReducer } from "./TrendingSlice";

export const Reducer = configureStore({
    reducer: {
        films: TrendingReducer,
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



