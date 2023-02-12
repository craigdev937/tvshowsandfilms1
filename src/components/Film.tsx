import React from "react";
import { ITrending } from "../models/Interfaces";
const imageUrl = "https://image.tmdb.org/t/p/w500"

type FILM = {
    film: ITrending
};

export const Film = ({film}: FILM) => {
    return (
        <React.Fragment>
            <h1>{film.title}</h1>
            <img 
                alt={film.title} 
                src={`${imageUrl}/${film.backdrop_path}`} 
            />
        </React.Fragment>
    );
};

