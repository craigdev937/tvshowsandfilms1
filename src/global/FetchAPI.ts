import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.themoviedb.org/3";
class FetchClass {
    getTrending = createAsyncThunk("tmedia/getTrending", 
    async () => {
        const res: Response = await fetch(
            `${URL}/trending/all/day?api_key=${
                process.env.API_KEY}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.results;
    });

    searchList = createAsyncThunk("search/searchList", 
    async (query: string) => {
        const res: Response = 
        await fetch(`${URL}/search/multi?api_key=${
            process.env.API_KEY}&query=${query}&page=1`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.results;
    });
};

export const API: FetchClass = new FetchClass();


