import { handleActions } from "redux-actions";
import { CHART_ACTION_TYPES } from "./chart.actions";

const initialState = {
    data: [],
    signal: false
}

const prepareData = (data) => {
    const uniqueByHash = [...new Set(data.map((dot) => dot.hash))];
    const updateDataArray = [];

    uniqueByHash.map((hash) => {
        // Создаем массив уникальных массивов
        const uniqueArr = data.filter((dot) => dot.hash === hash);
        updateDataArray.push(uniqueArr);
    })

    const readyObjects = [];

    updateDataArray.map((arr) => {
        const obj = {
            label: arr[0].hash,
            data: []
        }

        arr.reverse().map((dot, i) => {
            obj.data.push([i, dot.count])
        });

        readyObjects.push(obj);
    })

    return readyObjects;
}

const mapReducer = {
    [CHART_ACTION_TYPES.SET_DATA]: (state, action) => {
        const data = prepareData(action.payload);

        return {
            ...state,
            data: data.reverse()
        }
    },

    [CHART_ACTION_TYPES.SET_SIGNAL]: (state, action) => ({
        ...state,
        signal: action.payload
    })
}

export const chartReducer = handleActions(mapReducer, initialState);

