import * as types from './../constants/ActionTypes';

var initialState = {
    id: '',
    name: '',
    status: false
};

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.EDIT_ITEM:
            console.log(action);
            return action.task;
        case types.CLEAR_ADD:
            state = {
                id: '',
                name: '',
                status: false
            };
            return state;
        case types.CLEAR_TASK:
            state = {
                id: state.id,
                name: '',
                status: false
            }
            return state;

        default:
            return state;
    }

};


export default myReducer;