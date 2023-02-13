import React from "react";
import { IMedia } from "../models/Interfaces";
const imgURL = "https://image.tmdb.org/t/p/w500"

type MED = {
    media: IMedia
};

export const MediaCard = ({media}: MED) => {
    return (
        <React.Fragment>
            <h1>{media.title}</h1>
            <img 
                alt={media.title} 
                src={`${imgURL}/${media.backdrop_path}`} 
            />
        </React.Fragment>
    );
};


