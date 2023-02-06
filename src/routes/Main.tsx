import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router-dom";
import { Navbar } from "./Navbar";
import { NotFound } from "../components/NotFound";
import { Search } from "../pages/search/Search";
import { Popular } from "../pages/popular/Popular";
import { Films } from "../pages/films/Films";
import { TVShows } from "../pages/tvshows/TVShows";

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


