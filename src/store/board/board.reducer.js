import { handleActions } from "redux-actions";

import { LOAD_STATUSES } from "../../shared/constants";
import { BOARD_ACTION_TYPES } from "./board.actions";

const initialState = {
    tasks: [],
    loadStatus: LOAD_STATUSES.READY,
    signal: false
}

const mapReducers = {
    [BOARD_ACTION_TYPES.SET_TASKS]: (state, action) => ({
        ...state,
        tasks: [...action.payload]
    }),
    [BOARD_ACTION_TYPES.SET_STATUS]: (state, action) => ({
        ...state,
        loadStatus: action.payload
    }),
    [BOARD_ACTION_TYPES.SET_SIGNAL_FETCH]: (state, action) => ({
        ...state,
        signal: action.payload
    }),
    [BOARD_ACTION_TYPES.CHANGE_TASK_STATUS]: (state, action) => {
        // TODO: тут необходиом реализовать перемещение таски
        return {
            ...state
        }
    }
}

export const boardReducer = handleActions(mapReducers, initialState);