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

function isEpisodeDetailAlreadySaved(state, key, endpoint) {
    const episodeId = endpoint.split('/')[1];
    return state.media[key].payload.id === parseInt(episodeId) ? false : true;
}

function shouldFetchData(state, key, endpoint) {
    if (!!state.media[key]) {
        if (key === 'details') {
            return isEpisodeDetailAlreadySaved(state, key, endpoint);
        }
        return false;
    } else {
        return true;
    }
  }

export const fetchData = (endpoint, key) => {
    return async (dispatch, getState) => {
        try {
            if (shouldFetchData(getState(), key, endpoint)) {
                dispatch(startApiCall());
                const request = await api(endpoint);
                dispatch(fetchSeriesSuccess(request, key));
            }
        } catch (e) {
            dispatch(fetchSeriesFailed());
        }
    }
}
