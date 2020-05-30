import { createAction } from "redux-actions";
import { ApiService } from "../../shared/http";
import { DELAY_CHART } from "../../shared/constants";

export const CHART_ACTION_TYPES = {
    SET_DATA: 'CHART.SET_DATA',
    SET_SIGNAL: 'CHART.SET_SIGNAL'
}

export class ChartActions {
    static setData = createAction(CHART_ACTION_TYPES.SET_DATA);
    static setSignal = createAction(CHART_ACTION_TYPES.SET_SIGNAL);

    static fetchChartData = (count) => async (dispatch) => {
        try {
            const response = await ApiService.getClicks(count);
            dispatch(this.setData(response.data));
            setTimeout(() => {
                dispatch(this.setSignal(true));
            }, DELAY_CHART);
        } catch(error) {
            console.log(error);
        }
    }
}