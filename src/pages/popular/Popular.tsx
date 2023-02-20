import React from "react";
import "./Popular.css";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";
import { API } from "../../global/FetchAPI";
import { MediaCard } from "../../components/MediaCard";

export const Popular = () => {
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.tmedia.error);
    const loading = useAppSelector((state) => state.tmedia.loading);
    const tmedia = useAppSelector((state) => state.tmedia.tmedia);

    React.useEffect(() => {
        dispatch(API.getTrending());
    }, [dispatch]);

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <React.Fragment>
            {tmedia.map((media) => (
                <section key={media.id}>
                    <MediaCard key={media.id} media={media} />
                </section>
            ))}
        </React.Fragment>
    );
};


