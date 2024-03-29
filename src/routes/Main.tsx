import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NotFound } from "../components/NotFound";
import { Search } from "../pages/search/Search";
import { Popular } from "../pages/popular/Popular";
import { Films } from "../pages/films/Films";
import { TVShows } from "../pages/tvshows/TVShows";
import { Media } from "../pages/media/Media";
import { Favorite } from "../pages/fav/Favorite";

const RRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navbar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Popular />,
                errorElement: <NotFound />
            },
            {
                path: "/media/:id",
                element: <Media />,
                
            },
            {
                path: "/films",
                element: <Films />,
                errorElement: <NotFound />
            },
            {
                path: "/tvshows",
                element: <TVShows />,
                errorElement: <NotFound />
            },
            {
                path: "/search",
                element: <Search />,
                errorElement: <NotFound />
            },
            {
                path: "/fav",
                element: <Favorite />,
                errorElement: <NotFound />
            }
        ]
    }
]);

export const Main = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RRouter} />
        </React.Fragment>
    );
};


