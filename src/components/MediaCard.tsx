import React from "react";
import { Link } from "react-router-dom";
import { TMedia } from "../models/Interfaces";
const imgURL = "https://image.tmdb.org/t/p/w500";

type MED = {
    media: TMedia
};

export const MediaCard = ({media}: MED) => {

    return (
        <React.Fragment>
            <section>                
                <h1>Media Card Stupid</h1>
                <h1>{media.title}</h1>
                <img 
                    alt={media.title} 
                    src={`${imgURL}/${media.poster_path}`} 
                />
            </section>
            <Link to={`/media/${media.id}`}>Details</Link>
        </React.Fragment>
    );
};


