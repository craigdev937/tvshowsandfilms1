import React from "react";
import { Link } from "react-router-dom";
import { TMedia } from "../models/Interfaces";
const imgURL = "https://image.tmdb.org/t/p/w300";

type TMED = {
    media: TMedia
};

export const SearchCard = ({media}: TMED) => {
    return (
        <React.Fragment>
            <aside key={media.id}>
                <h1>{media.title}</h1>
                <img 
                    alt={media.title} 
                    src={`${imgURL}/${media.poster_path}`} 
                />
            </aside>
            <Link to={`/media/${media.id}`}>Details</Link>
        </React.Fragment>
    );
};

