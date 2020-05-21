import { initialState } from './selectors';
import * as actions from './actions';

export const authReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case actions.LOG_IN_REQUEST: {
            return {
                ...state,
                isLoading: true,
            };
        }
        case actions.LOG_IN_SUCCESS: {
            return {
                ...state,
                isAuth: true
            }
        }
        case actions.LOG_IN_FAILURE: {
            return {
                ...state,
                error: payload.error
            }
        }
        default: {
            return state;
        }
    }
};
