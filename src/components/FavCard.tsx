import React from "react";
import "./FavCard.css";
import { useAppSelector } from "../global/Hooks";
import { MovieID } from "../models/Interfaces";

type FAV = {
    movieId: MovieID
};

export const FavCard = ({ movieId }: FAV) => {
    const movieIds = useAppSelector((state) => state.favorites.favorites);

    return (
        <React.Fragment>
            
        </React.Fragment>
    );
};

