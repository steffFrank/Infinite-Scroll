import React from "react";
import "./loader.css";

export const Loader = () => {
    return (
        <div className="loader">
            <img src={process.env.PUBLIC_URL + "/images/loader.svg"} alt="Loading..." />
        </div>
    )
}