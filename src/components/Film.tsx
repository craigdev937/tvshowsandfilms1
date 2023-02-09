import React from "react";
import { ITrending } from "../models/Interfaces";
const imgURL = "https://image.tmbd.org/t/p/w500/"

type FILM = {
    film: ITrending
};

export const Film = ({film}: FILM) => {
    return (
        <React.Fragment>
            <h1>{film.title}</h1>
        </React.Fragment>
    );
};

