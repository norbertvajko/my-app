import React from 'react';
import {App} from "./components/App";
import {createRoot} from "react-dom/client";

const container = document.getElementById('app');
const root = createRoot(container);

root.render(
    <React.StrictMode>
        <Router>

        </Router>
        <App />
    </React.StrictMode>
)
