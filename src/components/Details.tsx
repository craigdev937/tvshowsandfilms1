import React from "react";
import { useAppSelector } from "../global/Hooks";
const imgURL = "https://image.tmdb.org/t/p/w500";

export const Details = () => {
    const popular = useAppSelector((state) => state.searches.searches);

    return (
        <React.Fragment>
            {popular.map((pop) => (
                <section key={pop.id}>
                    <h1>{pop.title}</h1>
                    <img 
                        alt={pop.title}
                        src={`${imgURL}/${pop.backdrop_path}`} 
                    />
                    <p>{pop.overview}</p>
                </section>
            ))}
        </React.Fragment>
    );
};

