import { createAction } from "redux-actions";
import { ApiService } from "../../shared/http";

export const CHART_ACTION_TYPES = {
    SET_DATA: 'CHART.SET_DATA',
    SET_COUNT: 'CHART.SET_COUNT'
}

export class ChartActions {
    static setData = createAction(CHART_ACTION_TYPES.SET_DATA);

    static fetchChartData = (count) => async (dispatch) => {
        try {
            const response = await ApiService.getClicks(count);
            dispatch(setData(response.data));
        } catch(error) {
            console.log(error);
        }
    }
}