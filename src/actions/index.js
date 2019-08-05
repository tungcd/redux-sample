import * as types from './../constants/ActionTypes';

export const listAll = () => {
    return {
        type: types.LIST_ALL
    }
};

export const addTask = (task) => {
    return {
        type: types.ADD_TASK,
        task
    }
};

export const toggleForm = () => {
    return {
        type: types.TOGGLE_FORM
    }
};

export const clearForm = () => {
    return {
        type: types.CLEAR_FORM
    }
};

export const openForm = () => {
    return {
        type: types.OPEN_FORM
    }
};

export const updateStatus = (id) => {
    return {
        type: types.UPDATE_STATUS_TASK,
        id
    }
};

export const deleteItem = (id) => {
    return {
        type: types.DELETE_ITEM,
        id
    }
};

export const editItem = (task) => {
    return {
        type: types.EDIT_ITEM,
        task

    }
};

export const clearAdd = (task) => {
    return {
        type: types.CLEAR_ADD,
        task
    }
};

export const filterTask = (filter) => {
    return {
        type: types.FILTER_TABLE,
        filter
    }
};

export const search = (keyword) => {
    return {
        type: types.SEARCH,
        keyword
    }
};

export const sort = (sort) => {
    return {
        type: types.SORT,
        sort
    }
};

export const clearTask = (task) => {
    return {
        type: types.CLEAR_TASK,
        sort
    }
};

