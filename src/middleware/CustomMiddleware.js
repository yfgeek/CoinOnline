import {addCoin, editCoin} from "../actions/actions";

export const addCoinMiddleware = (cuy, numbers, description) => (dispatch) => {
    return fetch(`https://api.cryptonator.com/api/ticker/${cuy}`)
        .then(response => response.json())
        .then(json => dispatch(addCoin( cuy, numbers, parseFloat(numbers) * json.ticker.price, description)))
        .catch((e)=>{
            console.warn('网络错误')
        });
};

export const editCoinMiddleware = (id, cuy, numbers, description) => (dispatch) => {
    return fetch(`https://api.cryptonator.com/api/ticker/${cuy}`)
        .then(response => response.json())
        .then(json => dispatch(editCoin( id, cuy, numbers, parseFloat(numbers) * json.ticker.price, description)))
        .catch((e)=>{
            console.warn('网络错误')
        });
};


// export const updateCoinMiddleware = (allMap,nation) => (dispatch) => {
//     let sequence = Promise.resolve();
//     allMap.map((item,index)=>{
//         sequence = sequence.then(function() {
//             return fetch(`https://api.cryptonator.com/api/ticker/${item.text}-${nation}`)
//                 .then(response => response.json())
//                 .then(json => dispatch(editCoin( item.index, item.text+'-'+nation, item.numbers, parseFloat(item.numbers) * json.ticker.price, item.description)))
//                 .catch((e)=>{
//                     console.warn('网络错误')
//                 });
//         });
//     });
// };

