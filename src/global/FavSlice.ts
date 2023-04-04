import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { MovieID, FavoriteState } from "../models/Interfaces";

const initialState: FavoriteState = {
    favorites: []
};

const FavSlice = createSlice({
    name: "favorites",
    initialState: initialState,
    reducers: {
        addMovie: (state, action: PayloadAction<MovieID>) => {
            state.favorites = [action.payload]
        },
        subMovie: (state, action: PayloadAction<MovieID>) => {
            state.favorites.filter(
                (id) => id !== action.payload);
        },
    }
});

export const FavActions = FavSlice.actions;
export const FavReducer = FavSlice.reducer;

