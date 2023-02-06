import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Reducer } from "../global/Reducer";
import { Main } from "../routes/Main";

export const App = () => {
    return (
        <Provider store={Reducer}>
            <React.Fragment>
                <Main />
            </React.Fragment>
        </Provider>
    );
};


