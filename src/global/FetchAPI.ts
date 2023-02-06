import { createAsyncThunk } from "@reduxjs/toolkit";

const URL = "https://api.themoviedb.org/3/trending/all/day";
class FetchClass {
    getFilms = createAsyncThunk("films/getFilms", 
    async () => {
        const res: Response = await fetch(
            `${URL}?api_key=${process.env.API_KEY}`
        );
        if (!res.ok) throw new Error(res.statusText);
        const data = await res.json();
        return data.results;
    });
};

export const API: FetchClass = new FetchClass();


