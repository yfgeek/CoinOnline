/*
 * action 类型
 */

export const ADD_COIN = 'ADD_COIN';
export const DELETE_COIN = 'DELETE_COIN';
export const EDIT_COIN = 'EDIT_COIN';

export const PUSH_BALANCE = 'PUSH_BALANCE';

export const SHOW_BALANCE = 'SHOW_BALANCE';

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

export function pushBalance(balance, cuy) {
    return { type: PUSH_BALANCE, balance , cuy}
}

export function addCoin(text, balance) {
    return { type: ADD_COIN, text, balance }
}

export function deleteCoin(index) {
    return { type: DELETE_COIN, index }
}

export function editCoin(filter) {
    return { type: EDIT_COIN, filter }
}

export function showBalance() {
    return { type: SHOW_BALANCE }
}