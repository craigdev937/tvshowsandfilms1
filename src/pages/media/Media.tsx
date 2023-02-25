import React from "react";
import "./Media.css";
import { useAppSelector } from "../../global/Hooks";
import { MediaCard } from "../../components/MediaCard";

export const Media = () => {
    const allMedia = useAppSelector((state) => state.tmedia.tmedia);

    return (
        <React.Fragment>
            {allMedia.map((media) => (
                <aside key={media.id}>
                    <MediaCard key={media.id} media={media} />
                </aside>
            ))}
        </React.Fragment>
    );
};


