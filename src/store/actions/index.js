import { api } from "../../api";

const FETCH_SERIES_DATA = 'FETCH_SERIES_DATA';
const FETCH_SERIES_SUCCESS = 'FETCH_SERIES_SUCCESS';
const FETCH_SERIES_FAILED = 'FETCH_SERIES_FAILED';

export const startApiCall = () => {
    return {
        type: FETCH_SERIES_DATA
    }
};

export const fetchSeriesSuccess = (payload, key) => {
    return {
        type: FETCH_SERIES_SUCCESS,
        payload: { payload, key }
    }
};

export const fetchSeriesFailed = () => {
    return {
        type: FETCH_SERIES_FAILED
    }
}

export const fetchData = (endpoint, key) => {
    return async dispatch => {
        dispatch(startApiCall());
        try {
            const request = await api(endpoint);
            dispatch(fetchSeriesSuccess(request, key));
        } catch (e) {
            dispatch(fetchSeriesFailed());
        }
    }
}
