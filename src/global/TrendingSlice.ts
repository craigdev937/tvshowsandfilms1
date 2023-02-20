import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { TMedia, TMediaState } from "../models/Interfaces";

const initialState: TMediaState = {
    tmedia: [],
    loading: false,
    error: null
};

const TrendingSlice = createSlice({
    name: "tmedia",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.getTrending.rejected.type, 
        (state, action: PayloadAction<TMediaState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.getTrending.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.getTrending.fulfilled, 
        (state, action: PayloadAction<TMedia[]>) => {
            state.loading = false,
            state.tmedia = [...action.payload]
        })
    },
});

export const TrendingReducer = TrendingSlice.reducer;


