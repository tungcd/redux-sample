import * as types from './../constants/ActionTypes';

var s4 = () => {
    return Math.random((1 + Math.random()) * 0x10000).toString(16).substr(1);
}

var generateId = () => {
    return s4() + '-' + s4();
}

var findIndex = (tasks, id) => {
    var result = -1;
    tasks.forEach((task, index) => {
        if (task.id === id)
            result = index;
    });

    return result;
}


var data = JSON.parse(localStorage.getItem('task'));
var initialState = data ? data : [];

var myReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.LIST_ALL:
            console.log(action);
            return state;
        case types.ADD_TASK:
                console.log(state);
            var task = {
                id: action.task.id,
                name: action.task.name,
                status: action.task.status
            }
            if (!task.id) {
                task.id = generateId();
                    state.push(task);
            }
            else {
                index = findIndex(state, task.id);
                state[index] = task;
            }
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.UPDATE_STATUS_TASK:
            console.log(action);
            
            var id = action.id;
            var index = findIndex(state, id);
            state[index] = {
                ...state[index],
                status: !state[index].status
            };
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        case types.DELETE_ITEM:
                console.log(action);
            var id = action.id;
            var index = findIndex(state, id);
            state.splice(index, 1);
            localStorage.setItem('task', JSON.stringify(state));
            return [...state];
        default: return state;
    }
};

export default myReducer;