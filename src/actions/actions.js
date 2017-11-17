/*
 * action 类型
 */

export const ADD_COIN = 'ADD_COIN';
export const DELETE_COIN = 'DELETE_COIN';
export const EDIT_COIN = 'EDIT_COIN';

export const SHOW_SETTING = 'SHOW_SETTING';
export const UPDATE_SETTING = 'UPDATE_SETTING';
export const INITIAL_SETTING = 'INITIAL_SETTING';


/*
 * 其它的常量
 */

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

/*
 * action 创建函数
 */


export function addCoin(text, numbers, balance, description) {
    return { type: ADD_COIN, text, numbers ,balance ,description }
}

export function deleteCoin(index) {
    return { type: DELETE_COIN, index }
}
export function editCoin(index, text, numbers, balance, description) {
    return { type: EDIT_COIN, index, text, numbers, balance, description }
}

