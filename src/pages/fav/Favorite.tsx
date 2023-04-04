import React from "react";
import { useAppSelector } from "../../global/Hooks";

export const Favorite = () => {
    const movieIDS = useAppSelector((state) => state.favorites.favorites);

    return (
        <React.Fragment>

        </React.Fragment>
    );
};

