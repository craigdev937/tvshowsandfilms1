import React from "react";
import "./Search.css";
import { useAppSelector, useAppDispatch } from "../../global/Hooks";
import { API } from "../../global/FetchAPI";
import { MediaCard } from "../../components/MediaCard";

export const Search = () => {
    const [query, setQuery] = React.useState("");
    const dispatch = useAppDispatch();
    const error = useAppSelector((state) => state.searches.error);
    const loading = useAppSelector((state) => state.searches.loading);
    const searches = useAppSelector((state) => state.searches.searches);

    const handleChange = 
    (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(event.target.value);
    };

    const handleSubmit = 
    (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(API.searchList(query));
    };

    if (loading) return <h1>Loading...</h1>;
    if (error) return <h1>Error: {error.message}</h1>;

    return (
        <React.Fragment>
            <h1>Search</h1>
            <section>
                <form onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        value={query}
                        placeholder="Search Media"
                        onChange={handleChange}
                    />
                    <button type="submit">Search</button>
                </form>
            </section>
            <section>
                {searches.map((media) => (
                    <aside key={media.id}>
                        <MediaCard 
                            key={media.id} media={media} 
                        />
                    </aside>
                ))}
            </section>
        </React.Fragment>
    );
};


