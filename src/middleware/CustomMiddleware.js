import {addCoin, editCoin} from "../actions/actions";

export const addCoinMiddleware = (cuy, numbers, description) => (dispatch) => {
    return fetch(`https://api.cryptonator.com/api/ticker/${cuy}`)
        .then(response => response.json())
        .then(json => dispatch(addCoin( cuy, numbers, parseFloat(numbers) * json.ticker.price, description)));
};

export const editCoinMiddleware = (id, cuy, numbers, description) => (dispatch) => {
    return fetch(`https://api.cryptonator.com/api/ticker/${cuy}`)
        .then(response => response.json())
        .then(json => dispatch(editCoin( id, cuy, numbers, parseFloat(numbers) * json.ticker.price, description)));
};

