import React from "react";
import { TMedia } from "../models/Interfaces";
const imgURL = "https://image.tmdb.org/t/p/w300";

type MED = {
    media: TMedia
};

export const MediaCard = ({media}: MED) => {
    return (
        <React.Fragment>
            <h1>{media.title}</h1>
            <img 
                alt={media.title} 
                src={`${imgURL}/${media.poster_path}`} 
            />
        </React.Fragment>
    );
};


