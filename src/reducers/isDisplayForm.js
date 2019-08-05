import * as types from './../constants/ActionTypes';

var initialState = false;

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_FORM:
            console.log(action);
            return !state;
        case types.CLEAR_FORM:
            state = false;
            return state;
        case types.OPEN_FORM:
            state = true;
            return state;
        default:
                return state;
    }
};


export default myReducer;