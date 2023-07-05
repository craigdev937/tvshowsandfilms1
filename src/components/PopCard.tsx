import React from "react";
import "./PopCard.css";
import { TMedia } from "../models/Interfaces";
const imgURL = "https://image.tmdb.org/t/p/w300";

type TMED = {
    media: TMedia
};

export const PopCard = ({media}: TMED) => {
    return (
        <React.Fragment>
            <aside key={media.id} className="pop__container">
                <section className="pop__card">
                    <h1>{media.title}</h1>
                    <img 
                        alt={media.title} 
                        src={`${imgURL}/${media.poster_path}`} 
                    />
                </section>
            </aside>
        </React.Fragment>
    );
};

// import React from "react";
// import { Link, useParams } from "react-router-dom";
// import { TMedia } from "../models/Interfaces";
// const URL = "https://api.themoviedb.org/3";
// const imgURL = "https://image.tmdb.org/t/p/w300";

// type MED = {
//     media: TMedia
// };

// export const PopCard = ({media}: MED) => {
//     const { id } = useParams();
//     const mediaID = id !== undefined ? String(id) : "";
//     const mediaURL = `${URL}${mediaID}?${process.env.API_KEY}`

//     return (
//         <React.Fragment>
//             <section>
//                 <h1>{media.title}</h1>
//                 <img 
//                     alt={media.title} 
//                     src={`${imgURL}/${media.poster_path}`} 
//                 />
//             </section>
//             <Link to={`/details/${media.id}`}>Details</Link>
//         </React.Fragment>
//     );
// };


