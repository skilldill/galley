import { combineReducers } from "redux";

import { navbarState } from "./navbar";

export const reducers = combineReducers({
    navbar: navbarState.reducer
})