import { configureStore } from "@reduxjs/toolkit";
import { TrendingReducer } from "./TrendingSlice";
import { SearchReducer } from "./SearchSlice";
import { FavReducer } from "./FavSlice";
import { createLS } from "./LocalStorage";
import { FavoriteState } from "../models/Interfaces";

const { loadState, saveState } = createLS<{
    favorites: FavoriteState
}>("tmdb-viewer");

const initialState = loadState();

export const Reducer = configureStore({
    reducer: {
        tmedia: TrendingReducer,
        searches: SearchReducer,
        favorites: FavReducer
    },
    preloadedState: initialState
});

Reducer.subscribe(() => {
    saveState({
        favorites: Reducer.getState().favorites,
    })
});

export type RootState = ReturnType<typeof Reducer.getState>;
export type AppDispatch = typeof Reducer.dispatch;



