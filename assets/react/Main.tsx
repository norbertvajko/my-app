import * as React from 'react';
import {createRoot} from "react-dom/client";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import {HomePage} from "./pages/HomePage";


const Main = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <HomePage />}/>
            </Routes>
        </Router>
    );
}

const rootElement = document.getElementById("app");
const root = createRoot(rootElement);

root.render(
    <Main/>
);