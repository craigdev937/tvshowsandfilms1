import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, 
    useSelector, useDispatch } from "react-redux";
import { TrendingReducer } from "./TrendingSlice";

export const Reducer = configureStore({
    reducer: {
        films: TrendingReducer,
    },
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector:
    TypedUseSelectorHook<RootState> = useSelector;


