import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import "./style.scss";
import rabbitPng from "../../assets/Заяц.png";
import monarhPng from "../../assets/10.png";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { URLS } from "../../shared/constants";

export const Home = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(() => {
        dispatch(NavbarActions.setTitle(''));
    }, [])

    const handleClickBegin = () => {
        history.push(URLS.TASKS);
    }

    return (
        <div className="home">
            <h1 className="home-title">
                GALLEY
            </h1>
            <p 
                className="home-description"
                onClick={handleClickBegin}
            >
                Начинай управлять гребцами
            </p>
            <div className="picture picture-rabbit">
                <img src={rabbitPng} alt="Заяц"/>
            </div>
            <div className="picture picture-monarh">
                <img src={monarhPng} alt="Человек"/>
            </div>
        </div>
    )
}