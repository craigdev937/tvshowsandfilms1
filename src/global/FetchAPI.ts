import { createAsyncThunk } from "@reduxjs/toolkit";
const URL = "https://api.themoviedb.org/3";
const KEY = process.env.API_KEY

class FetchClass {
    getTrending = createAsyncThunk("tmedia/getTrending", 
    async (_, thunkAPI) => {
        const res: Response = await fetch(
            `${URL}/trending/all/day?api_key=${KEY}`
        );
        if (!res.ok) {
            return thunkAPI.rejectWithValue(res.statusText);
        } else {
            const data = await res.json();
            return data.results;
        }
    });

    searchList = createAsyncThunk("search/searchList", 
    async (query: string) => {
        const res: Response = 
        await fetch(`${URL}/search/multi?api_key=${
            KEY}&query=${query}&page=1`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.results;
    });
};

export const API: FetchClass = new FetchClass();


