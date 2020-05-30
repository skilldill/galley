import { handleActions } from "redux-actions";
import { CHART_ACTION_TYPES } from "./chart.actions";

const initialState = {
    data: [],
    count: 10
}

const mapReducer = {
    [CHART_ACTION_TYPES.SET_DATA]: (state, action) => ({
        ...state,
        data: [...state.data, ...action.payload]
    })
}

export const chartReducer = handleActions(mapReducer, initialState);

