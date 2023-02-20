import { configureStore } from "@reduxjs/toolkit";
import { TrendingReducer } from "./TrendingSlice";
import { SearchReducer } from "./SearchSlice";

export const Reducer = configureStore({
    reducer: {
        tmedia: TrendingReducer,
        searches: SearchReducer,
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



