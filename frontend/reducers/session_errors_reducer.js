import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const sessionErrorsReducers = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return new Array;
        case RECEIVE_ERRORS:
            return [].concat(action.errors);
        case CLEAR_ERRORS:{
            debugger
            return [];
        }
        default: 
            return state;
    }
}

export default sessionErrorsReducers;