import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { API } from "./FetchAPI";
import { IMedia, ISearchState } from "../models/Interfaces";

const initialState: ISearchState = {
    searchText: "",
    searches: [],
    loading: false,
    error: null
};

const SearchSlice = createSlice({
    name: "search",
    initialState: initialState,
    reducers: {
        setSearchText: (state, action: PayloadAction<string>) => {
            state.searchText = action.payload
        },
    },
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
        (state, action: PayloadAction<IMedia[]>) => {
            state.loading = false,
            state.searches = [...action.payload]
        })
    }
});

export const { setSearchText } = SearchSlice.actions;
export const SearchReducer = SearchSlice.reducer;



