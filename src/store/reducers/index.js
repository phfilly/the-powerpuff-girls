import { combineReducers } from "redux";

const initState = {
    isLoading: true,
    data: []
}

const media = (state = initState, action) => {
    switch (action.type) {
        case 'FETCH_SERIES_SUCCESS':
            return {
                ...state,
                data: action.payload,
                isLoading: false
            };
        case 'FETCH_SERIES_DATA':
            return {
                ...state,
                isLoading: true,
            };
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    media
});

export default rootReducer;