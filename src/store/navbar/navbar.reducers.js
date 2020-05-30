import { handleActions } from "redux-actions";
import { NAVBAR_ACTION_TYPES } from "./navbar.actions";

export const initrialState = {
    title: ''
}

const mapReducers = {
    [NAVBAR_ACTION_TYPES.SET_TITLE]: (state, action) => ({
        ...state,
        title: action.payload
    })
}

export const navbarReducer = handleActions(mapReducers, initrialState);