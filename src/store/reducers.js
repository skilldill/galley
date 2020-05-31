import { combineReducers } from "redux";

import { navbarState } from "./navbar";
import { boardState } from "./board";
import { chartState } from "./chart";
import { usersState } from "./users";

export const reducers = combineReducers({
    navbar: navbarState.reducer,
    board: boardState.reducer,
    chart: chartState.reducer,
    users: usersState.reducer
})