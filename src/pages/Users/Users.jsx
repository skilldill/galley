import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./style.scss";
import { NavbarActions } from "../../store/navbar/navbar.actions";
import { UsersActions } from "../../store/users/users.actions";
import { User } from "./components";

export const Users = () => {
    const { users } = useSelector((state) => state.users);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(NavbarActions.setTitle('Гребцы'));
        dispatch(UsersActions.fetchUsers());
    }, []);

    const renderUsers = () => {
        if (!!users && !!users.length) {
            return (
                <div className="users-list">
                    {
                        users.map((user, i) => (
                                <User 
                                    key={i}
                                    name={user['first_name']} 
                                    secondName={user['second_name']}
                                    index={i + 1}
                                />
                            )
                        )
                    }
                </div>
            )
        }
        return <p>Пока что нет гребцов</p>
    }

    return (
        <div className="users">
             {renderUsers()}
        </div>
    )
}