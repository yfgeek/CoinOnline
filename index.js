
import React, { Component } from 'react';
import {
    AppRegistry,
} from 'react-native';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import MyStackNavigation from "./src/navigation/MyStackNavigation";
import App from './src/reducers/reducers'
import devToolsEnhancer from 'remote-redux-devtools';

export default class CoinOnline extends Component {
    render() {
        let store = createStore(App,devToolsEnhancer({ realtime: true, port: 8000 }));
        return (
            <Provider store={store}>
            <MyStackNavigation />
            </Provider>
        );
    }
}
AppRegistry.registerComponent('CoinOnline', () => CoinOnline);
