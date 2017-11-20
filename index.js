
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { createStore ,applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import MyStackNavigation from "./src/navigation/MyStackNavigation";
import reducers from './src/reducers/reducers'
import devToolsEnhancer from 'remote-redux-devtools';
import thunk from 'redux-thunk';
import {persistStore, persistCombineReducers} from 'redux-persist';
import { PersistGate } from 'redux-persist/es/integration/react';

import storage from 'redux-persist/es/storage' // default: localStorage if web, AsyncStorage if react-native
const config = {
    key: 'root',
    storage,
};

function configureStore(){
    let reducer = persistCombineReducers(config, reducers);
    let store = createStore(reducer, compose(applyMiddleware(thunk),devToolsEnhancer({ realtime: true, port: 8000 })));
    let persistor = persistStore(store);
    return { persistor, store }
}
export default class CoinOnline extends Component {
    render() {
        const { persistor, store } = configureStore();
        return (

            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <MyStackNavigation />
                </PersistGate>
            </Provider>

        );
    }
}
AppRegistry.registerComponent('CoinOnline', () => CoinOnline);
