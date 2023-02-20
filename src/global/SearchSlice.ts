import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { TMedia, ISearchState } from "../models/Interfaces";

const initialState: ISearchState = {
    searches: [],
    loading: false,
    error: null
};

const SearchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(API.searchList.rejected.toString(), 
        (state, action: PayloadAction<ISearchState>) => {
            state.loading = false,
            state.error = action.payload.error
        }),
        builder.addCase(API.searchList.pending, (state) => {
            state.loading = true,
            state.error = null
        }),
        builder.addCase(API.searchList.fulfilled.type, 
        (state, action: PayloadAction<TMedia[]>) => {
            state.loading = false,
            state.searches = [...action.payload]
        })
    }
});

export const SearchReducer = SearchSlice.reducer;



