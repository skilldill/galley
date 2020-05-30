import { createAction } from "redux-actions";

import { LOAD_STATUSES, DELAY_BOARD } from "../../shared/constants";
import { ApiService } from "../../shared/http";

export const BOARD_ACTION_TYPES = {
    SET_STATUS: 'BOARD.SET_STATUS',
    CHANGE_TASK_STATUS: 'BOARD.CHANGE_TASK_STATUS',
    SET_TASKS: 'BOARD.SET_TASKS',
    SET_SIGNAL_FETCH: 'BOARD.SET_SIGNAL_FETCH'
}

export class BoardActions {
    static setStatus = createAction(BOARD_ACTION_TYPES.SET_STATUS);
    static changeStatusTask = createAction(BOARD_ACTION_TYPES.CHANGE_TASK_STATUS);
    static setTasks = createAction(BOARD_ACTION_TYPES.SET_TASKS);

    // Необходиом для реализации кривосокета (curve-socket)
    // На этот параметр будет смотреть компонента 
    // и делать 
    static setSignalFetch = createAction(BOARD_ACTION_TYPES.SET_SIGNAL_FETCH);

    static fetchTasks = (withLoadStatus) => async (dispatch) => {
        if (withLoadStatus) {
            dispatch(this.setStatus(LOAD_STATUSES.LOADING));
        }

        try {
            const response = await ApiService.getBoard();
            dispatch(this.setTasks(response.data));

            // Реализация Curve-Socket
            const curveSocketTimer = setTimeout(() => {
                dispatch(this.setSignalFetch(true));
                clearTimeout(curveSocketTimer);
            }, DELAY_BOARD)

        } catch(error) {
            // TODO: Доработать обработчик
            console.log(error);
        }
    }
}