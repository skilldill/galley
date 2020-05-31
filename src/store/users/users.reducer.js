import { handleActions } from "redux-actions";
import { USERS_ACTION_TYPES } from "./users.actions";

const initialState = {
    users: []
}

const mapReducers = {
    [USERS_ACTION_TYPES.SET_USERS]: (state, action) => ({
        ...state,
        users: [...action.payload]
    })
}

export const usersReducer = handleActions(mapReducers, initialState);