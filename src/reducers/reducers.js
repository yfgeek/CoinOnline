import { combineReducers } from 'redux'

import {
    ADD_COIN, EDIT_COIN, DELETE_COIN, VisibilityFilters, PUSH_BALANCE, SHOW_BALANCE,
    DELETE_BALANCE
} from '../actions/actions'
const { SHOW_ALL } = VisibilityFilters;

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        default:
            return state;
    }
}

function balance(state = [], action){
    switch(action.type){
        case PUSH_BALANCE:
            return [...state,
                 {
                        balance: action.balance,
                        deleted: false
                }
            ];
        case SHOW_BALANCE:
            return 0;
            // return state.reduce((pre, value)=>pre + value);
        case DELETE_BALANCE:
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

function coins(state = [], action) {
    switch (action.type) {
        case ADD_COIN:
            return [
                ...state,
                {
                    text: action.text,
                    numbers: action.numbers,
                }
            ];
        case EDIT_COIN:
            return [
                ...state.slice(0, action.index),
                Object.assign({}, state[action.index], {
                    completed: true
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
    visibilityFilter,
    coins: coins,
    allBalance: balance,
});

export default todoApp