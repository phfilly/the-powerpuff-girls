import { api } from "../../api";

const FETCH_SERIES_DATA = 'FETCH_SERIES_DATA';
const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';

export const fetchSeriesData = () => {
    return {
        type: FETCH_SERIES_DATA
    }
};

export const fetchSeriesSuccess = (payload) => {
    return {
        type: FETCH_SERIES_SUCCESS,
        payload
    }
};

export const fetchData = (endpoint) => {
    return async dispatch => {
        dispatch(fetchSeriesData());
        const request = await api(endpoint);
        dispatch(fetchSeriesSuccess(request));
    }
}
