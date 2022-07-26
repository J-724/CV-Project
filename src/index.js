import React from "react";
import ReactDOM from "react-dom";
import CVBuilder from "./components/cvBuilder/Bundler.js";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <CVBuilder />
    </React.StrictMode>
);
