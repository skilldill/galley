import { combineReducers } from "redux";

import { navbarState } from "./navbar";
import { boardState } from "./board";

export const reducers = combineReducers({
    navbar: navbarState.reducer,
    board: boardState.reducer
})