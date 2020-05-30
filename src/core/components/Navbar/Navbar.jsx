import React from "react";
import { useSelector } from "react-redux";

import "./style.scss";

export const Navbar = () => {
    const { title } = useSelector((state) => state.navbar);

    return (
        <div className="navbar">{title}</div>
    )
}