import { combineReducers } from 'redux'

import {
    ADD_COIN, EDIT_COIN, DELETE_COIN, VisibilityFilters,
    INITIAL_SETTING, UPDATE_SETTING, SHOW_SETTING
} from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function settings(state = {
    'nation' : 'gbp',
}, action){
    switch(action.type){
        // case INITIAL_SETTING:
        //     return {
        //         'nation' : 'gbp',
        //     };
        case UPDATE_SETTING:
            return {
                'nation' : action.nation,
            };
        case SHOW_SETTING:
            return state;
        default:
            return state;
    }
}

function coins(state = [], action) {
    switch (action.type) {
        case ADD_COIN:
            return [
                ...state,
                {
                    text: action.text,
                    numbers: action.numbers,
                    balance : action.balance,
                    description: action.description || "",
                    deleted: false,
                }
            ];
        case EDIT_COIN:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    text: action.text,
                    numbers: action.numbers,
                    balance : action.balance,
                    description: action.description,
                    deleted: false,
                }),
                ...state.slice(action.index + 1)
            ];
        case DELETE_COIN:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    deleted: true
                }),
                ...state.slice(action.index + 1)
            ];
        default:
            return state;
    }
}

const todoApp = combineReducers({
    coins: coins,
    settings: settings,
});

export default todoApp