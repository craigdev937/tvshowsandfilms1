import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { ITrending, ITrendState } from "../models/Interfaces";

const initialState: ITrendState = {
    films: [],
    loading: false,
    error: null
};

const TrendingSlice = createSlice({
    name: "films",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getFilms.rejected.type, 
        (state, action: PayloadAction<ITrendState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getFilms.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.getFilms.fulfilled, 
        (state, action: PayloadAction<ITrending[]>) => {
            state.loading = false,
            state.films = [...action.payload]
        })
    },
});

export const TrendingReducer = TrendingSlice.reducer;


