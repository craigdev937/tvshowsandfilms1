import React from "react";
import "./Navbar.css";
import { Link, Outlet } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = () => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <React.Fragment>
            <nav className="navbar">
                <Link className="navbar__logo" 
                    to="/">
                        <h3>Features</h3>
                </Link>
                <aside 
                    className="navbar__icon"
                    onClick={handleClick}
                    >{open ? <FiX /> : <FiMenu />}
                </aside>
                <ul 
                    className={open ? 
                    "navbar__links active" : 
                    "navbar__links"}>
                    {/* <li className="navbar__item">
                        <Link 
                            className="navbar__link" 
                            to="/" 
                            onClick={closeMenu}
                            >Popular
                        </Link>
                    </li> */}
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link" 
                            to="/films" 
                            onClick={closeMenu}
                            >Films
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link" 
                            to="/tvshows" 
                            onClick={closeMenu}
                            >TVShows
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link" 
                            to="/search" 
                            onClick={closeMenu}
                            >Search
                        </Link>
                    </li>
                    <li className="navbar__item">
                        <Link 
                            className="navbar__link" 
                            to="/fav" 
                            onClick={closeMenu}
                            >Favorites
                        </Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </React.Fragment>
    );
};


